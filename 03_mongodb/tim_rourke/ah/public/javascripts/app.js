var app = app || {};
app.blueprints = app.blueprints || {};
app.active = app.active || {};

app.blueprints.task = Backbone.Model.extend({
	initialize: function() {
		console.log('A task model was born.');
	},
	defaults: {
		name: '',
		description: '',
		completed: false
	},
	parse: function(response) {
    response.id = response._id;
    delete response._id;
    
    return response;
	}
});

app.blueprints.tasks = Backbone.Collection.extend({
	model: app.blueprints.task,
	url: '/api/tasks',
	initialize: function() {
		console.log('A tasks collection was born.');
		var self = this;

		this.fetch();
	}
});

app.blueprints.taskView = Backbone.View.extend({
	tagName: 'tr',
	events: {
		'click .done': 'done',
		'click .delete': 'delete'
	},
	initialize: function() {
		var self = this;
		this.template = _.template($('#taskTemplate').html());
		console.log('A task view was born.');
		self.render();
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	done: function(e) {
		e.preventDefault();
		console.log(this.model);
		this.model.save({
			'completed': true
		});

		return false;
	},
	delete: function(e) {
		e.preventDefault();
		console.log(this.model);
		this.model.destroy();

		return false;
	}
});

app.blueprints.tasksView = Backbone.View.extend({
	initialize: function() {
		console.log('A tasks view was born.');
		var self = this;
		self.collection.on('sync change destroy', function() {
			self.render();
		});
		self.render();
	},
	render: function() {
		var self = this;
		self.$el.html('');
		this.collection.each(function(model) {
			var taskView = new app.blueprints.taskView({
				model: model
			});
			self.$el.append(taskView.el);
		});

		return this;
	}	
});

$(document).on('ready', function() {
	app.active.Tasks = new app.blueprints.tasks;
	app.active.TasksView = new app.blueprints.tasksView({
		el: $('#tasks'),
		collection: app.active.Tasks
	});

	$('body').on('submit', '#newTaskForm', function(e) {
		e.preventDefault();

		app.active.Tasks.create({
			'name': $('#newTaskForm input[name="name"]').val(),
			'description': $('#newTaskForm input[name="description"]').val()
		});

		$('#newTaskForm input[type="text"]').val('');

	});
});
