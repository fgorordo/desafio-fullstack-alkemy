module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Types', {
    typeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'types'
  });

  return Type;
};
