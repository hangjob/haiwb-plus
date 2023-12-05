'use strict';

const BaseController = require('./base');
const isArray = require('lodash/isArray');

class ContentController extends BaseController {

    constructor(ctx) {
        super(ctx);
        this.modelName = 'Content';
        this.idSize = 8;
    }


    async setRowItem(item) {
        if (isArray(item.keys)) {
            const list = [];
            for (const todo of item.keys) {
                const find = await this.ctx.service.base.find('Keys', {params: {where: {id: todo}}});
                list.push(find);
            }
            item.setDataValue('keys_list', list);
        }
        if (isArray(item.nav_id)) {
            const list = [];
            for (const todo of item.nav_id) {
                const find = await this.ctx.service.base.find('Nav', {params: {where: {id: todo}}});
                list.push(find);
            }
            item.setDataValue('nav_id_list', list);
        }
    }

    async page() {
        try {
            const { page = 1, limit = 10, id, nav_id, keys, ...params } = this.ctx.request.body;
            const offset = (page - 1) * limit;
            const Op = this.app.Sequelize.Op;

            const options = Object.assign({
                limit,
                offset,
                where: {},
            }, params);

            if (id) {
                options.where.classify_id = {[Op.eq]: id};
            }
            if (nav_id) {
                options.where.nav_id = {[Op.like]: `%${nav_id}%`};
            }
            if (keys) {
                options.where.keys = {[Op.like]: `%${keys}%`};
            }
            const data = await this.app.model[this.modelName].findAndCountAll(options);
            if (isArray(data.rows)) {
                for (const item of data.rows) {
                    await this.setRowItem(item);
                }
            }
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }

    async list() {
        try {
            const params = this.ctx.request.body;
            const where = {};
            if (params.label) {
                where.label = {[this.app.Sequelize.Op.eq]: params.label};
            }
            if (params.nav_id) {
                where.nav_id = {[this.app.Sequelize.Op.like]: `%${params.nav_id}%`};
            }
            if (params.cover) {
                where.cover = {[this.app.Sequelize.Op.ne]: ''};
            }
            if (params.limit) {
                params.limit = parseInt(params.limit);
            }
            const data = await this.app.model[this.modelName].findAll({where, ...params});
            if (isArray(data)) {
                for (const item of data) {
                    await this.setRowItem(item);
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
            const data = await this.ctx.service.base.find(this.modelName, {params: {where: params}});
            await this.setRowItem(data);
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }


}

module.exports = ContentController;
