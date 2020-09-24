const fs = require('fs');
const dayjs = require('dayjs');

module.exports = (req, res, next) => {
    const now = dayjs().format('YYYY-MM-DDTHH:mm:ss');
    const data = `[${now}] ${req.method} ${req.url} ${req.get("user-agent")}`;
    fs.appendFile("server.log", data + "\n", function(){});
    next();
};