loginApp = new Vue({
	el: '#main-body',
	data: {
		flag: true,
		aActive: true,
		random: Math.floor(Math.random() * 9000 + 1000) //随机数验证码
	},
	methods: {
		account: function() {
			this.flag = true;
			this.aActive = true;
		},
		phone: function() {
			this.flag = false;
			this.aActive = false;
		},
		verification: function() {
			this.random = Math.floor(Math.random() * 9000 + 1000);
		}
	}
})