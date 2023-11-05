'use strict';
module.exports = app => {
    const { STRING, INTEGER, BIGINT, DATE, BOOLEAN } = app.Sequelize;
    return app.model.define('tpt_nav',
        {
            id: {
                type: STRING(64),
                primaryKey: true,
            },
            title: {
                type: STRING(32),
                unique: true,
                allowNull: false,
            },
            pid: STRING(64),
            des: STRING(500),
            router: STRING(32), // 别名路由
            cover: STRING(128), // 封面图
            shows: BOOLEAN, // 是否显示
        });
};
