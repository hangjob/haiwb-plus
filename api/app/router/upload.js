'use strict';

module.exports = app => {
    app.router.post('/upload/images', app.middleware.authority(), app.controller.upload.images);
};
