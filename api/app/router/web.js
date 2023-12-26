'use strict';
module.exports = app => {
    app.router.post('/web/nav/three', app.controller.admin.nav.three);
    app.router.post('/web/classify/three', app.controller.admin.classify.three);
    app.router.post('/web/content/next', app.controller.admin.content.next);
    app.router.post('/web/keys/moreProducts', app.controller.web.keys.moreProducts);
    app.router.post('/web/common/contentPlus', app.controller.web.common.contentPlus);
    app.router.post('/web/common/contentHot', app.controller.web.common.contentHot);
    app.router.post('/web/keys/kyesBanner', app.controller.web.keys.kyesBanner);
    app.router.post('/web/common/navList', app.controller.web.common.navList);
    app.router.post('/web/common/contentRand', app.controller.web.common.contentRand);
};
