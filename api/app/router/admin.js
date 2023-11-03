'use strict';

const apis = [ 'list', 'create', 'find', 'update', 'destroy', 'increment', 'bulkCreate' ];
module.exports = app => {
    apis.forEach(item => {
        app.router.post(`/admin/content/${item}`, app.controller.admin.content[item]);
    });
    apis.forEach(item => {
        app.router.post(`/admin/menu/${item}`, app.controller.admin.menu[item]);
    });
    // app.router.post('/admin/content/edit', app.middleware.authority, app.controller.admin.content.edit);
};
