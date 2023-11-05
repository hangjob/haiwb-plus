'use strict';

const Controller = require('egg').Controller;
const OSS = require('ali-oss');
const fs = require('fs/promises');

class UploadController extends Controller {
    async images() {
        const { ctx } = this;
        const file = ctx.request.files[0];
        let result;
        try {
            result = await client.put(file.filename, file.filepath);
        } finally {
            await fs.unlink(file.filepath);
        }
        ctx.body = ctx.resultData({ data: result });
    }
}

module.exports = UploadController;
