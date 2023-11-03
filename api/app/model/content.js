'use strict';
module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    return app.model.define('tpt_content',
        {
            id: {
                type: STRING(64),
                primaryKey: true,
            },
            title: STRING(32),
            icon: STRING(64),
            keys: STRING(255),
            pid: STRING(64),
            des: STRING(255),
        });
};
