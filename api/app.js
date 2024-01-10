'use strict';

// app.js
module.exports = app => {
    // 是否开启验证接口-sing 默认关闭
    app.config.coreMiddleware.unshift('sing');
};
