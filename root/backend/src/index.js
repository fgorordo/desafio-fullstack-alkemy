const app = require('./config/server');
const PORT = process.env.PORT || 3000;
const db = require('./models/index');
const UsersToInject = require('./data/users.json');

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  db.sequelize.sync({ force: true })
    .then(() => {
      db.Users.bulkCreate(UsersToInject);
      console.log(UsersToInject);
    })
    .then(() => {
      console.log('Database sync successfully');
    });
});
