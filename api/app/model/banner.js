'use strict';
module.exports = app => {
    const { STRING, INTEGER, BIGINT, DATE, BOOLEAN } = app.Sequelize;
    return app.model.define('tpt_banner',
        {
            id: {
                type: STRING(32),
                primaryKey: true,
            },
            title: {
                type: STRING(20),
                validate: {
                    notEmpty: true,
                },
            },
            url: STRING(128), // 链接地址
            type: STRING(128),
            des: STRING(500),
            cover: STRING(128), // 封面图
            shows: BOOLEAN, // 是否显示
        });
};
