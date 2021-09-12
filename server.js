const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const db = require("./app/models");
//Routes
const authRoutes = require('./app/routes/auth.route');
const userRoutes = require('./app/routes/user.route');

//Middlware 
const { veryfyToken } = require('./app/middlewares/auth.middleware')

const app = express();
//Initializze DB
db.sequelize.sync({ force: false })
    .then(() => {
        console.log(`Database & tables created!`);
    });
app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(express.json());
app.use(cookieParser());
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})