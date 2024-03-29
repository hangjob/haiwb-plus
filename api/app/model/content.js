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
                primaryKey: true,
            },
            title: STRING(128),
            origin: STRING(32), // 源地址
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
            uid: STRING(32),
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
            panTitle: STRING(500), // 资源地址
            pan: STRING(500), // 资源地址
            panPas: STRING(32), // 资源密码
            views: {
                type: INTEGER(11),
                defaultValue: 1,
            },
            seo: STRING(500),
            nav_id: {
                type: STRING(255),
                get() {
                    const keys = this.getDataValue('nav_id');
                    return keys && keys.split(',') || [];
                },
                set(value) {
                    value && this.setDataValue('nav_id', value.join(','));
                },
            }, // 导航ID
            classify_id: {
                type: STRING(32),
            },
            router: STRING(32), // 别名路由
            sort: {
                type: INTEGER(11),
                defaultValue: 1,
            },
            langue: {
                type: INTEGER(11),
                defaultValue: 1,
            }, // 语言
            label: {
                type: INTEGER(11),
                defaultValue: 1,
            }, // 标签
            visitor: BOOLEAN, // 游客访问
            shows: BOOLEAN, // 是否显示
        });
};
