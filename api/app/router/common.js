'use strict';

module.exports = app => {
    app.router.post('/common/login', app.controller.common.login);
    app.router.post('/common/userinfo', app.controller.common.userinfo);
};
