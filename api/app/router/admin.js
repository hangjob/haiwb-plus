'use strict';

const apis = [ 'list', 'page', 'create', 'find', 'update', 'destroy', 'increment', 'bulkCreate' ];
module.exports = app => {
    apis.forEach(item => {
        app.router.post(`/admin/content/${item}`, app.controller.admin.content[item]);
    });
    apis.forEach(item => {
        app.router.post(`/admin/menu/${item}`, app.controller.admin.menu[item]);
    });
    apis.forEach(item => {
        app.router.post(`/admin/keys/${item}`, app.controller.admin.keys[item]);
    });
    apis.forEach(item => {
        app.router.post(`/admin/nav/${item}`, app.controller.admin.nav[item]);
    });
    // app.router.post('/admin/content/edit', app.middleware.authority, app.controller.admin.content.edit);
};
