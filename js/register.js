var registerApp = new Vue({
	el: '#main-body',
	data: {
		random: Math.floor(Math.random() * 9000 + 1000),
	},
	methods: {
		roll: function() {
			this.random = Math.floor(Math.random() * 9000 + 1000);
		}
	}
})