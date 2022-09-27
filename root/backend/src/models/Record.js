module.exports = (sequelize, DataTypes) => {
  const Record = sequelize.define('Records', {
    recordId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    concept: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING
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

  return Record;
};
