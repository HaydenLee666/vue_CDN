const app = Vue.createApp({
    data() {
        return {
          firstName: 'Hayden',
          lastName: 'Lee',
          email: 'haydenlee@example.com',
          gender: 'male',
          picture: 'https://spectrumspeech.com.au/wp-content/uploads/2019/06/pikachu-character.jpg'
        }
    },
    methods: {
        async getUser(){
            const res =await fetch('https://randomuser.me/api');
            const {results}=await res.json();
            this.firstName = results[0].name.first;
            this.lastName = results[0].name.last;
            this.email = results[0].email;
            this.gender = results[0].gender;
            this.picture = results[0].picture.large;
        }
    },
});

app.mount('#app');