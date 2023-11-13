'use strict';

module.exports = app => {
    app.router.post('/common/login', app.controller.common.login);
    app.router.post('/common/userinfo', app.middleware.authority({switch: false}), app.controller.common.userinfo);
};
