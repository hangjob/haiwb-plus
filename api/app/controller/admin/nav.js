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
            if (params.pid === true) {
                where.pid = {[this.app.Sequelize.Op.ne]: ''};
            }
            if (params.pid === false) {
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

    async find() {
        try {
            const params = this.ctx.request.body;
            const Op = this.app.Sequelize.Op;
            const where = {};
            if (params.id) {
                where[Op.or] = [
                    { id: params.id},
                    {router: {[Op.like]: `%${params.id}`}},
                ];
                delete params.id;
            }
            const data = await this.ctx.model[this.modelName].findOne({where, ...params});
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
