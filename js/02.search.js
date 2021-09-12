const prds = [
	{ id: 1, title: 'Good Product01', src: '../img/p1.jpg', price: '100.99' },
	{ id: 2, title: 'Good Product02', src: '../img/p2.jpg', price: '9.55' },
	{ id: 3, title: 'Good Product03', src: '../img/p3.jpg', price: '15.55' },
	{ id: 4, title: 'Good Product04', src: '../img/p4.jpg', price: '9.99' },
	{ id: 5, title: 'Good Product05', src: '../img/p5.jpg', price: '119.99' },
	{ id: 6, title: 'Good Product06', src: '../img/p6.jpg', price: '19.99' },
	{ id: 7, title: 'Good Product07', src: '../img/p7.jpg', price: '14.55' },
	{ id: 8, title: 'Good Product08', src: '../img/p8.jpg', price: '25.55' },
	{ id: 9, title: 'Good Product09', src: '../img/p9.jpg', price: '18.55' },
	{ id: 10, title: 'Good Product10', src: '../img/p10.jpg', price: '12.55' },
	{ id: 11, title: 'Good Product11', src: '../img/p11.jpg', price: '17.99' },
];

new Vue({
	el: '#app',
	data: {
		search: '',
		prds: prds
	},
	methods: {
		onRemove(e) {
			this.search = ''
			this.prds = prds
			document.querySelector('.search').focus()
		},
		onKeyup(e) {
			this.prds = prds.filter(v => {
				return v.title.toLowerCase().includes(this.search.toLowerCase()) || v.price.includes(this.search)
			})
		}
	}
})



/* this.prds.pop()
console.log(this)
console.log(this.prds, prds)
console.log(this.prds === prds) */