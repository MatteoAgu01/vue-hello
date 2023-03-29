//Descrizione:
//Stampare a schermo un messaggio all’interno di un h1,
//utilizzando i data.


const { createApp } = Vue;

createApp({
	data() {
		return {
			message: 'Hello Vue!',
			myClass: 'bg-primary text-center',
			image: "./img/01.webp"
		}
	},
	methods: {
		changeColor() {
			this.myClass = 'green text-center';
	}
}
	}).mount('#app')