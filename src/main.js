// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import fbconf from './firebaseconf'

Vue.config.productionTip = false
let app;

// Initialize Firebase
var config = fbconf
firebase.initializeApp(config);



firebase.auth().onAuthStateChanged(function(user){
  if(!app){
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})


