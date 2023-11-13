'use strict';
module.exports = app => {
    const { STRING, INTEGER, BIGINT, DATE, BOOLEAN } = app.Sequelize;
    return app.model.define('tpt_menu',
        {
            id: {
                type: STRING(32),
                primaryKey: true,
            },
            title: STRING(32),
            icon: STRING(64),
            keys: {
                type: STRING(255),
                get() {
                    const keys = this.getDataValue('keys');
                    return keys && keys.join(',') || [];
                },
                set(value) {
                    value && this.setDataValue(value.split(','));
                },
            },
            pid: STRING(64),
            des: STRING(255),
            shows: BOOLEAN,
            path: STRING(128),
            order: BIGINT(11),
            file: STRING(128),
            isIframe: BOOLEAN,
            url: STRING(500),
            keepAlive: BOOLEAN,
            tabHidden: BOOLEAN,
            tabFix: BOOLEAN,
            httpFile: STRING(255),
        });
};
