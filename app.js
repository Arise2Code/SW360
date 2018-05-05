'use strict';

Vue.component('modal', {
	template: '#modal-template'
})

new Vue({
	el: '#vue-modal',
	data: {
		showModal: false
	}
})

new Vue({
	el: '#vue-app',
	data: {
		mysel: 1,
		mylinecolor: 'burlywood',
		mybuttonfont: 'saddlebrown',
		nonfiction: false,
		myabout: false,
		email_submit: false,
		fname: 'enter first name',
		email: 'enter email',
		email_bad: false
	},
	methods: {
		updateView: function(choice){
			this.mysel = choice;
			if (choice == 1) {
				this.mylinecolor = "burlywood";
				this.mybuttonfont = "saddlebrown";
			} else if (choice == 2) {
				this.mylinecolor = "burlywood";
				this.mybuttonfont = "saddlebrown";
			} else if (choice == 3) {
				this.mylinecolor = "IndianRed";
				this.mybuttonfont = "saddlebrown";
			} else if  (choice == 4) {
				this.mylinecolor = "IndianRed";
				this.mybuttonfont = "saddlebrown";
			} else {
				this.mylinecolor = "steelblue";
				this.mybuttonfont = "DimGray";
			} 
		}
	

	},
	computed: {

	}

});