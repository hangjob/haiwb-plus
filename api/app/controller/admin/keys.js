'use strict';

const BaseController = require('./base');
const isArray = require('lodash/isArray');

class KeysController extends BaseController {

    constructor(ctx) {
        super(ctx);
        this.modelName = 'Keys';
        this.idSize = 8;
    }

    async list() {
        try {
            const params = this.ctx.request.body;
            const where = {};
            if (params && params.nav_id) {
                where.nav_id = params.nav_id;
            }
            if (params.limit) {
                params.limit = parseInt(params.limit);
            }
            const data = await this.ctx.model[this.modelName].findAll({where, ...params});
            if (isArray(data)) {
                for (const item of data) {
                    const find = await this.ctx.model.Nav.findOne({where: {id: item.nav_id}});
                    item.setDataValue('nav_id_find', find);
                }
            }
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }


    async find() {
        try {
            const params = this.ctx.request.body;
            const data = await this.app.model[this.modelName].findOne({where: {id: params.id}});
            if (data.nav_id) {
                const find = await this.app.model.Nav.findOne({where: {id: data.nav_id}});
                data.setDataValue('nav_det', find);
            }
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            throw new Error(err);
        }
    }

}

module.exports = KeysController;
