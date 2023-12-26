# Nuxt 3 Minimal Starter

# 部署
```shell
npm run build
```
把生成的文件.output放到服务器目录下

使用pm2开启守护进程
```shell
pm2 start [ecosystem.config.js](ecosystem.config.js) // port 3010,配置自定义填写
```
pm2 stop haiwb
pm2 start haiwb

# nginx
开启方向代理
规则 访问`/` 指向到 127.0.0.1:3010，完成页面
反向代理接口
规则 访问`/api/webv1` 指向到接口地址
