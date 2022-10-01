const app = require('./config/server');
const PORT = process.env.PORT || 3000;
const db = require('./models/index');
const bcrypt = require('bcryptjs');
const UsersToInject = require('./data/users.json');
const records = require('./data/records.json');

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
      db.Users.bulkCreate(hashedUsers);
      db.Records.bulkCreate(records);
    })
    .then(() => {
      console.log('Database sync successfully');
    });
});
