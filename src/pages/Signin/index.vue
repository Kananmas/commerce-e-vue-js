<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            integrityMessage: '',
            firstRender: true
        }
    },
    methods: {
        HandleOnClickSubmit() {
            if (this.firstRender) {
                this.firstRender = false;
                this.checkIntegrityOfPassword();
                this.checkIntegrityOfUsername();
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
            if (!this.username.length) {
                this.integrityMessage += '<div>Please enter your username</div>'
                return;
            }
            if (username.length < 7 || haveIlleagalCharacters) {
                this.integrityMessage += '<div>Plaese enter a valid username</div>'
            }
        },
        checkIntegrityOfPassword() {
            const password = this.password;

            if (password.length < 6) {
                this.integrityMessage += '<div>Password must atleast have 7 characters</div>';
            }

        },
    },
    computed: {
        checkOverAllIntegrity() {
            if (this.firstRender) return true;
            this.integrityMessage = '';
            this.checkIntegrityOfPassword();
            this.checkIntegrityOfUsername();

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
        <h1>Sign in</h1>

        <div class="input-holder">
            <label>Username:</label>
            <input v-model="username" />
        </div>
        <div class="input-holder">
            <label>Password:</label>
            <input v-model="password" type="password" />
        </div>
        <div class="alert alert-danger" v-html="integrityMessage" v-if="!checkOverAllIntegrity">
        </div>
        <button class="btn btn-primary" @click="HandleOnClickSubmit">Submit</button>
        <div><a href="/login">dont have an account? login</a></div>
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