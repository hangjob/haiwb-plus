'use strict';
const Controller = require('egg').Controller;
const isArray = require('lodash/isArray');
const BaseController = require('./base');
class Common extends BaseController {
    // 文章内容加1
    async contentPlus() {
        try {
            const params = this.ctx.request.body;
            await this.app.model.Content.increment({like: 1}, {where: {id: params.id}});
            this.ctx.body = this.ctx.resultData();
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }

    async contentHot() {
        const params = this.ctx.request.body;
        let order = null;
        if (params.order === 'like') {
            order = this.app.Sequelize.col('like');
        } else {
            order = this.app.Sequelize.col('views');
        }
        try {
            const data = await this.app.model.Content.findAll({
                attributes: {exclude: [ 'content', 'html' ]},
                limit: 5,
                order: [ order, [ 'createdAt', 'DESC' ]],
            });
            if (isArray(data)) {
                for (const item of data) {
                    await this.setKeysList(item);
                    await this.setNavIdList(item);
                }
            }
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }


    // web菜单 分类
    async navList() {
        try {
            const params = this.ctx.request.body;
            const data = await this.app.model.Nav.findAll({
                limit: 5,
                order: [[ 'createdAt', 'DESC' ]],
            });
            if (isArray(data)) {
                for (const item of data) {
                    const count = await this.ctx.model.Content.count({
                        where: {
                            [this.app.Sequelize.Op.or]: [{nav_id: {[this.app.Sequelize.Op.like]: `%${item.id}%`}}],
                        },
                    });
                    const pid = await this.ctx.model.Classify.findOne({where: {id: item.pid}});
                    item.setDataValue('classify_det', pid);
                    item.setDataValue('content_count', count);
                }
            }
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }

    async contentRand() {
        try {
            const params = this.ctx.request.body;
            const data = await this.app.model.Content.findOne({
                order: [ this.app.Sequelize.literal('rand()') ],
            });
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }

}

module.exports = Common;
