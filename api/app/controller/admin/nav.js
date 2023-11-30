'use strict';

const BaseController = require('./base');

class NavController extends BaseController {

    constructor(ctx) {
        super(ctx);
        this.modelName = 'Nav';
        this.idSize = 8;
    }

    async submenu() {
        try {
            const params = this.ctx.request.body;
            const Op = this.app.Sequelize.Op;
            const data = await this.ctx.model.Nav.findAll({
                where: {
                    [Op.or]: [{pid: params.pid}],
                },
            });
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }
}

module.exports = NavController;
