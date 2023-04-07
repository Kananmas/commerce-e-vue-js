<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            email: '',
            cardNumber: '',
            integrityMessage: '',
            firstRender: true
        }
    },
    methods: {
        HandleOnClickSubmit() {
            if (this.firstRender) {
                this.firstRender = false;
                this.checkIntegrityOfEmail();
                this.checkIntegrityOfPassword();
                this.checkIntegrityOfUsername();
                this.checkIntegrityOfCardNumber();
            }


            if (this.integrityMessage.length) {
                return;
            }

            this.$router.push("/")
        },
        checkIntegrityOfUsername() {
            const username = this.username;
            const ileagalCharacters = ['@', '#', "(", ")"]
            const haveIlleagalCharacters = ileagalCharacters.some((character) => {
                if (username.includes(character)) {
                    return true;
                }
            })
            if (username.length < 7) {
                this.integrityMessage += '<div>Your username  must be seven characters atleast</div>'
            }
            if (haveIlleagalCharacters) {
                this.integrityMessage += '<div>Your username should not have characters of @,#,(,)</div>'
            }
        },
        checkIntegrityOfPassword() {
            const password = this.password;

            if (password.length < 6) {
                this.integrityMessage += '<div>Password must atleast have 7 characters</div>';
            }

        },
        checkIntegrityOfEmail() {
            const email = this.email;
            if (!email.length) {
                this.integrityMessage += `<div>Please enter your email</div>`
                return;
            }
            if (!email.includes('@')) {
                this.integrityMessage += `<div>Please include a vaid email</div>`;
            }

        },
        checkIntegrityOfCardNumber() {
            const cardNumber = this.cardNumber;

            if (!cardNumber.length) {
                this.integrityMessage += '<div>Please enter your Card Number';
                return;
            }

            if (cardNumber.length < 12) {
                this.integrityMessage += '<div>Your card number must contains 12 characters at least</div>'
            }
        }
    },
    computed: {
        checkOverAllIntegrity() {
            if (this.firstRender) return true;
            this.integrityMessage = '';
            this.checkIntegrityOfEmail();
            this.checkIntegrityOfPassword();
            this.checkIntegrityOfUsername();
            this.checkIntegrityOfCardNumber();
            if (this.integrityMessage.length) {
                return false;
            }
            return true;
        },
    },
}

</script>

<template>
    <div class="form">
        <h1>Login</h1>
        <div class="input-holder">
            <label>Username:</label>
            <input v-model="username" />
        </div>
        <div class="input-holder">
            <label>Email:</label>
            <input v-model="email" type="email" />
        </div>
        <div class="input-holder">
            <label>Password:</label>
            <input v-model="password" type="password" />
        </div>
        <div class="input-holder">
            <label>Card Number:</label>
            <input v-model="cardNumber" />
        </div>
        <div class="alert alert-danger" v-html="integrityMessage" v-if="!checkOverAllIntegrity">
        </div>
        <button class="btn btn-primary" @click="HandleOnClickSubmit">Submit</button>
        <div><a href="/signin">have an account? signin</a></div>
    </div>
</template>

<style scoped>
.form {
    width: 60%;
    margin-left: 20%;
    text-align: center;
}

.form h1 {
    margin-bottom: 4%;
    margin-top: 8%;
}

.input-holder {
    margin: 14px 0px;
}

.input-holder label {
    margin-right: 14px;
    width: 9%;
}

.alert {
    margin: 2% 30%;
}

@media (max-width: 800px) {
    .input-holder label {
        margin-right: 14px;
        width: 100%;
    }
    .alert {
        margin: 2% 0%;
    }
}
</style>