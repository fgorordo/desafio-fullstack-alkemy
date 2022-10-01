module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Categories', {
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'categories'
  });

  return Category;
};
