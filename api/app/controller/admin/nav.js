'use strict';

const BaseController = require('./base');
const isArray = require('lodash/isArray');

class NavController extends BaseController {

    constructor(ctx) {
        super(ctx);
        this.modelName = 'Nav';
        this.idSize = 8;
    }

    async list() {
        try {
            const params = this.ctx.request.body;
            const Op = this.app.Sequelize.Op;
            const where = {};
            if (params.pid) {
                where.pid = {
                    [Op.eq]: params.pid,
                };
            }
            if (params.pid === 'ne') {
                where.pid = {[this.app.Sequelize.Op.ne]: ''};
            }
            if (params.pid === 'or') {
                where.pid = {[this.app.Sequelize.Op.or]: [ null, '' ]};
            }
            const data = await this.ctx.model[this.modelName].findAll({where, ...params});
            if (isArray(data)) {
                for (const item of data) {
                    const count = await this.ctx.model.Content.count({
                        where: {
                            [Op.or]: [{nav_id: {[Op.like]: `%${item.id}%`}}],
                        },
                    });
                    const pid = await this.ctx.model.Classify.findOne({where: {id: item.pid}});
                    item.setDataValue('classify_det', pid);
                    item.setDataValue('content_count', count);
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
                    const find = await this.ctx.model.Classify.findOne({where: {id: item.pid}});
                    item.setDataValue('classify_det', find);
                }
            }
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }

    async three() {
        try {
            const params = this.ctx.request.body;
            const Op = this.app.Sequelize.Op;
            const where = {};
            const list = [];
            const getData = async id => {
                const data = await this.ctx.model[this.modelName].findOne({
                    where: {
                        [Op.or]: [
                            {id: {[Op.like]: `%${id}%`}},
                        ],
                    },
                });
                list.push(data);
                if (data.pid) {
                    await getData(data.pid);
                }
            };
            await getData(params.id);
            this.ctx.body = this.ctx.resultData({data: list.reverse()});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }

}

module.exports = NavController;
