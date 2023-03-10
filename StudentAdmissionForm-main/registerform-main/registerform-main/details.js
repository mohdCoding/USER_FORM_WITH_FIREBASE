const firebaseConfig = {
  apiKey: "AIzaSyAQDpxLYnBBlpiu4XTj2clppjYqfwGyNCA",
  authDomain: "htmlform-66c2f.firebaseapp.com",
  databaseURL: "https://htmlform-66c2f-default-rtdb.firebaseio.com",
  projectId: "htmlform-66c2f",
  storageBucket: "htmlform-66c2f.appspot.com",
  messagingSenderId: "1088874409036",
  appId: "1:1088874409036:web:f01db20b48644691d9d8e9"
};
firebase.initializeApp(firebaseConfig);

var admissionFormDB = firebase.database().ref("htmlform");

document.getElementById("AdmissionForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    namev= getElementValue("name");
    datev= getElementValue("date");
    agev= getElementValue("age");
    genderv= getElementValue("gender");
    clgnamev = getElementValue("college");
    yearv= getElementValue("year");
    emailv= getElementValue("email");
    cityv= getElementValue("city");
    contactv = getElementValue("contact");
    parentv= getElementValue("parent");
  
    saveMessages(namev,datev,agev,genderv,clgnamev,yearv,emailv,cityv,contactv,parentv);
  
    console.log(namev,datev,agev,genderv,clgnamev,yearv,emailv,cityv,contactv,parentv)
   
  
    //   reset the form
    document.getElementById("AdmissionForm").reset();
  }

  
const saveMessages = (namev,datev,agev,genderv,clgnamev,yearv,emailv,cityv,contactv,parentv) => {
    var myAdmissionForm = admissionFormDB.push();
  
    myAdmissionForm.set({
      name: namev,
      date: datev,
      age: agev,
      gender: genderv,
      clgname:clgnamev,
      year: yearv,
      email: emailv,
      city:cityv,
      contact:contactv,
      parent:parentv
    });
  };

  const getElementValue = (id) => {
    return document.getElementById(id).value;
  };
  