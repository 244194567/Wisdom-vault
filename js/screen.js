function showDropMenu() {
	var dropM = document.querySelector('#dropMenu');
	if(dropM.style.display == 'none') {
		dropM.style.display = 'block';
	} else {
		dropM.style.display = 'none';
	}
}

Vue.component('Myscreen', {
	props: ['screen'],
	template: `	<div class="screen" onclick="window.location='seat.html'">
					<div><span>{{screen.start}}</span></br><span>{{screen.end}}</span></div>
					<div><span>{{screen.type}}</span></br><span>{{screen.place}}</span></div>
					<div><span>￥</span><span>{{screen.price}}</span></br><span>￥{{screen.original}}</span></div>
				</div>`,
})

var screenApp = new Vue({
	el: '#screens',
	methods: {
		change: function(index) {
			this.index = index;
			console.log(index);
		}
	},
	data: {
		index: 0,
		dates: [{
			name: '今天5月26号',
			index: 0
		}, {
			name: '明天5月27号',
			index: 1
		}, {
			name: '后天5月28号',
			index: 2
		}],
		screenList: [{
			mornings: [{
					start: '11:50',
					end: '14:10散场',
					type: '日语/2D',
					place: '2号厅',
					price: 0,
					original: 60
				},
				{
					start: '14:50',
					end: '17:10散场',
					type: '日语/2D',
					place: '2号厅',
					price: 0,
					original: 60
				}
			],
			afternoons: [{
					start: '11:50',
					end: '14:10散场',
					type: '日语/2D',
					place: '2号厅',
					price: 1,
					original: 60
				},
				{
					start: '14:50',
					end: '17:10散场',
					type: '日语/2D',
					place: '2号厅',
					price: 1,
					original: 60
				}
			],
			nights: [{
					start: '11:50',
					end: '14:10散场',
					type: '日语/2D',
					place: '2号厅',
					price: 1,
					original: 60
				},
				{
					start: '14:50',
					end: '17:10散场',
					type: '日语/2D',
					place: '2号厅',
					price: 1,
					original: 60
				}
			],
			lates: [{
					start: '11:50',
					end: '14:10散场',
					type: '日语/2D',
					place: '2号厅',
					price: 1,
					original: 60
				},
				{
					start: '14:50',
					end: '17:10散场',
					type: '日语/2D',
					place: '2号厅',
					price: 1,
					original: 60
				}
			]
		}, {
			mornings: [{
					start: '11:50',
					end: '14:10散场',
					type: '印度语/2D',
					place: '2号厅',
					price: 0,
					original: 60
				},
				{
					start: '14:50',
					end: '17:10散场',
					type: '印度语/2D',
					place: '2号厅',
					price: 0,
					original: 60
				}
			],
			afternoons: [{
					start: '11:50',
					end: '14:10散场',
					type: '印度语/2D',
					place: '2号厅',
					price: 1,
					original: 60
				},
				{
					start: '14:50',
					end: '17:10散场',
					type: '印度语/2D',
					place: '2号厅',
					price: 1,
					original: 60
				}
			],
			nights: [{
					start: '11:50',
					end: '14:10散场',
					type: '印度语/2D',
					place: '2号厅',
					price: 1,
					original: 60
				},
				{
					start: '14:50',
					end: '17:10散场',
					type: '印度语/2D',
					place: '2号厅',
					price: 1,
					original: 60
				}
			],
			lates: [{
					start: '11:50',
					end: '14:10散场',
					type: '印度语/2D',
					place: '2号厅',
					price: 1,
					original: 60
				},
				{
					start: '14:50',
					end: '17:10散场',
					type: '印度语/2D',
					place: '2号厅',
					price: 1,
					original: 60
				}
			]
		}, {
			mornings: [{
					start: '11:50',
					end: '14:10散场',
					type: '国粤双语/2D',
					place: '2号厅',
					price: 0,
					original: 60
				},
				{
					start: '14:50',
					end: '17:10散场',
					type: '国粤双语/2D',
					place: '2号厅',
					price: 0,
					original: 60
				}
			],
			afternoons: [{
					start: '11:50',
					end: '14:10散场',
					type: '国粤双语/2D',
					place: '2号厅',
					price: 1,
					original: 60
				},
				{
					start: '14:50',
					end: '17:10散场',
					type: '国粤双语/2D',
					place: '2号厅',
					price: 1,
					original: 60
				}
			],
			nights: [{
					start: '11:50',
					end: '14:10散场',
					type: '国粤双语/2D',
					place: '2号厅',
					price: 1,
					original: 60
				},
				{
					start: '14:50',
					end: '17:10散场',
					type: '国粤双语/2D',
					place: '2号厅',
					price: 1,
					original: 60
				}
			],
			lates: [{
					start: '11:50',
					end: '14:10散场',
					type: '国粤双语/2D',
					place: '2号厅',
					price: 1,
					original: 60
				},
				{
					start: '14:50',
					end: '17:10散场',
					type: '国粤双语/2D',
					place: '2号厅',
					price: 1,
					original: 60
				}
			]
		}]
	},
})