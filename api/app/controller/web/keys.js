'use strict';

const isArray = require('lodash/isArray');
const Controller = require('egg').Controller;

class Keys extends Controller {

    async setRowItem(data) {
        if (isArray(data)) {
            for (const item of data) {
                const find = await this.ctx.model.Nav.findOne({where: {id: item.nav_id}});
                item.setDataValue('nav_id_find', find);
            }
        }
    }

    async moreProducts() {
        try {
            const data = await this.ctx.model.Keys.findAll({
                where: {
                    label: 1, // 推荐
                },
                limit: 3,
            });
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }

    async kyesBanner() {
        try {
            const data = await this.ctx.model.Keys.findAll({
                limit: 9,
                order: [[ 'createdAt', 'DESC' ]],
            });
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }
}

module.exports = Keys;
