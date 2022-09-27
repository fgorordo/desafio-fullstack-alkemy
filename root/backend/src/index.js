const app = require('./config/server');
const PORT = process.env.PORT || 3000;
const db = require('./models/index');

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  db.sequelize.sync({ force: true })
    .then(() => {
      console.log('Database sync successfully');
    });
});
