/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    const config = exports = {};

    config.mysql = {
        client: {
            host: '127.0.0.1',
            port: '3306',
            user: 'vip_itnavs',
            password: '123456',
            database: 'vip_itnavs',
        },
        app: true,
        agent: false,
    };


    config.redis = {
        client: {
            port: 6379,
            host: '127.0.0.1',
            password: 'auth',
            db: 0,
        },
    };

    config.sequelize = {
        dialect: 'mysql',
        database: 'vip_itnavs',
        host: '127.0.0.1',
        port: '3306',
        username: 'vip_itnavs',
        password: '123456',
        underscored: false,
        timezone: '+08:00',
        define: {
            timestamps: true,
            freezeTableName: true,
        },
    };

    return {
        ...config,
    };
};
