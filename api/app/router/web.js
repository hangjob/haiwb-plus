'use strict';
module.exports = app => {
    app.router.post('/web/nav/three', app.middleware.authority(), app.controller.admin.nav.three);
    app.router.post('/web/classify/three', app.middleware.authority(), app.controller.admin.classify.three);
};
