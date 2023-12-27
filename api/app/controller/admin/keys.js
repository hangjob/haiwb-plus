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
                    await this.setNavIdFind(item);
                }
            }
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }


    async page() {
        try {
            const {page = 1, limit = 10, ...params} = this.ctx.request.body;
            const offset = (page - 1) * limit;
            const options = Object.assign({
                limit,
                offset,
            }, params);
            options.order = [[ 'createdAt', 'DESC' ]];
            const data = await this.ctx.model[this.modelName].findAndCountAll(options);
            if (isArray(data.rows)) {
                for (const item of data.rows) {
                    await this.setNavIdFind(item);
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
            const data = await this.app.model[this.modelName].findOne(params);
            await this.setNavIdFind(data);
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            throw new Error(err);
        }
    }

}

module.exports = KeysController;
