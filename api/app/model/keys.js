'use strict';
module.exports = app => {
    const { STRING, INTEGER, BIGINT, DATE, BOOLEAN } = app.Sequelize;
    return app.model.define('tpt_keys',
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
            des: STRING(255),
            shows: BOOLEAN, // 是否显示
        });
};
