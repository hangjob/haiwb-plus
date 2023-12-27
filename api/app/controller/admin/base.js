'use strict';

const isArray = require('lodash/isArray');
const Controller = require('egg').Controller;

class BaseController extends Controller {

    // set 关键词
    async setKeysList(item) {
        if (isArray(item.keys)) {
            const list = [];
            for (const todo of item.keys) {
                const find = await this.ctx.model.Keys.findOne({where: {id: todo}});
                if (find) {
                    list.push(find);
                }
            }
            item.setDataValue('keys_list', list);
        }
    }

    // set 分类
    async setNavIdList(item) {
        if (isArray(item.nav_id)) {
            const list = [];
            for (const todo of item.nav_id) {
                const find = await this.ctx.model.Nav.findOne({where: {id: todo}});
                if (find) {
                    list.push(find);
                }
            }
            item.setDataValue('nav_id_list', list);
        }
    }


    async setClassifyIdItem(item) {
        const find = await this.ctx.model.Classify.findOne({where: {id: item.classify_id}});
        if (find) {
            item.setDataValue('classify_id_data', find);
        }
    }

    async setNavIdFind(item) {
        const find = await this.ctx.model.Nav.findOne({where: {id: item.nav_id}});
        if (find) {
            item.setDataValue('nav_id_find', find);
        }
    }


    async list() {
        try {
            const data = await this.ctx.model[this.modelName].findAll();
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
            const {id, ...params} = this.ctx.request.body;
            const data = await this.ctx.model[this.modelName].update(params, {
                where: {id},
            });
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }

    // 删除
    async destroy() {
        try {
            const params = this.ctx.request.body;
            const data = await this.ctx.model[this.modelName].destroy(params);
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }

    // 自增或者自减
    async increment() {
        try {
            const params = this.ctx.request.body;
            const data = await this.ctx.model[this.modelName].increment(params);
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }

    // 批量创建
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
