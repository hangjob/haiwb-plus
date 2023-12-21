'use strict';

const Controller = require('egg').Controller;

class Keys extends Controller {
    async moreProducts() {
        try {
            const data = await this.ctx.model.Keys.findAll({
                where: {
                    label: 1,
                },
            }, {
                limit: 3,
            });
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }
}

module.exports = Keys;
