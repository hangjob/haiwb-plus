/* eslint valid-jsdoc: "off" */

'use strict';


/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1696992326018_1400';

    // add your middleware config here


    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    config.sequelize = {
        dialect: 'mysql',
        database: 'vip_itnavs',
        host: '127.0.0.1',
        port: '3306',
        username: 'root',
        password: '123456',
        underscored: false,
        timezone: '+08:00',
        define: {
            timestamps: true,
            freezeTableName: true,
        },
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
