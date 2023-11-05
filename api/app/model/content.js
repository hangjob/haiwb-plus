'use strict';
module.exports = app => {
    const { STRING, INTEGER, DATE, TEXT, BOOLEAN } = app.Sequelize;
    return app.model.define('tpt_content',
        {
            id: {
                type: STRING(64),
                primaryKey: true,
            },
            title: STRING(32),
            keys: STRING(255),
            uid: STRING(128),
            des: STRING(255),
            content: TEXT('long'),
            like: INTEGER(11), // 点赞
            banner: STRING(500),
            cover: STRING(128), // 封面图
            download: STRING(500),
            views: INTEGER(11),
            seo: STRING(500),
            nav_id: STRING(128), // 导航ID
            router: STRING(32), // 别名路由
            sort: INTEGER(11),
            genre_ids: STRING(500),
            langue: INTEGER(11), // 语言
            shows: BOOLEAN, // 是否显示
        });
};
