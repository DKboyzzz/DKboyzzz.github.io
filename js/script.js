// Set the date we're counting down to
var countDownDate = new Date(
  "Dec 28, 2020 23:59:59") /* "Oct 8, 2020 23:25:01"*/
  .getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 *
    24));
  var hours = Math.floor((distance % (1000 * 60 * 60 *
    24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 *
    60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) /
    1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days +
    "d " + hours + "h " +
    minutes + "m " + seconds + "s";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML =
      "EXPIRED";
  }
}, 1000);


//side nav
function openNav() {
  if (document.getElementById("mySidenav").style.width !=
    "250px") {
    document.getElementById("mySidenav").style.width =
      "250px";
    document.getElementById("main").style.marginLeft =
      "250px";
  } else if (document.getElementById("mySidenav").style
    .width == "250px") {
    document.getElementById("mySidenav").style.width =
      "0";
    document.getElementById("main").style.marginLeft =
      "0";
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}



/*FUNKTION FIR BUTTON 1 */
function aA() {
  if (document.getElementById("login_").style.display ==
    //login fenster kennt raus wann et net raus aus
    "none") {
    if (document.getElementById("button_1").innerHTML ==
      "logged in") {
      return logout();
    } else {
      document.getElementById("login_").style.display =
        "initial";
      document.getElementById("button_1").innerHTML =
        "return";
      /* Username an passwuerd löschen sech wann een raus an ran geht an failure message*/
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      document.getElementById("failure").innerHTML = "";
    }
  } else {
    document.getElementById("login_").style.display =
      "none";
    document.getElementById("button_1").innerHTML =
      "Login";
  }
}
/*den close X ass dei funktion */
function bB() {
  document.getElementById("login_").style.display =
    "none";
  document.getElementById("button_1").innerHTML =
    "Login";
}
//WAAT geschitt wann een AGELOGGED ASSS     !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var logged_in = false;
var logged_in_hengover = false;


function loggedIn() {
  if (logged_in == true) {
    document.getElementById("logged_in_2").style.display =
      "initial";
  }
  if (logged_in == true || logged_in_hengover == true) {
    document.getElementById("logged_in_1").style.display =
      "initial";
    return crrnt();
  } else if (logged_in == false && logged_in_hengover ==
    false) {

    document.getElementById("logged_in_1").style.display =
      "none";
    document.getElementById("logged_in_2").style.display =
      "none";

  }
}

function crrnt() {
  document.getElementById("current").innerHTML =
    "Meng challenge ass eng ganz einfach challenge den padre yann waert den wächter sen an den maître fier sechen ze sen dass alles no plang leeft well ech jo bis am enn vun daer challenge net sur place disponibel waert sen deng challenge ass wkl ganz einfach du muss just eng nummer klären vun enger gaus ech well beweis an well ech esou fein sen well ech proof of insta 😉 et muss eng fein gaus sen ech mengen den el Hengo hat jo dei letzt deeg esou eng grande geule dann kucke ma wat geschitt.";
}





//funktion vun login
function login() {
  var username = document.getElementById("username")
    .value;
  var password = document.getElementById("password")
    .value;
  var failure = document.getElementById("failure");

  var button_1 = document.getElementById("button_1");

  var login = document.getElementById("login_");

  console.log(username + "/" + password);
  //dkboyzz login
  if (username == "Dkboyzzz" || username == "dkboyzzz") {

    if (password == "peperoninippel") {
      button_1.innerHTML = "logged in";
      button_1.style.backgroundColor =
        "rgba(0, 198,  27, 0.7)";
      login.style.display = "none";
      logged_in = true;
      console.log("login:" + logged_in);
      console.log("login_heng:" + logged_in_hengover);
      return loggedIn();


    } else {
      failure.innerHTML = "Wrong Username or Password";

    }

  }
  //Hengover login
  else if (username == "Hengover") {
    if (password == "petit") {
      button_1.innerHTML = "logged in";
      button_1.style.backgroundColor =
        "rgba(0, 198,  27, 0.7)";
      login.style.display = "none";
      logged_in_hengover = true;
      console.log("login_heng:" + logged_in_hengover);
      console.log("login:" + logged_in);
      return loggedIn();
    } else {
      failure.innerHTML =
        "Den Heng ass een klengen Spiller";
    }

  }
  //SKADOOSH
  else if (username == "skadooosh") {
    if (password == "skadooosh") {
      document.getElementById("button_2").onclick =
        function() {
          location.href = "/skadooosh.html";
        };

    }
  }
  //keen bekannten login
  else {
    failure.innerHTML =
      "Wrong Username or Password";
  }

}
// SKADOOOSH DELAY EPILEPSI
setTimeout(skadooosh0, 32800);setTimeout(skadooosh1, 32900);setTimeout(skadooosh2, 33000);setTimeout(skadooosh3, 33100);setTimeout(skadooosh4, 33200);
setTimeout(skadooosh5, 33300);setTimeout(skadooosh6, 33400);setTimeout(skadooosh7, 33500);setTimeout(skadooosh8, 33600);setTimeout(skadooosh9, 33700);
setTimeout(skadooosh0, 33800);setTimeout(skadooosh1, 33900);setTimeout(skadooosh2, 34000);setTimeout(skadooosh3, 34100);setTimeout(skadooosh4, 34200);
setTimeout(skadooosh5, 34300);setTimeout(skadooosh6, 34400);setTimeout(skadooosh7, 34500);setTimeout(skadooosh8, 34600);setTimeout(skadooosh9, 34700);
setTimeout(skadooosh0, 34800);setTimeout(skadooosh1, 34900);setTimeout(skadooosh2, 35000);setTimeout(skadooosh3, 35100);setTimeout(skadooosh4, 35200);
setTimeout(skadooosh5, 35300);setTimeout(skadooosh6, 35400);setTimeout(skadooosh7, 35500);setTimeout(skadooosh8, 35600);setTimeout(skadooosh9, 35700);
setTimeout(skadooosh0, 35800);setTimeout(skadooosh1, 35900);setTimeout(skadooosh2, 36000);setTimeout(skadooosh3, 36100);setTimeout(skadooosh4, 36200);
setTimeout(skadooosh5, 36300);setTimeout(skadooosh6, 36400);setTimeout(skadooosh7, 36500);setTimeout(skadooosh8, 36600);setTimeout(skadooosh9, 36700);
setTimeout(skadooosh0, 36800);setTimeout(skadooosh1, 36900);setTimeout(skadooosh2, 37000);setTimeout(skadooosh3, 37100);setTimeout(skadooosh4, 37200);
setTimeout(skadooosh5, 37300);setTimeout(skadooosh6, 37400);setTimeout(skadooosh7, 37500);setTimeout(skadooosh8, 37600);setTimeout(skadooosh9, 37700);
setTimeout(skadooosh0, 37800);setTimeout(skadooosh1, 37900);setTimeout(skadooosh2, 38000);setTimeout(skadooosh3, 38100);setTimeout(skadooosh4, 38200);
setTimeout(skadooosh5, 38300);setTimeout(skadooosh6, 38400);setTimeout(skadooosh7, 38500);setTimeout(skadooosh8, 38600);setTimeout(skadooosh9, 38700);
setTimeout(skadooosh, 38800);

function skadooosh() {
  document.getElementById("skadooosh_test").style
    .display = "initial";
  document.getElementById("demo").style.color = "red";
  document.getElementById("skadooosh").style.backgroundColor ="black";
}
function skadooosh0() {
  document.getElementById("demo").style.color = "#FF0000";
  document.getElementById("skadooosh").style.backgroundColor ="white";
}
function skadooosh1() {
  document.getElementById("demo").style.color = "#FF9E00";
  document.getElementById("skadooosh").style.backgroundColor ="gray";
}
function skadooosh2() {
  document.getElementById("demo").style.color = "#E0FF00";
  document.getElementById("skadooosh").style.backgroundColor ="White";
}
function skadooosh3() {
  document.getElementById("demo").style.color = "#36FF00";
  document.getElementById("skadooosh").style.backgroundColor ="gray";
}
function skadooosh4() {
  document.getElementById("demo").style.color = "#00FFB2";
  document.getElementById("skadooosh").style.backgroundColor ="white";
}
function skadooosh5() {
  document.getElementById("demo").style.color = "#00D4FF";
  document.getElementById("skadooosh").style.backgroundColor ="gray";
}
function skadooosh6() {
  document.getElementById("demo").style.color = "#0046FF";
  document.getElementById("skadooosh").style.backgroundColor ="white";
}
function skadooosh7() {
  document.getElementById("demo").style.color = "#AE00FF";
  document.getElementById("skadooosh").style.backgroundColor ="gray";
}
function skadooosh8() {
  document.getElementById("demo").style.color = "#FF00F3";
  document.getElementById("skadooosh").style.backgroundColor ="white";
}
function skadooosh9() {
  document.getElementById("demo").style.color = "#FF0000";
  document.getElementById("skadooosh").style.backgroundColor ="gray";
}

//SKADOOOOSH DRAGON WARRIOR
setTimeout(dragonWarrior, 46500);
setTimeout(dragonWarrior1, 55800);
setTimeout(dragonWarrior2, 63500);
setTimeout(skadoooshBack, 65000); //HOME button(skadooosh)

//dragon warrior functions
function dragonWarrior(){
  document.getElementById("dragon_warrior").style.display= "initial";
}
function dragonWarrior1(){
  document.getElementById("dragon_warrior").src = "https://i.ibb.co/DDgbv8z/dragon-warrior-red-eyes-1.jpg";
}
function dragonWarrior2(){
  document.getElementById("dragon_warrior").src = "https://i.ibb.co/Ld9nxdk/dragon-warrior-red-eyes-2.jpg";
}
//Home button function
function skadoooshBack(){
  document.getElementById("skadooosh_back").style.display = "initial";
}



//funktionen fir AUZELOGGEN
function logout() {
  if (document.getElementById("logout_").style.display ==
    "none") {
    document.getElementById("logout_").style.display =
      "initial";
  } else {
    document.getElementById("logout_").style.display =
      "none";
  }
}
//YES
function logoutYes() {
  document.getElementById("logout_").style.display =
    "none";
  document.getElementById("button_1").style
    .backgroundColor = "rgba(77, 77, 255, 0.7)";
  document.getElementById("button_1").innerHTML =
    "Login";
  logged_in_hengover = false;
  logged_in = false;
  console.log("login_heng:" + logged_in_hengover);
  console.log("login:" + logged_in);
  return loggedIn();
}
//NO
function logoutNo() {
  document.getElementById("logout_").style.display =
    "none";
}
//funktion cC
function cC() {
  document.getElementById("logout_").style.display =
    "none";
}

//NEXT BUTTON VIDEO
function next() {
  var currentVideo = document.getElementById(
    "current_video");
  var breif = "1. Heng Breif reaction:";
  var website = "2. Heng Website reaction:";
  if (currentVideo.innerHTML == breif) {
    document.getElementById("current_video").innerHTML =
      "2. Heng Website reaction:";
    document.getElementById("video_").src =
      "https://www.youtube.com/embed/4r3zpsVdUVg";
  } else if (currentVideo.innerHTML == website) {
    document.getElementById("current_video").innerHTML =
      "1. Heng Breif reaction:";
    document.getElementById("video_").src =
      "https://www.youtube.com/embed/Gp-IHiGaay0";
  }

}
//PREVIOUS BUTTON VIDEO
function previous() {
  var currentVideo = document.getElementById(
    "current_video");
  var breif = "1. Heng Breif reaction:";
  var website = "2. Heng Website reaction:";
  if (currentVideo.innerHTML == breif) {
    document.getElementById("current_video").innerHTML =
      "2. Heng Website reaction:";
    document.getElementById("video_").src =
      "https://www.youtube.com/embed/4r3zpsVdUVg";
  } else if (currentVideo.innerHTML == website) {
    document.getElementById("current_video").innerHTML =
      "1. Heng Breif reaction:";
    document.getElementById("video_").src =
      "https://www.youtube.com/embed/Gp-IHiGaay0";
  }

}
