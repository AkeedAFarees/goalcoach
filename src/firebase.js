import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAU7lq62IeJWgunPXt1QyXF7K3CiWNkgJs",
    authDomain: "goalcoach-c3de9.firebaseapp.com",
    databaseURL: "https://goalcoach-c3de9.firebaseio.com",
    projectId: "goalcoach-c3de9",
    storageBucket: "",
    messagingSenderId: "245645622790"
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const goalRef = firebase.database().ref('goals');
  export const completeGoalRef = firebase.database().ref('completeGoals');
