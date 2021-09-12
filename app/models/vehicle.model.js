
module.exports = (sequelize, Sequelize) => {
  const Vehicle = sequelize.define("vehicle", {
    id: {
      type: Sequelize.STRING(12),
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    vehi_type:{
      type: Sequelize.ENUM('CAR', 'VAN', 'BUS'),
      defaultValue: "CAR",
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM('ACTIVE', 'CONDEMNED', 'GARAGE'),
      defaultValue: "ACTIVE",
    }
  });

  return Vehicle;
};