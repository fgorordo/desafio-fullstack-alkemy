module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Categories', {
    categoryId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
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
