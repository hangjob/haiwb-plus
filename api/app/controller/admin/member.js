'use strict';

const BaseController = require('./base');

class MemberController extends BaseController {

    constructor(ctx) {
        super(ctx);
        this.modelName = 'Member';
        this.idSize = 16;
    }

    async create() {
        try {
            const params = this.ctx.request.body;
            params.id = this.ctx.helper.nanoid(this.idSize);
            this.ctx.validate({
                code: { type: 'string', required: true },
                password: { type: 'string', required: true },
                email: { type: 'string', required: true },
            }, this.ctx.request.body);
            const Op = this.app.Sequelize.Op;
            const findOne = await this.ctx.model.Member.findOne({
                where: {
                    [Op.or]: [{name: params.name }, {email: params.email}],
                },
            });
            if (!findOne) {
                params.passHash = this.ctx.helper.encrypt(this.ctx.helper.md5(params.password));
                const data = await this.ctx.model[this.modelName].create(params);
                this.ctx.body = this.ctx.resultData({data});
            } else {
                this.ctx.body = this.ctx.resultData({msg: '用户已存在'});
            }
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }

}

module.exports = MemberController;
