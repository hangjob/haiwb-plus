'use strict';
module.exports = app => {
    const { STRING, INTEGER, BIGINT, DATE, BOOLEAN } = app.Sequelize;
    // 三级分类=话题表
    return app.model.define('tpt_topic',
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
            icon: {
                type: STRING(50),
            },
            pid: STRING(64),
            des: STRING(500),
            router: STRING(32), // 别名路由
            cover: STRING(128), // 封面图
            shows: BOOLEAN, // 是否显示
        });
};

