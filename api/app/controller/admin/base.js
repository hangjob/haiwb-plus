'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
    async list() {
        try {
            const params = this.ctx.request.body;
            const data = await this.ctx.service.base.list(this.modelName, { params });
            this.ctx.body = this.ctx.resultData({ data });
        } catch (err) {
            this.ctx.body = this.ctx.resultData({ msg: err.errors || err.toString() });
        }
    }

    async create() {
        try {
            const params = this.ctx.request.body;
            params.id = this.ctx.helper.nanoid();
            const data = await this.ctx.service.base.create(this.modelName, { params });
            this.ctx.body = this.ctx.resultData({ data });
        } catch (err) {
            this.ctx.body = this.ctx.resultData({ msg: err.errors || err.toString() });
        }
    }

    async find() {
        try {
            const params = this.ctx.request.body;
            const data = await this.ctx.service.base.find(this.modelName, { params });
            this.ctx.body = this.ctx.resultData({ data });
        } catch (err) {
            this.ctx.body = this.ctx.resultData({ msg: err.errors || err.toString() });
        }
    }

    async update() {
        try {
            const { id, ...params } = this.ctx.request.body;
            const data = await this.ctx.service.base.update(this.modelName, { params, id });
            this.ctx.body = this.ctx.resultData({ data });
        } catch (err) {
            this.ctx.body = this.ctx.resultData({ msg: err.errors || err.toString() });
        }
    }

    async destroy() {
        try {
            const { id } = this.ctx.request.body;
            const data = await this.ctx.service.base.destroy(this.modelName, { id });
            this.ctx.body = this.ctx.resultData({ data });
        } catch (err) {
            this.ctx.body = this.ctx.resultData({ msg: err.errors || err.toString() });
        }
    }

    async increment() {
        try {
            const { id, ...params } = this.ctx.request.body;
            const data = await this.ctx.service.base.increment(this.modelName, { params, id });
            this.ctx.body = this.ctx.resultData({ data });
        } catch (err) {
            this.ctx.body = this.ctx.resultData({ msg: err.errors || err.toString() });
        }
    }

    async bulkCreate() {
        try {
            const params = this.ctx.request.body || [];
            params.forEach(item => {
                item.id = this.ctx.helper.nanoid();
            });
            const data = await this.ctx.service.base.bulkCreate(this.modelName, { params });
            this.ctx.body = this.ctx.resultData({ data });
        } catch (err) {
            this.ctx.body = this.ctx.resultData({ msg: err.errors || err.toString() });
        }
    }

}

module.exports = BaseController;
