'use strict';

const Controller = require('egg').Controller;

class Common extends Controller {
    // 文章内容加1
    async contentPlus() {
        try {
            const params = this.ctx.request.body;
            await this.app.model.Content.increment({like: 1}, { where: { id: params.id } });
            this.ctx.body = this.ctx.resultData();
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }
}

module.exports = Common;
