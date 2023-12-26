'use strict';

const BaseController = require('./base');
const isArray = require('lodash/isArray');

class ClassifyController extends BaseController {

    constructor(ctx) {
        super(ctx);
        this.modelName = 'Classify';
        this.idSize = 8;
    }


    async find() {
        try {
            const params = this.ctx.request.body;
            const Op = this.app.Sequelize.Op;
            const where = {};
            if (params.id) {
                where[Op.or] = [
                    { id: params.id},
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
            const classifyData = await this.ctx.model[this.modelName].findOne({
                where: {
                    id: params.id,
                },
            });
            if (classifyData) {
                list.push(classifyData);
            } else {
                const navData = await this.ctx.model.Nav.findOne({
                    where: {
                        id: params.id,
                    },
                });
                const classifyData = await this.ctx.model[this.modelName].findOne({
                    where: {
                        id: navData.pid,
                    },
                });
                list.push(navData, classifyData);
            }
            this.ctx.body = this.ctx.resultData({data: list.reverse()});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }

}

module.exports = ClassifyController;
