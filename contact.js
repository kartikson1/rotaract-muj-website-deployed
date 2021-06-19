const firebaseConfig = {
  apiKey: 'AIzaSyCyisdxGErtOLwpKUSN9D3yx421t7H58fo',
  authDomain: 'rgc-muj.firebaseapp.com',
  projectId: 'rgc-muj',
  storageBucket: 'rgc-muj.appspot.com',
  messagingSenderId: '853639535676',
  appId: '1:853639535676:web:5da2f6bca09f48b769f739',
  measurementId: 'G-RQZV3B75NV',
  databaseURL: 'https://rgc-muj-default-rtdb.firebaseio.com/',
};

firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');

const submitForm = (e) => {
  e.preventDefault();
  var fname = getInputVal('fname');
  var lname = getInputVal('lname');
  var email = getInputVal('emailmail');
  var message = getInputVal('msg');

  saveMessage(fname, lname, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();
};

document.getElementById('contactForm').addEventListener('submit', submitForm);

const getInputVal = (id) => {
  return document.getElementById(id).value;
};

function saveMessage(fname, lname, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    fname,
    lname,
    email,
    message,
  });
}

// admin.firestore().collection('messagesRef').add({
//   to: 'greenclub.muj@gmail.com',
//   message: {
//     subject: 'Message from website contact form',
//     html: 'This is an <code>HTML</code> email body.',
//   },
// })
