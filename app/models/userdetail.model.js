
module.exports = (sequelize, Sequelize) => {
  const Userdetail = sequelize.define("userdetail", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    name_en: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    name_ta: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    name_si: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    dob: {
      type: Sequelize.DATEONLY,
    },
    salary: {
      type: Sequelize.DOUBLE,
    },
    special_req: {
      type: Sequelize.BOOLEAN ,
    },
  });

  return Userdetail;
};