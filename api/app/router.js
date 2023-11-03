'use strict';

module.exports = app => {
    app.beforeStart(async () => {
        await app.model.sync({ alter: true });
    });
    require('./router/web')(app);
    require('./router/admin')(app);
    require('./router/common')(app);
};
