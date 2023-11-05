'use strict';
module.exports = app => {
    const { STRING, INTEGER, DATE, TEXT, BOOLEAN } = app.Sequelize;
    return app.model.define('tpt_content',
        {
            id: {
                type: STRING(32),
                primaryKey: true,
            },
            nid: {
                type: INTEGER(11),
                autoIncrement: true,
                unique: true,
                allowNull: false,
            },
            title: STRING(32),
            keys: {
                type: STRING(255),
                get() {
                    const keys = this.getDataValue('keys');
                    return keys && keys.split(',') || [];
                },
                set(value) {
                    value && this.setDataValue('keys', value.join(','));
                },
            },
            uid: STRING(128),
            des: STRING(500),
            url: STRING(500),
            content: TEXT('long'), // md格式 转换后的内容
            html: TEXT('long'), // 源md格式
            like: {
                type: INTEGER(11),
                defaultValue: 1,
            }, // 点赞
            banner: STRING(500),
            cover: STRING(128), // 封面图
            download: STRING(500),
            views: {
                type: INTEGER(11),
                defaultValue: 1,
            },
            seo: STRING(500),
            nav_id: STRING(128), // 导航ID
            router: STRING(32), // 别名路由
            sort: {
                type: INTEGER(11),
                defaultValue: 1,
            },
            genre_ids: STRING(500),
            langue: {
                type: INTEGER(11),
                defaultValue: 1,
            }, // 语言
            label: {
                type: INTEGER(11),
                defaultValue: 1,
            }, // 标签
            shows: BOOLEAN, // 是否显示
        });
};
