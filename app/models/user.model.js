
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name:{
      type:Sequelize.STRING(100),
      allowNull: false,
    },
    password:{
      type:Sequelize.STRING(30),
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM('ACTIVE', 'INCTIVE', 'SUSPEND'),
      defaultValue: "INCTIVE",
    }
  });

  return User;
};