const router = require('express').Router();
const usersController = require('../controllers/users.controller');
const getUser = require('../middlewares/users.middleware').getUser;
const { authenticateToken } = require('../middlewares/jwt.middleware');

router.get(
    '/',
    authenticateToken,
    usersController.get
);

router.get(
    '/:id',
    authenticateToken,
    getUser,
    usersController.getById
);

router.post(
    '/',
    authenticateToken,
    usersController.post
);

router.patch(
    '/:id',
    authenticateToken,
    getUser,
    usersController.patch
);

router.delete(
    '/:id',
    authenticateToken,
    getUser,
    usersController.delete
);

module.exports = router;