'use strict';

module.exports = app => {
    app.router.post('/upload/images', app.controller.upload.images);
};
