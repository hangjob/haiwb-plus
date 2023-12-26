

# https://github.com/mmdapl/egg-sequelize-plus

# 部署
上传资源即可
```shell
npm run start
```
自动开启守护进程

端口
```shell
start": "egg-scripts start --daemon --port=7010 --title=egg-server-admin-itnavs-vip"
```

在`[package.json](package.json)`中的，start 参数改写 

npm run stop


宝塔面板，如pnpm无命令，因为宝塔安装的插件都是局部的，没有放在全局命令中，执行以下即可，
```shell
ln -sf /www/server/nodejs/v16.20.2/lib/node_modules/pnpm/bin/pnpm.cjs /usr/bin/pnpm
# /www/server/nodejs/v16.20.2/lib/node_modules/pnpm/bin/pnpm.cjs 服务器安装的node.js位置
```
