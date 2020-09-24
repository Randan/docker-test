const express = require('express');
const app = express();

const connectDB = require('./db');
const logging = require('./middlewares/logging.middleware');
const { APP_PORT } = require('./utils/getEnvVar');

const authRouter = require('./routes/auth.route');
const usersRouter = require('./routes/users.route');

const startServer = () =>
    app.listen(APP_PORT, () => console.log(`Server started with port ${APP_PORT}`));

app.use(express.json());
app.use(logging);

app.use('/auth', authRouter);
app.use('/users', usersRouter);

connectDB()
    .on('error', (e) => console.log(e))
    .on('disconnect', connectDB)
    .once('open', () => console.log('Connected to Database'))
    .once('open', startServer);