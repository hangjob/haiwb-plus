'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
    async list() {
        await this.page();
    }

    async page() {
        try {
            const data = await this.ctx.model[this.modelName].findAll();
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }

    async create() {
        try {
            const params = this.ctx.request.body;
            params.id = this.ctx.helper.nanoid(this.idSize || 20);
            const data = await this.ctx.model[this.modelName].create(params);
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }

    async find() {
        try {
            const params = this.ctx.request.body;
            const data = await this.ctx.model[this.modelName].findOne(params);
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }

    async update() {
        try {
            const params = this.ctx.request.body;
            const data = await this.ctx.model[this.modelName].update(params);
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }

    async destroy() {
        try {
            const {id} = this.ctx.request.body;
            const data = await this.ctx.model[this.modelName].destroy({id});
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }

    async increment() {
        try {
            const params = this.ctx.request.body;
            const data = await this.ctx.model[this.modelName].increment(params);
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }

    async bulkCreate() {
        try {
            const params = this.ctx.request.body || [];
            params.forEach(item => {
                item.id = this.ctx.helper.nanoid();
            });
            const data = await this.ctx.model[this.modelName].bulkCreate(params);
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }

}

module.exports = BaseController;
