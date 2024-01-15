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
        app.router.post(`/admin/member/${item.path}`, app.middleware.authority(), app.controller.admin.member[item.path]);
    });
    apis.forEach(item => {
        app.router.post(`/admin/banner/${item.path}`, app.middleware.authority(), app.controller.admin.banner[item.path]);
    });
    apis.forEach(item => {
        app.router.post(`/admin/classify/${item.path}`, app.middleware.authority(), app.controller.admin.classify[item.path]);
    });
    apis.forEach(item => {
        app.router.post(`/admin/reclassify/${item.path}`, app.middleware.authority(), app.controller.admin.reclassify[item.path]);
    });
    apis.forEach(item => {
        app.router.post(`/admin/topic/${item.path}`, app.middleware.authority(), app.controller.admin.topic[item.path]);
    });
    apis.forEach(item => {
        app.router.post(`/admin/relevancy/${item.path}`, app.middleware.authority(), app.controller.admin.relevancy[item.path]);
    });
    apis.forEach(item => {
        app.router.post(`/admin/logs/${item.path}`, app.middleware.authority(), app.controller.admin.logs[item.path]);
    });
    // app.router.post('/admin/content/edit', app.middleware.authority, app.controller.admin.content.edit);
};
