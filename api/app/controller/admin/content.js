'use strict';

const BaseController = require('./base');
const isArray = require('lodash/isArray');

class ContentController extends BaseController {

    constructor(ctx) {
        super(ctx);
        this.modelName = 'Content';
        this.idSize = 8;
    }

    async page() {
        try {
            const {page = 1, limit = 10, id, nav_id, search, keys, ...params} = this.ctx.request.body;
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
            if (search) {
                options.where[Op.or] = [
                    {title: {[Op.like]: `%${search}%`}},
                    {des: {[Op.like]: `%${search}%`}},
                ];
            }
            if (options?.where?.url) {
                options.where.url = {[Op.like]: `%${options?.where?.url}%`};
            }
            options.attributes = {exclude: [ 'content', 'html' ]};
            options.order = [[ 'createdAt', 'DESC' ]];
            const data = await this.app.model[this.modelName].findAndCountAll(options);
            if (isArray(data.rows)) {
                for (const item of data.rows) {
                    await this.setKeysList(item);
                    await this.setNavIdList(item);
                    await this.setClassifyIdItem(item);
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
                where.label = {[this.app.Sequelize.Op.eq]: parseInt(params.label)};
            }
            if (params.nav_id) {
                where.nav_id = {[this.app.Sequelize.Op.like]: `%${params.nav_id}%`};
            }
            if (params.cover) {
                where.cover = {[this.app.Sequelize.Op.ne]: ''};
            }
            if (params.limit) {
                params.limit = parseInt(params.limit);
            } else {
                params.limit = 10;
            }
            let data = [];
            params.attributes = {exclude: [ 'content', 'html' ]};
            if (params.nav_ids) {
                for (const item of params.nav_ids) {
                    const todo = await this.app.model[this.modelName].findAll({
                        where: {
                            nav_id: {[this.app.Sequelize.Op.like]: `%${item}%`},
                        }, ...params,
                    });
                    data.push(...todo);
                }
            } else {
                data = await this.app.model[this.modelName].findAll({where, ...params});
            }
            if (isArray(data)) {
                for (const item of data) {
                    await this.setKeysList(item);
                    await this.setNavIdList(item);
                }
            }
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }

    async create() {
        try {
            const params = this.ctx.request.body;
            const find = await this.ctx.model[this.modelName].findOne({where: {url: params.url}});
            if (find) {
                this.ctx.body = this.ctx.resultData({msg: `链接地址已存在ID为,${find.id}`});
            } else {
                params.id = this.ctx.helper.nanoid(this.idSize || 20);
                const data = await this.ctx.model[this.modelName].create(params);
                this.ctx.body = this.ctx.resultData({data});
            }
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }

    async find() {
        try {
            const params = this.ctx.request.body;
            const data = await this.ctx.model[this.modelName].findOne(params);
            await this.app.model[this.modelName].increment({views: 1}, {where: {id: params?.where?.id}});
            await this.setNavIdList(data);
            await this.setKeysList(data);
            const count = await this.app.model[this.modelName].count({
                where: {
                    nav_id: {[this.app.Sequelize.Op.like]: `%${data.nav_id}%`},
                },
            });
            data.setDataValue('content_count', count);
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }

    async next() {
        try {
            const params = this.ctx.request.body;
            const data = await this.app.model[this.modelName].findOne({where: {id: params.id}});
            const prev = await this.app.model[this.modelName].findOne({where: {nid: data.nid + 1}});
            const next = await this.app.model[this.modelName].findOne({where: {nid: data.nid - 1}});
            this.ctx.body = this.ctx.resultData({data: [ prev, next ]});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }

}

module.exports = ContentController;
