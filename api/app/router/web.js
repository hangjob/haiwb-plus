'use strict';
module.exports = app => {
    app.router.post('/web/nav/three', app.middleware.authority(), app.controller.admin.nav.three);
    app.router.post('/web/classify/three', app.middleware.authority(), app.controller.admin.classify.three);
    app.router.post('/web/content/next', app.controller.admin.content.next);
    app.router.post('/web/keys/moreProducts', app.controller.web.keys.moreProducts);
    app.router.post('/web/common/contentPlus', app.controller.web.common.contentPlus);
};
