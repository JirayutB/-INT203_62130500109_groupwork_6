const constraints = {
    firstname: {
        presence: true,
        format: {
            pattern: "[a-z]+",
            flags: "i",
            message: "can only contain a-z"
          }
    },
    lastname: {
        presence: true,
        format: {
            pattern: "[a-z]+",
            flags: "i",
            message: "can only contain a-z"
          }
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum : 10,
            message: "must be at least 10 digits"
        },        
    },
    pstatus: {
        presence: false,
    },
    favorite: {
        presence: false,
    },
}

const app =Vue.createApp({
    data() {
        return {
            firstname: null,
            lastname: null,
            age: null,
            gender: null,
            email: null,
            phone: null,
            errors: null,
            pstatus: null,
            favorite: null,
            image: "./images/profile.jpg",
        }
    },
    methods: {
        checkForm(){
            this.errors = validate({firstname: this.firstname,
                                    lastname: this.lastname,
                                    age: this.age,
                                    gender: this.gender,
                                    email: this.email,
                                    phone: this.phone,
                                    pstatus: this.pstatus,
                                    favorite: this.favorite,
                                    },constraints)
            if(!this.errors){
                alert("Your profile is updated successfully.")
            }
        }
    }
})

app.mount('#app')