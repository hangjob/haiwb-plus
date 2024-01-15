'use strict';
module.exports = app => {
    const { STRING, INTEGER, BIGINT, DATE, BOOLEAN } = app.Sequelize;
    return app.model.define('tpt_logs',
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
            des: STRING(500),
            cover: STRING(500), // 封面图
            shows: BOOLEAN, // 是否显示
        });
};
