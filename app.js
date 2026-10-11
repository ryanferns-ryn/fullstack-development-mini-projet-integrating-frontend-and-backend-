const express = require('express');

const app = express();
const port = 3000;

const sequelize = require('./db');
const User = require('./user');

app.use(express.json());


// Home
app.get('/', (req, res) => {
    res.send('RealtyHub Backend is running');
});


// REGISTER
app.post('/register', async (req, res) => {

    try {

        const { name, email, phone, password } = req.body;

        const user = await User.create({
            name,
            email,
            phone,
            password
        });

        const userData = user.toJSON();
        delete userData.password;

        res.json({
            message: 'Registration successful',
            user: userData
        });

    } catch (error) {

        res.status(400).json({
            message: 'Registration failed',
            error: error.message
        });

    }

});


// LOGIN
app.post('/login', async (req, res) => {

    try {

        const { email, password } = req.body;


        if (!email || !password) {

            return res.status(400).json({
                message: 'Email and password are required'
            });

        }


        const user = await User.findOne({
            where: {
                email: email,
                password: password
            }
        });


        if (!user) {

            return res.status(401).json({
                message: 'Invalid email or password'
            });

        }
        const userData = user.toJSON();
        delete userData.password;
        res.json({
            message: 'Login successful',
            user: userData
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({

           message: 'Login failed'

        });

    }

});

// GET ALL USERS
app.get('/users', async (req, res) => {

    try {

        const users = await User.findAll({
            attributes: {
                exclude: ['password']
            }
        });

        res.json(users);

    } catch (error) {

        res.status(500).json({
            message: 'Unable to get users'
        });

    }

});

// GET ONE USER
app.get('/user/:id', async (req, res) => {

    try {

        const user = await User.findByPk(req.params.id, {
            attributes: {
                exclude: ['password']
            }
        });

        if (!user) {

            return res.status(404).json({
                message: 'User not found'
            });

        }

        res.json(user);

    } catch (error) {

        res.status(500).json({
            message: 'Unable to get user'
        });

    }

});

// UPDATE USER
app.put('/user/:id', async (req, res) => {

    try {

        const user = await User.findByPk(
            req.params.id
        );


        if (!user) {

            return res.status(404).json({
                message: 'User not found'
            });

        }


        const {
            name,
            email,
            phone,
            password
        } = req.body;


        const updatedPassword =
            password &&
            password.trim() !== ''
                ? password
                : user.password;


        await User.update(

            {
                name: name,
                email: email,
                phone: phone,
                password: updatedPassword
            },

            {
                where: {
                    id: req.params.id
                }
            }

        );


        const updatedUser =
            await User.findByPk(
                req.params.id,
                {
                    attributes: {
                        exclude: ['password']
                    }
                }
            );


        res.json({

            message:
                'User updated successfully',

            user: updatedUser

        });


    } catch (error) {

        console.log(error);

        res.status(400).json({

            message:
                'Unable to update user',

            error: error.message

        });

    }

});


// DELETE USER
app.delete('/user/:id', async (req, res) => {

    try {

        const deleted = await User.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!deleted) {

            return res.status(404).json({
                message: 'User not found'
            });

        }

        res.json({
            message: 'User deleted successfully'
        });

    } catch (error) {

        res.status(500).json({
            message: 'Unable to delete user'
        });

    }

});


// CONNECT DATABASE
sequelize.sync()
    .then(() => {

        console.log('Database connected');
        console.log('Users table ready');

        app.listen(port, () => {
            console.log(`Server running at http://localhost:3000`);
        });

    })
    .catch((error) => {

        console.log('Database connection failed');
        console.log(error);

    });