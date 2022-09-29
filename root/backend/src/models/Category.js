module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Categories', {
    categoryId: {
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
    tableName: 'categories',
    underscored: true
  });

  return Category;
};
