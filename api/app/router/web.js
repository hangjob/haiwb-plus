'use strict';

module.exports = app => {
    app.router.post('/admin/nav/submenu', app.middleware.authority(), app.controller.admin.nav.submenu);
};
