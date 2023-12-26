/* eslint valid-jsdoc: "off" */

'use strict';

const I18n = require('i18n');

I18n.configure({
    locales: [ 'zh-CN' ],
    defaultLocale: 'zh-CN',
    directory: __dirname + '/locale',
});


/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {{}}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1696992326018_1400';

    // add your middleware config here

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };


    config.jwt = {
        secret: 'ABCD20231017QWERYSUNXSJL', // 可以自定义
        sign: {
            expiresIn: 8 * 60 * 60, // 过期时间8小时
        },
    };

    config.security = {
        csrf: {
            enable: false,
        },
    };

    config.validate = {
        convert: true,
        translate() {
            const args = Array.prototype.slice.call(arguments);
            return I18n.__.apply(I18n, args);
        },
    };

    config.i18n = {
        defaultLocale: 'zh-CN',
        queryField: 'locale',
        cookieField: 'locale',
        // Cookie 的 domain 配置，默认为空，代表当前域名有效
        cookieDomain: '',
        // Cookie 默认 `1y` 一年后过期， 如果设置为 Number，则单位为 ms
        cookieMaxAge: '1y',
    };


    config.multipart = {
        mode: 'file',
        fileSize: '3mb', // 接收文件大小
        whitelist: [ // 允许接收的文件类型
            '.png',
            '.jpg',
            '.webp',
            '.gif',
        ],
    };


    return {
        ...config,
        ...userConfig,
    };
};
