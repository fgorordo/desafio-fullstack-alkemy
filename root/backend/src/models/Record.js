module.exports = (sequelize, DataTypes) => {
  const Record = sequelize.define('Records', {
    recordId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    concept: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'records',
    underscored: true
  });

  Record.associate = (db) => {
    Record.belongsTo(db.Users, {
      foreignKey: 'userId',
      as: 'records'
    });
  };

  return Record;
};
