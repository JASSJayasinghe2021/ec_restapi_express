const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })

// Models (tables)
db.user = require("./user.model")(sequelize, Sequelize);
db.userdetail = require("./userdetail.model")(sequelize, Sequelize);
db.role = require("./role.model")(sequelize, Sequelize);
db.vehicle = require("./vehicle.model")(sequelize, Sequelize);

// MANY TO MANY RELATIONSHIP (user - role)
db.user.belongsToMany(db.role, {
  through: "user_role",
  as: "roles",
  foreignKey: "role_id",
});

db.role.belongsToMany(db.user, {
  through: "user_role",
  as: "users",
  foreignKey: "user_id",
});

// ONE TO ONE RELATIONSHIP (user - userdetail)
db.user.hasOne(db.userdetail, {});
db.userdetail.belongsTo(db.user);

// MANY TO ONE RELATIONSHIP (user - vehicle)
db.user.hasMany(db.vehicle);
db.vehicle.belongsTo(db.user);

module.exports = db;
