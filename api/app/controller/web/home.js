'use strict';
const BaseController = require('./base');
const isArray = require('lodash/isArray');

class Home extends BaseController {

    // 默认布局
    async layout() {
        const layoutRight = await this.ctx.model.Classify.findAll();
        const photo = await this.ctx.model.Content.findAll({where: {label: 1}, limit: 5});
        if (isArray(photo)) {
            for (const item of photo) {
                await this.setNavIdList(item);
            }
        }
        const photoHorizontal = await this.ctx.model.Keys.findAll({where: {
            label: 1, cover: {
                [this.app.Sequelize.Op.not]: '',
            }}, limit: 3});
        const gange = await this.ctx.model.Keys.findAll({limit: 9, order: [[ 'createdAt', 'DESC' ]]});
        if (isArray(gange)) {
            for (const item of gange) {
                await this.setNavIdFind(item);
            }
        }
        const cardFull = await this.ctx.model.Content.findAll({
            where: {label: 3},
            limit: 5,
            order: [[ 'createdAt', 'DESC' ]],
        });
        if (isArray(cardFull)) {
            for (const item of cardFull) {
                await this.setNavIdList(item);
            }
        }
        this.ctx.body = this.ctx.resultData({data: {layoutRight, photo, photoHorizontal, gange, cardFull}});
    }


    // base布局
    async layoutBas() {
        const layoutRight = await this.ctx.model.Classify.findAll();
        this.ctx.body = this.ctx.resultData({data: {layoutRight}});
    }


    // 详情
    async detail() {
        try {
            const params = this.ctx.request.body;
            const data = await this.ctx.model.Content.findOne({where: {id: params.id}});
            await this.app.model.Content.increment({views: 1}, {where: {id: params.id}});
            await this.setNavIdList(data);
            await this.setKeysList(data);
            const prev = await this.app.model.Content.findOne({
                attributes: {exclude: [ 'content', 'html' ]},
                where: {nid: data.nid + 1},
            });
            const next = await this.app.model.Content.findOne({
                attributes: {exclude: [ 'content', 'html' ]},
                where: {nid: data.nid - 1},
            });
            const count = await this.app.model.Content.count({
                where: {
                    nav_id: {[this.app.Sequelize.Op.like]: `%${data.nav_id}%`},
                },
            });
            const moreList = [];
            for (const item of data.nav_id) {
                const todo = await this.app.model.Content.findAll({
                    attributes: {exclude: [ 'content', 'html' ]},
                    where: {
                        nav_id: {[this.app.Sequelize.Op.like]: `%${item}%`},
                    }, ...params,
                });
                moreList.push(...todo);
            }
            if (isArray(moreList)) {
                for (const item of moreList) {
                    await this.setKeysList(item);
                }
            }
            data.setDataValue('content_count', count);
            data.setDataValue('content_prev', prev);
            data.setDataValue('content_next', next);
            data.setDataValue('content_moreList', moreList);
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }

    // fl 页面
    async fl() {
        const params = this.ctx.request.body;
        const list = [];
        let flNavList = [];
        if (params.id) {
            const classifyData = await this.ctx.model.Classify.findOne({where: {id: params.id}});
            if (classifyData) {
                list.push(classifyData);
            } else {
                const navFindData = await this.ctx.model.Nav.findOne({where: {id: params.id}});
                if (navFindData) {
                    const classifyData = await this.ctx.model.Classify.findOne({where: {id: navFindData.pid}});
                    list.push(navFindData, classifyData);
                }
            }
        }
        const picture = await this.app.model.Content.findOne({
            attributes: {exclude: [ 'content', 'html' ]},
            limit: 5,
            order: [ this.app.Sequelize.literal('rand()') ],
        });
        let order = null;
        if (params.order === 'like') {
            order = this.app.Sequelize.col('like');
        } else {
            order = this.app.Sequelize.col('views');
        }
        const contentHot = await this.app.model.Content.findAll({
            attributes: {exclude: [ 'content', 'html' ]},
            limit: 5,
            order: [ order, [ 'createdAt', 'DESC' ]],
        });
        if (isArray(contentHot)) {
            for (const item of contentHot) {
                await this.setKeysList(item);
                await this.setNavIdList(item);
            }
        }
        if (list.length) {
            const pid = list[list.length - 1].pid || list[list.length - 1].id;
            flNavList = await this.ctx.model.Nav.findAll({where: {pid}});
            if (isArray(flNavList)) {
                for (const item of flNavList) {
                    const det = await this.ctx.model.Classify.findOne({where: {id: item.pid}});
                    item.setDataValue('classify_det', det);
                    await this.setCount(item);
                }
            }
        }

        const navData = await this.app.model.Nav.findAll({limit: 5, order: [[ 'createdAt', 'DESC' ]]});
        if (isArray(navData)) {
            for (const item of navData) {
                const pid = await this.ctx.model.Classify.findOne({where: {id: item.pid}});
                item.setDataValue('classify_det', pid);
                await this.setCount(item);
            }
        }
        this.ctx.body = this.ctx.resultData({
            data: {
                breadcrumb: list.reverse(),
                flNavList,
                navData,
                picture,
                contentHot,
            },
        });
    }

    async tag() {
        const params = this.ctx.request.body;
        const recommend = await this.app.model.Content.findAll({
            attributes: {exclude: [ 'content', 'html' ]},
            limit: 5,
            order: [[ 'createdAt', 'DESC' ]],
            where: {
                keys: {[this.app.Sequelize.Op.like]: `%${params.id}%`},
            },
        });
        if (isArray(recommend)) {
            for (const item of recommend) {
                await this.setNavIdList(item);
            }
        }
        const hot = await this.app.model.Content.findAll({
            attributes: {exclude: [ 'content', 'html' ]},
            limit: 5,
            order: [ this.app.Sequelize.col('views'), [ 'createdAt', 'DESC' ]],
        });
        if (isArray(hot)) {
            for (const item of hot) {
                await this.setNavIdList(item);
            }
        }
        const keys = await this.app.model.Keys.findOne({
            where: {
                id: params.id,
            },
        });
        await this.setNavIdFind(keys);
        if (isArray(hot)) {
            for (const item of hot) {
                await this.setKeysList(item);
                await this.setNavIdList(item);
            }
        }
        this.ctx.body = this.ctx.resultData({data: {recommend, hot, keys}});
    }


    async bannerlist() {
        const params = this.ctx.request.body;
        const banner = await this.ctx.model.Banner.findAll({limit: 5, where: {type: 'home'}});
        const keys = await this.ctx.model.Keys.findAll({limit: 10, order: [[ 'createdAt', 'DESC' ]]});
        const nav = await this.ctx.model.Nav.findAll({
            limit: 4,
            order: [[ 'createdAt', 'DESC' ]],
            where: {
                icon: {
                    [this.app.Sequelize.Op.not]: '',
                },
            },
        });
        this.ctx.body = this.ctx.resultData({data: {banner, keys, nav}});
    }

    async contentPage() {
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
            const data = await this.app.model.Content.findAndCountAll(options);
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
}

module.exports = Home;
