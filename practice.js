
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyD3mg3CUcg3oaR5bE7LZAygpT4AyzlHWOI",
    authDomain: "practice-activity-50ca3.firebaseapp.com",
    databaseURL: "https://practice-activity-50ca3-default-rtdb.firebaseio.com",
    projectId: "practice-activity-50ca3",
    storageBucket: "practice-activity-50ca3.appspot.com",
    messagingSenderId: "687484202157",
    appId: "1:687484202157:web:f5537f1cefe3fdea7faa24",
    measurementId: "G-FD8GB8X5HF"
  };
  
  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  firebase.initializeApp(firebaseConfig);

  function addUser() {
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "Adding User"
    })
  }