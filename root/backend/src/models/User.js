module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    resumeAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'users'
  });

  User.associate = (db) => {
    User.hasMany(db.Records, {
      foreignKey: 'userId',
      as: 'records'
    });
  };

  return User;
};
