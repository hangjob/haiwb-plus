'use strict';

const Controller = require('egg').Controller;

class CommonController extends Controller {
    async login() {
        const { ctx, service } = this;
        const token = await ctx.helper.generateToken({ da: 1 });
        ctx.body = ctx.resultData({ data: token });
    }

    async userinfo() {
        const { ctx, service } = this;
        const token = await ctx.helper.generateToken({ da: 1 });
        ctx.body = ctx.resultData({ data: token });
    }

}

module.exports = CommonController;
