<template>
<div class="sign-up">
    <h3>Let's create a new account!</h3>    
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="password"><br>
    <button v-on:click="signup">Sign Up</button>
    <span>or go back to <router-link to="/login">login.</router-link></span>
    </div>
</template>

<script>

    import firebase from 'firebase'

    export default {
        name: 'signup',
        data: function(){
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            signup: function(){
                console.log("!!")
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    (user)=>{
                        this.$router.replace('hello')
                    },
                    (err)=>{
                        alert("Oops... " + err.message)
                    }
                );
            }
        }
    }
</script>

<style scoped>
.signup {
    margin-top: 40px;
}
input {
    margin: 10px 0;
    width: 40%;
    padding: 15px;
}
button {
    margin-top: 20px;
    width: 40%;
    cursor: pointer;
}
span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
}
</style>

