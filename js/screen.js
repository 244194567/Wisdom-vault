var screenApp = new Vue({
	el: '#screen',
	data: {
		dates: [{
				name: '今天5月26号',
				screens: {
					mornings: [{
						start: '11:50',
						end: '14:10三场',
						type: '日语/2D',
						place: '2号厅',
						price: 0,
						original: 60
					}],
					afternoon: [{

					}],
					night: [{

					}],
					late: [{

					}]
				}
			},
			{
				name: '明天5月27号',
			}
		]
	},
	methods: {

	}
})