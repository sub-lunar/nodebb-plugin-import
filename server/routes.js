module.exports =  {
	setup: function(app, middleware, controllers, Plugin) {
		var prefix = '/admin/plugins/' + Plugin.json.nbbId,
			apiPrefix = '/api' + prefix;

		app.get(prefix, middleware.admin.buildHeader, Plugin.render);
		app.get(apiPrefix, middleware.admin.buildHeader, Plugin.render);

        app.get(apiPrefix + '/state', Plugin.api.get.state);

        app.get(apiPrefix + '/candownload', Plugin.api.get.candownload);
        app.get(apiPrefix + '/exporters', Plugin.api.get.exporters);

        app.get(apiPrefix + '/download/users.csv', Plugin.api.get.usersCsv);
        app.get(apiPrefix + '/download/users.json', Plugin.api.get.usersJson);
        app.get(apiPrefix + '/download/redirect.json', Plugin.api.get.redirectJson);

        app.get(apiPrefix + '/fn', middleware.admin.isAdmin, Plugin.api.get.fn);
        app.post(apiPrefix + '/fn', middleware.admin.isAdmin, Plugin.api.post.fn);
    }
};