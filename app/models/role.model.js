
module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("role", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    role_name:{
     type:Sequelize.STRING(30),
     allowNull: false,
     unique: true,
    },
    status: {
      type: Sequelize.ENUM('ACTIVE', 'INCTIVE'),
      defaultValue: "INCTIVE",
    }
  });

  return Role;
};