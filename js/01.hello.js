/* document.querySelector('.input-wp input').addEventListener('keyup', onKeyup)
function onKeyup(e) {
	var value = this.value;
	document.querySelector('.title-wp').innerHTML = value
} */

new Vue({
	el: '#app',
	data: {	// #app에서 사용되는 전역변수 등록
		title: '',
		src: '../img/p1.png'
	},
	methods: {	// #app에서 사용되는 함수(메서드)를 등록
		showImg(e) {
			this.src = e.target.src
			this.title = e.target.alt
		}
	}
})