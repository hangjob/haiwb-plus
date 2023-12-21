'use strict';
module.exports = app => {
    const {STRING, INTEGER, BIGINT, DATE, BOOLEAN} = app.Sequelize;
    // 二级分类
    return app.model.define('tpt_relevancy',
        {
            id: {
                type: STRING(32),
                primaryKey: true,
            },
            content_id: STRING(64), // 文章ID
            classify_id: STRING(64), // 一级分类
            reclassify_id: STRING(64), // 二级分类
            topic_id: STRING(64), // 话题分类
            // 是否显示
            shows: {
                type: BOOLEAN,
                defaultValue: true,
            },
        });
};

