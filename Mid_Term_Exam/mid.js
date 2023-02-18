window.addEventListener("load",function(){
    
  let state=document.getElementById("state");
  state.selectedIndex="-1";
  let state1=document.getElementById("state1");
  state1.selectedIndex="-1";
   })

function checkvalid() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var saddress = document.getElementById("saddress");
    var city = document.getElementById("city");
    var state = document.getElementById("state");
    var zip = document.getElementById("zip");
    var phone = document.getElementById("phone");
    
    if (!fname.checkValidity()) {
      fname.setCustomValidity("First Name can't be empty.");
      fname.reportValidity();
    } else if (!lname.checkValidity()) {
      lname.setCustomValidity(" Last Name can't be empty.");
      lname.reportValidity();
    } else if (!saddress.checkValidity()) {
      saddress.setCustomValidity("Street Address can't be empty");
      saddress.reportValidity();
    } else if (!city.checkValidity()) {
      city.setCustomValidity("City can't be empty");
      city.reportValidity();
    }else if (!zip.checkValidity()) {
      zip.setCustomValidity("Zip code can't be empty");
      zip.reportValidity();
    } else if (!phone.checkValidity()) {
      phone.setCustomValidity("Phone number can't be empty");
      phone.reportValidity();
    }
  }

function handlecheckbox() {
  var checkbox = document.getElementById("samecheck");
  var fname = document.getElementById("fname");
  var lname = document.getElementById("lname");
  var saddress = document.getElementById("saddress");
  var city = document.getElementById("city");
  var state = document.getElementById("state");
  var zip = document.getElementById("zip");
  var phone = document.getElementById("phone");

  var fname1 = document.getElementById("fname1");
  var lname1 = document.getElementById("lname1");
  var saddress1 = document.getElementById("saddress1");
  var city1 = document.getElementById("city1");
  var state1 = document.getElementById("state1");
  var zip1 = document.getElementById("zip1");
  var phone1 = document.getElementById("phone1");

  if (checkbox.checked) {
    fname1.value = fname.value;
    lname1.value = lname.value;
    saddress1.value = saddress.value;
    city1.value = city.value;
    state1.value = state.value;
    zip1.value = zip.value;
    phone1.value = phone.value;
  } else {
    fname1.value = "";
    lname1.value = "";
    saddress1.value = "";
    city1.value = "";
    state1.value = "";
    zip1.value = "";
    phone1.value = "";
  }
}