const menu = new Vue({
    el: "#menu",
    data: {
        address: "18 avenue du Beurre, Paris, France",
        email: "hello@cafewithavue.bakery",
        phone: "01 88 88 88 88",
        SiteName: 'Groupomania',
        Login : "Login",
        Signup : "Signup",

    }// data
    ,methods: {
        alert: function (message) {
          alert(message)
        }
      }


}) //const menu