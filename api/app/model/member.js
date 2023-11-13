'use strict';
module.exports = app => {
    const {STRING, INTEGER, BIGINT, DATE, BOOLEAN, TEXT} = app.Sequelize;
    return app.model.define('tpt_member',
        {
            id: {
                type: STRING(30),
                primaryKey: true,
            },
            name: {
                type: STRING(20),
                validate: {
                    notEmpty: true,
                },
            },
            email: {
                type: STRING(30),
                validate: {
                    isEmail: true,
                    notEmpty: true,
                },
            },
            // 平台类型
            platform: {
                type: INTEGER(11),
                defaultValue: 1,
            },
            des: STRING(500),
            passHash: TEXT,
            shows: {
                type: BOOLEAN,
                defaultValue: true,
            }, // 是否显示
        });
};
