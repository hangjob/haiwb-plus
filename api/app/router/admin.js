'use strict';

const apis = [
    {path: 'list', switch: true},
    {path: 'page', switch: true},
    {path: 'create', switch: false},
    {path: 'find', switch: true},
    {path: 'update', switch: true},
    {path: 'destroy', switch: true},
    {path: 'increment', switch: true},
    {path: 'bulkCreate', switch: true},
];
module.exports = app => {
    apis.forEach(item => {
        app.router.post(`/admin/content/${item.path}`, app.middleware.authority(), app.controller.admin.content[item.path]);
    });
    apis.forEach(item => {
        app.router.post(`/admin/menu/${item.path}`, app.middleware.authority(), app.controller.admin.menu[item.path]);
    });
    apis.forEach(item => {
        app.router.post(`/admin/keys/${item.path}`, app.middleware.authority(), app.controller.admin.keys[item.path]);
    });
    apis.forEach(item => {
        app.router.post(`/admin/nav/${item.path}`, app.middleware.authority(), app.controller.admin.nav[item.path]);
    });
    apis.forEach(item => {
        app.router.post(`/admin/member/${item.path}`, app.middleware.authority(item), app.controller.admin.member[item.path]);
    });
    apis.forEach(item => {
        app.router.post(`/admin/banner/${item.path}`, app.middleware.authority(item), app.controller.admin.banner[item.path]);
    });
    // app.router.post('/admin/content/edit', app.middleware.authority, app.controller.admin.content.edit);
};
