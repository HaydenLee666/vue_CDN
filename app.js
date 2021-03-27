const app = Vue.createApp({
    data() {
        return {
          firstName: 'Hayden',
          lastName: 'Lee',
          email: 'haydenlee6677@gmail.com',
          gender: 'male',
          picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
      }
});

app.mount('#app');