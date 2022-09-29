const app = require('./config/server');
const PORT = process.env.PORT || 3000;
const db = require('./models/index');
const UsersToInject = require('./data/users.json');
const bcrypt = require('bcryptjs');

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  db.sequelize.sync({ force: true })
    .then(() => {
      const hashedUsers = UsersToInject.map((user) => {
        const hashedPassword = bcrypt.hashSync(user.password, 10);
        const userWithHashedPassword = {
          ...user,
          password: hashedPassword
        };
        delete userWithHashedPassword.repassword;
        return userWithHashedPassword;
      });
      console.log(hashedUsers);
      db.Users.bulkCreate(hashedUsers);
    })
    .then(() => {
      console.log('Database sync successfully');
    });
});
