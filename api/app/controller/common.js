'use strict';

const Controller = require('egg').Controller;

class CommonController extends Controller {
    async login() {
        const { ctx, service } = this;
        const params = ctx.request.body;
        this.ctx.validate({
            password: { type: 'string', required: true },
            name: { type: 'string', required: true },
        }, this.ctx.request.body);
        const findOne = await ctx.model.Member.findOne({where: {name: params.name}});
        if (findOne) {
            if (findOne && (this.ctx.helper.decrypt(findOne.passHash) === this.ctx.helper.md5(params.password))) {
                const token = await ctx.helper.generateToken({name: findOne.name, id: findOne.id});
                ctx.body = ctx.resultData({ data: token });
            } else {
                ctx.body = ctx.resultData({msg: '密码错误'});
            }
        } else {
            ctx.body = ctx.resultData({msg: '未注册账号'});
        }
    }

    async userinfo() {
        const { ctx, service } = this;
        const authorization = ctx.request.header.authorization;
        if (authorization) {
            try {
                const data = await ctx.helper.verifyToken(authorization);
                const findOne = await ctx.model.Member.findOne({where: {id: data.id}});
                ctx.body = ctx.resultData({ data: findOne });
            } catch (e) {
                ctx.body = ctx.resultData({ msg: 'access_token过期', code: 1003 });
            }
        } else {
            ctx.body = ctx.resultData({ msg: '缺少access_token', code: 1003 });
        }
    }

}

module.exports = CommonController;
