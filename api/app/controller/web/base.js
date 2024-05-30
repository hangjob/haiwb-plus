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
        if (item.nav_id) {
            const find = await this.ctx.model.Nav.findOne({where: {id: item.nav_id}});
            if (find) {
                item.setDataValue('nav_id_find', find);
            }
        }
    }

    async setCount(item) {
        const count = await this.ctx.model.Content.count({
            where: {
                [this.app.Sequelize.Op.or]: [{nav_id: {[this.app.Sequelize.Op.like]: `%${item.id}%`}}],
            },
        });
        item.setDataValue('content_count', count);
    }

}

module.exports = BaseController;
