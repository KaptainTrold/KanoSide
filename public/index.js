/*
Version 1: Kan vise nuværende måned og har strukturen af en kalender.
Version 2: Kan vise flere måneder, DDS farve skema, Der skulle kunne reserveres kanoer og Ændre formatering til være mere google kalender agtig
Version 3: Hjemmesiden skal rappotere til databasen og vice versa, Der skal sættes et system om til at slette data i databasen og Reservere flere datoer på en gang.
Version 4: Hjemmesiden opdager nu om den skal formateres til mobil eller computer
Version 5: Kan nu ændre start dato, Local Storage added, Reservere nu hele perioden, Man kan ikke længere overskride andres reserveringer, Changed dropdown menu length and Obfuscat code

Mangler:

*/
/*const firebaseConfig = {
    apiKey: "AIzaSyCfPEKOi56aanIsKWhaMPjvfXwA_d28nXM",
    authDomain: "kano-kalender-44ce5.firebaseapp.com",
    databaseURL: "https://kano-kalender-44ce5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kano-kalender-44ce5",
    storageBucket: "kano-kalender-44ce5.appspot.com",
    messagingSenderId: "361845659163",
    appId: "1:361845659163:web:18fc9613fb8c76b72ccabe",
    measurementId: "G-4M1C25VHRE"
  };
  firebase.initializeApp(firebaseConfig);
// Startup process and much more
window.onload = window.resizeTo(window.screen.availWidth / 2, window.screen.availHeight / 2);
window.onload = cleanup();
const date = new Date();
var observedMonth = date.getMonth();
var observedYear = date.getFullYear();
var numberWeekdays = daysInMonth(observedMonth);
var currentDay = date.getDate();
var nummerCur = 0;
var startNumber = 0;
const database = firebase.database().ref('/');
var changeAllowed = 0;

// Check if mobile or tablet
const detectDeviceType = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      ? 'Mobile'
      : 'Desktop';

window.onload = setCurrentDate(date, currentDay);
window.onload = sortDays(observedMonth, observedYear, numberWeekdays);
window.onload = cleanDatabase(observedYear);

const resizeOps = () => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
    document.documentElement.style.setProperty("--vw", window.innerWidth * 0.01 + "px");
  };
  
resizeOps();
window.addEventListener("resize", resizeOps);

function setCurrentDate(date, day) {
    
    let month = monthTranslator(date.getMonth());
    let year = date.getFullYear();

    document.getElementById("year").innerHTML  = observedYear;
    document.getElementById("month").innerHTML = monthTranslator(observedMonth);

    if (detectDeviceType() == 'Mobile') {
        // .month
        document.styleSheets[0].cssRules[2].style.width = "100vw";

        // .month ul
        document.styleSheets[0].cssRules[3].style.padding = ".5vh 0vw";

        // .month ul li
        document.styleSheets[0].cssRules[4].style.fontSize = "2vw";

        // .info
        document.styleSheets[0].cssRules[5].style.fontSize = "2vw";
        document.styleSheets[0].cssRules[5].style.width = "12vw";

        // .month prev
        document.styleSheets[0].cssRules[7].style.fontSize = "13vw";

        // .month next
        document.styleSheets[0].cssRules[8].style.fontSize = "13vw";

        // .weekdays
        document.styleSheets[0].cssRules[9].style.width = "100vw";
        document.styleSheets[0].cssRules[9].style.padding = "0vh 0vw";

        // .weekdays li
        document.styleSheets[0].cssRules[10].style.margin = "0vh .2vw";
        document.styleSheets[0].cssRules[10].style.width = "12.4vw";

        // .days
        document.styleSheets[0].cssRules[11].style.width = "100vw";

        // .days div
        document.styleSheets[0].cssRules[12].style.margin = "0 0";
        document.styleSheets[0].cssRules[12].style.width = "12.3vw";
        document.styleSheets[0].cssRules[12].style.height = "11.6vh";

        // .days div .active
        document.styleSheets[0].cssRules[13].style.fontSize = "2vw";

        // .days div .reservation
        document.styleSheets[0].cssRules[15].style.margin = "0.5% 2%";
        document.styleSheets[0].cssRules[15].style.width = "92%";
        document.styleSheets[0].cssRules[16].style.margin = "0.5% 2%";
        document.styleSheets[0].cssRules[16].style.width = "92%";
        document.styleSheets[0].cssRules[17].style.margin = "0.5% 2%";
        document.styleSheets[0].cssRules[17].style.width = "92%";
        document.styleSheets[0].cssRules[18].style.margin = "0.5% 2%";
        document.styleSheets[0].cssRules[18].style.width = "92%";
        document.styleSheets[0].cssRules[19].style.margin = "0.5% 2%";
        document.styleSheets[0].cssRules[19].style.width = "92%";
        document.styleSheets[0].cssRules[20].style.margin = "0.5% 2%";
        document.styleSheets[0].cssRules[20].style.width = "92%";
        document.styleSheets[0].cssRules[21].style.margin = "0.5% 2%";
        document.styleSheets[0].cssRules[21].style.width = "92%";
        document.styleSheets[0].cssRules[22].style.margin = "0.5% 2%";
        document.styleSheets[0].cssRules[22].style.width = "92%";
        document.styleSheets[0].cssRules[23].style.margin = "0.5% 2%";
        document.styleSheets[0].cssRules[23].style.width = "92%";
        document.styleSheets[0].cssRules[24].style.margin = "0.5% 2%";
        document.styleSheets[0].cssRules[24].style.width = "92%"
    }
}

function monthTranslator(number) {
    switch (number) {
        case 0: return "Januar" 
        break;
        case 1: return "Februar" 
        break;
        case 2: return "Marts" 
        break;
        case 3: return "April" 
        break;
        case 4: return "Maj" 
        break;
        case 5: return "Juni" 
        break;
        case 6: return "Juli" 
        break;
        case 7: return "August" 
        break;
        case 8: return "September" 
        break;
        case 9: return "Oktober" 
        break;
        case 10: return "November" 
        break;
        case 11: return "December" 
        break;
    }
}

function daysInMonth (month) {
    switch (month) {
        case 0: return 31;
        break;
        case 1: return 28;
        break;
        case 2: return 31;
        break;
        case 3: return 30;
        break;
        case 4: return 31;
        break;
        case 5: return 30;
        break;
        case 6: return 31;
        break;
        case 7: return 31;
        break;
        case 8: return 30;
        break;
        case 9: return 31;
        break;
        case 10: return 30;
        break;
        case 11: return 31;
        break;
    }
}

function sortDays(month, year, numberWeekdays) {

    let dateString = (month + 1) + "/1/" + year;
    let date = new Date(dateString);
    startNumber = findFirstDay(date);

    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    for(let i = 1; i <= numberWeekdays; i++){
        database.once('value', snap => {
            let dag = snap.child(observedYear + '/' + (observedMonth + 1) + '/' + (i + startNumber)).val();
            if (dag != null) {
                document.getElementById("navn"   + (i + startNumber)).innerHTML = "Navn: " + "<br>&nbsp;" + dag.Navn;
                document.getElementById("gruppe" + (i + startNumber)).innerHTML = "Gruppe: " + "<br>&nbsp;" + dag.Gruppenavn;
                document.getElementById("R"      + (i + startNumber)).classList.remove("reservation");
                document.getElementById("R"      + (i + startNumber)).classList.add(dag.Gruppe);
            };
        });
        document.getElementById("Day" + (i + startNumber)).innerHTML = i;
        document.getElementById("Day" + (i + startNumber)).style.visibility = "visible";
        document.getElementById("Div" + (i + startNumber)).style.visibility = "visible";
        document.getElementById("R"   + (i + startNumber)).style.visibility = "visible";
        document.getElementById("Day" + (i + startNumber)).classList.add('active');
        if((currentDay == i) && (currentMonth == month) && (currentYear == year)){
            document.getElementById("Day" + (i + startNumber)).classList.add('current');
        }
    }
    for(i = 29; i < 32; i++ ) {
        document.querySelectorAll("#fra option").forEach(opt => {
            if (opt.value == i){
                opt.disabled = false;
                opt.removeAttribute("hidden");
            }
        });

        document.querySelectorAll("#til option").forEach(opt => {
            if (opt.value == i){
                opt.disabled = false;
                opt.removeAttribute("hidden");
            }
        });
    }
    for(i = (numberWeekdays + 1); i < 32; i++) {
        document.querySelectorAll("#fra option").forEach(opt => {
            if (opt.value == i){
                opt.disabled = true;
                opt.hidden = "hidden";
            }
        });

        document.querySelectorAll("#til option").forEach(opt => {
            if (opt.value == i){
                opt.disabled = true;
                opt.hidden = "hidden";
            }
        });
    }
}

function cleanup() {
    for(let i=1; i<=37; i++){
        document.getElementById("Day"    + i).innerHTML = 1;
        document.getElementById("Day"    + i).classList.remove('current');
        document.getElementById("Day"    + i).style.visibility = "hidden";
        document.getElementById("Div"    + i).style.visibility = "hidden";
        document.getElementById("R"      + i).style.visibility = "hidden";
        document.getElementById("Day"    + i).classList.remove('active');
        document.getElementById("navn"   + i).innerHTML = "Navn: " + "<br>&nbsp;";
        document.getElementById("gruppe" + i).innerHTML = "Gruppe: " + "<br>&nbsp;";
        document.getElementById("R"      + i).classList.remove("Alugod");
        document.getElementById("R"      + i).classList.remove("Sjangali");
        document.getElementById("R"      + i).classList.remove("Ballerup");
        document.getElementById("R"      + i).classList.remove("Byspejderne");
        document.getElementById("R"      + i).classList.remove("Herlev2");
        document.getElementById("R"      + i).classList.remove("Skovlunde");
        document.getElementById("R"      + i).classList.remove("Ravnehus");
        document.getElementById("R"      + i).classList.remove("Hjortespring");
        document.getElementById("R"      + i).classList.remove("Mjølner");
        document.getElementById("R"      + i).classList.add("reservation");
    }
}

function forward() {
    cleanup();
    document.getElementById("formR").style.display = "none";
    document.getElementById("formP").style.display = "none";
    if(observedMonth == 11){
        observedMonth = 0;
        observedYear++;
    } else {
        observedMonth++;
    }

    numberWeekdays = daysInMonth(observedMonth );
    sortDays(observedMonth, observedYear, numberWeekdays);
    document.getElementById("year").innerHTML  = observedYear;
    document.getElementById("month").innerHTML = monthTranslator(observedMonth );
}

function backward() {
    cleanup();
    document.getElementById("formR").style.display = "none";
    document.getElementById("formP").style.display = "none";
    if(observedMonth == 0){
        observedMonth = 11;
        --observedYear;
    } else {
        observedMonth--;
    }

    numberWeekdays = daysInMonth(observedMonth);
    sortDays(observedMonth, observedYear, numberWeekdays);
    document.getElementById("year").innerHTML  = observedYear;
    document.getElementById("month").innerHTML = monthTranslator(observedMonth);
}

function reserver(nummer) {
    if (document.getElementById("Day" + nummer).style.visibility == "hidden" | 
        document.getElementById("formP").style.display == "block"            |
        document.getElementById("formR").style.display == "block"){
    } else {
        nummerCur = nummer;
        if((document.getElementById("navn" + nummer).innerHTML == "Navn: <br>&nbsp;")){
            document.getElementById("formR").style.display = "block";
            if(localStorage.getItem("Navn") != null) {
                document.getElementsByTagName('input')[0].value = localStorage.getItem("Navn");
                document.getElementById("gruppe").value = localStorage.getItem("Gruppe");
                document.getElementsByTagName('input')[1].value = localStorage.getItem("Kode");
            }
            document.getElementById("fra").value = nummer - startNumber;
            document.getElementById("til").value = nummer - startNumber;
        } else {
            document.getElementById("formP").style.display = "block";
            localStorage.setItem("tal",nummer);
            if(localStorage.getItem("Kode") != null) {
                document.getElementsByTagName('input')[2].value = localStorage.getItem("Kode");
            }
        }
    }
}

function closeForm() {
    document.getElementById("formR").style.display = "none";
    document.getElementById("formP").style.display = "none";
  }
  
function closeR() {
    let navn   = document.getElementsByTagName('input')[0].value;
    let gruppe = document.getElementById("gruppe").value;
    let kode   = document.getElementsByTagName('input')[1].value;
    let gruppenavn = document.getElementById("gruppe").options[document.getElementById("gruppe").selectedIndex].innerHTML;

    if((navn != "") & (gruppe != "reservation") & (kode != "")) {
        let fra = document.getElementById("fra").value;
        let til = document.getElementById("til").value;
        nummerCur = startNumber + Number(fra);
        if (fra == til) {
            database.child(observedYear).child(observedMonth + 1).child(nummerCur).get().then((snap) => {
                if (snap.val() != null) {
                    alert("Dagen er optaget");
                } else {
                    database.child(observedYear + '/' + (observedMonth + 1)+ '/' + nummerCur).set({
                        Navn: navn,
                        Gruppe: gruppe,
                        Gruppenavn: gruppenavn,
                        Password: kode
                    });
                    document.getElementById("R"      + nummerCur).classList.remove("reservation");
                    document.getElementById("R"      + nummerCur).classList.add(gruppe);
                    document.getElementById("navn"   + nummerCur).innerHTML = "Navn: " + "<br>" + navn  ;
                    document.getElementById("gruppe" + nummerCur).innerHTML = "Gruppe: " + "<br>" + gruppenavn;
                }
            });
        } else {
            let periode = 0;

            if (Number(fra) > Number(til)) {
                periode = Number(til) + numberWeekdays - Number(fra);
            } else {
                periode = Number(til) - Number(fra);
            }
            
            let dayNum    = 0;
            let approved = 1;
            let dateString = (observedMonth + 2) + "/1/" + observedYear;
            let date = new Date(dateString);
            let newMonthStartDay = findFirstDay(date);

            if (changeAllowed == 1) {
                let gamleKode = localStorage.getItem("Kode");

                if (fra > til) {
                    database.child(observedYear).get().then((snap) => {
                        for (let k = 0; k<=periode;k++){
                            dayNum = Number(k) + Number(fra);
                            if (numberWeekdays < dayNum) {
                                let dbKode = snap.child(observedMonth + 2).child(dayNum + newMonthStartDay - Number(numberWeekdays)).child("Password").val();
                                if ((dbKode != gamleKode) & (dbKode != null)) {
                                    approved = 0;
                                }
                            } else {
                                let dbPass = snap.child(observedMonth + 1).child(dayNum).child("Password").val();
                                if ((dbPass != gamleKode) & (dbPass != null)) {
                                    approved = 0;
                                }
                            }
                        }

                        if (approved == 1) {
                            for(let i = 0; i<=periode;i++) {
                                dayNum = Number(i) + Number(fra);
                                if (Number(numberWeekdays) < dayNum) {
                                    database.child(observedYear).child(observedMonth + 2).child(dayNum + newMonthStartDay - Number(numberWeekdays)).set({
                                        Navn: navn,
                                        Gruppe: gruppe,
                                        Gruppenavn: gruppenavn,
                                        Password: kode
                                    });
                                } else {
                                    document.getElementById("R"      + (Number(fra) + startNumber + i)).classList.remove("reservation");
                                    document.getElementById("R"      + (Number(fra) + startNumber + i)).classList.add(gruppe);
                                    document.getElementById("navn"   + (Number(fra) + startNumber + i)).innerHTML = "Navn: " + "<br>" + navn  ;
                                    document.getElementById("gruppe" + (Number(fra) + startNumber + i)).innerHTML = "Gruppe: " + "<br>" + gruppenavn;
                                    database.child(observedYear).child(observedMonth + 1).child(dayNum).set({
                                        Navn: navn,
                                        Gruppe: gruppe,
                                        Gruppenavn: gruppenavn,
                                        Password: kode
                                    });
                                }
                            }
                            localStorage.setItem("Navn",navn);
                            localStorage.setItem("Gruppe",gruppe);
                            localStorage.setItem("Kode",kode);
                            document.getElementById("formR").style.display = "none";
                        } else {
                            alert("Der er dage som ikke er dine, der bliver overskrevet");
                        }
                    });
                } else {
                    database.child(observedYear).get().then((snap) => {
                        for (let k = 0; k<=periode;k++){
                            let dbKOrd = snap.child(observedMonth + 1).child(Number(fra) + Number(k)).child("Password").val();
                            if ((dbKOrd != gamleKode) & (dbKOrd != null)) {
                                approved = 0;
                            }
                        }

                        if (approved == 1) {
                            for(let i = 0; i<=periode;i++) {
                                document.getElementById("R"      + (Number(fra) + startNumber + i)).classList.remove("reservation");
                                document.getElementById("R"      + (Number(fra) + startNumber + i)).classList.add(gruppe);
                                document.getElementById("navn"   + (Number(fra) + startNumber + i)).innerHTML = "Navn: " + "<br>" + navn  ;
                                document.getElementById("gruppe" + (Number(fra) + startNumber + i)).innerHTML = "Gruppe: " + "<br>" + gruppenavn;
                                database.child(observedYear).child(observedMonth + 1).child(Number(fra) + Number(i)).set({
                                    Navn: navn,
                                    Gruppe: gruppe,
                                    Gruppenavn: gruppenavn,
                                    Password: kode
                                });
                            }
                            localStorage.setItem("Navn",navn);
                            localStorage.setItem("Gruppe",gruppe);
                            localStorage.setItem("Kode",kode);
                            document.getElementById("formR").style.display = "none";
                        } else {
                            alert("Nogle af datoerne er reserveret");
                        }
                    });
                }
            }else {
                if (fra > til) {
                    database.child(observedYear).get().then((snap) => {
                        for (let k = 0; k<=periode;k++){
                            dayNum = Number(k) + Number(fra);
                            if (numberWeekdays < dayNum) {
                                if (snap.child(observedMonth + 2).child(dayNum + newMonthStartDay - Number(numberWeekdays)).val() != null) {
                                    approved = 0;
                                }
                            } else {
                                if (snap.child(observedMonth + 1).child(dayNum).val() != null) {
                                    approved = 0;
                                }
                            }
                        }

                        if (approved == 1) {
                            for(let i = 0; i<=periode;i++) {
                                dayNum = Number(i) + Number(fra);
                                if (Number(numberWeekdays) < dayNum) {
                                    database.child(observedYear).child(observedMonth + 2).child(dayNum + newMonthStartDay - Number(numberWeekdays)).set({
                                        Navn: navn,
                                        Gruppe: gruppe,
                                        Gruppenavn: gruppenavn,
                                        Password: kode
                                    });
                                } else {
                                    document.getElementById("R"      + (Number(fra) + startNumber + i)).classList.remove("reservation");
                                    document.getElementById("R"      + (Number(fra) + startNumber + i)).classList.add(gruppe);
                                    document.getElementById("navn"   + (Number(fra) + startNumber + i)).innerHTML = "Navn: " + "<br>" + navn  ;
                                    document.getElementById("gruppe" + (Number(fra) + startNumber + i)).innerHTML = "Gruppe: " + "<br>" + gruppenavn;
                                    database.child(observedYear).child(observedMonth + 1).child(dayNum).set({
                                        Navn: navn,
                                        Gruppe: gruppe,
                                        Gruppenavn: gruppenavn,
                                        Password: kode
                                    });
                                }
                            }
                            localStorage.setItem("Navn",navn);
                            localStorage.setItem("Gruppe",gruppe);
                            localStorage.setItem("Kode",kode);
                            document.getElementById("formR").style.display = "none";
                        } else {
                            alert("Der er dage som ikke er dine, der bliver overskrevet");
                        }
                    });
                } else {
                    database.child(observedYear).get().then((snap) => {
                        for (let k = 0; k<=periode;k++){
                            if (snap.child(observedMonth + 1).child(Number(fra) + Number(k)).val() != null) {
                                approved = 0;
                            }
                        }

                        if (approved == 1) {
                            for(let i = 0; i<=periode;i++) {
                                document.getElementById("R"      + (Number(fra) + startNumber + i)).classList.remove("reservation");
                                document.getElementById("R"      + (Number(fra) + startNumber + i)).classList.add(gruppe);
                                document.getElementById("navn"   + (Number(fra) + startNumber + i)).innerHTML = "Navn: " + "<br>" + navn  ;
                                document.getElementById("gruppe" + (Number(fra) + startNumber + i)).innerHTML = "Gruppe: " + "<br>" + gruppenavn;
                                database.child(observedYear).child(observedMonth + 1).child(Number(fra) + Number(i)).set({
                                    Navn: navn,
                                    Gruppe: gruppe,
                                    Gruppenavn: gruppenavn,
                                    Password: kode
                                });
                            }
                            localStorage.setItem("Navn",navn);
                            localStorage.setItem("Gruppe",gruppe);
                            localStorage.setItem("Kode",kode);
                            document.getElementById("formR").style.display = "none";
                        } else {
                            alert("Nogle af datoerne er reserveret");
                        }
                    });
                }
            }
        }
    } else {
        alert("Der mangler at blive indtastet noget");
    }
}

function Slet() {
    let nyKode = document.getElementsByTagName('input')[2].value;
    let data = 0;
    let sweetChildOfMine = 0;

    database.once('value', snap => {
        data = snap.child(observedYear + '/' + (observedMonth + 1)+ '/' + nummerCur).val();
        sweetChildOfMine = database.child(observedYear + '/' + (observedMonth + 1)+ '/' + nummerCur);
        if(nyKode == data.Password){
            sweetChildOfMine.remove();
            document.getElementById("formP").style.display = "none";
            document.getElementById("navn"   + nummerCur).innerHTML = "Navn: ";
            document.getElementById("gruppe" + nummerCur).innerHTML = "Gruppe: ";
            document.getElementById("R"      + nummerCur).classList.remove(data.Gruppe);
            document.getElementById("R"      + nummerCur).classList.add("reservation");
        } else {
            alert("Forkert password");
        }
    });
}

function Ændre() {
    let nyKode    = document.getElementsByTagName('input')[2].value;
    let gamleKode = 0;
    localStorage.setItem("Kode",nyKode);
    database.once('value', snap => {
        gamleKode = snap.child(observedYear + '/' + (observedMonth + 1)+ '/' + nummerCur + '/Password').val();

        if(nyKode == gamleKode){
            changeAllowed = 1;
            document.getElementById("formP").style.display = "none";
            document.getElementById("formR").style.display = "block";
            if(localStorage.getItem("Navn") != null) {
                document.getElementsByTagName('input')[0].value = localStorage.getItem("Navn");
                document.getElementById("gruppe").value = localStorage.getItem("Gruppe");
                document.getElementsByTagName('input')[1].value = localStorage.getItem("Kode");
            }
            let mTal = localStorage.getItem("tal");
            document.getElementById("fra").value = mTal - startNumber;
            document.getElementById("til").value = mTal - startNumber;
        } else {
            alert("Forkert password");
        }
    });
}

function cleanDatabase(year) {
    database.once('value', snap => {
        let twoYear = snap.child((year-3)).val();
        if ( twoYear != null) {
            database.child((year-3)).remove();
        }
    });
}

function findFirstDay(date) {
    let startDay = date.toLocaleDateString("en-GB", { weekday: 'long' });

    switch(startDay) {
        case "Monday": return 0;
        break;
        case "Tuesday": return 1;
        break;
        case "Wednesday": return 2;
        break;
        case "Thursday": return 3;
        break;
        case "Friday": return 4;
        break;
        case "Saturday": return 5;
        break;
        case "Sunday": return 6;
        break;
    }
}*/

const _0x50f102=_0x529d;(function(_0x1360a1,_0x102f23){const _0x45543c=_0x529d,_0x48b940=_0x1360a1();while(!![]){try{const _0xd54aa7=parseInt(_0x45543c(0x1cc))/0x1+parseInt(_0x45543c(0x1d3))/0x2*(-parseInt(_0x45543c(0x181))/0x3)+-parseInt(_0x45543c(0x179))/0x4+-parseInt(_0x45543c(0x1d1))/0x5+parseInt(_0x45543c(0x176))/0x6+-parseInt(_0x45543c(0x1c4))/0x7+parseInt(_0x45543c(0x1d4))/0x8;if(_0xd54aa7===_0x102f23)break;else _0x48b940['push'](_0x48b940['shift']());}catch(_0xc9c3b3){_0x48b940['push'](_0x48b940['shift']());}}}(_0x31c0,0xa79f7));const firebaseConfig={'apiKey':'AIzaSyCfPEKOi56aanIsKWhaMPjvfXwA_d28nXM','authDomain':'kano-kalender-44ce5.firebaseapp.com','databaseURL':_0x50f102(0x1e9),'projectId':_0x50f102(0x16d),'storageBucket':_0x50f102(0x1ce),'messagingSenderId':_0x50f102(0x1c9),'appId':_0x50f102(0x173),'measurementId':_0x50f102(0x17c)};firebase['initializeApp'](firebaseConfig),window[_0x50f102(0x1aa)]=window[_0x50f102(0x1a3)](window[_0x50f102(0x19c)]['availWidth']/0x2,window[_0x50f102(0x19c)][_0x50f102(0x17b)]/0x2),window[_0x50f102(0x1aa)]=cleanup();const date=new Date();function _0x31c0(){const _0x3ec56c=['block','100vw','Gruppe','/1/','addEventListener','--vw','Ballerup','classList','disabled','September','Gruppenavn','Gruppe:\x20','value','gruppe','Monday','ref','Januar','4434017KjkVLP','add','width','.5vh\x200vw','Marts','361845659163','none','Sjangali','248582tHzgry','Juni','kano-kalender-44ce5.appspot.com','Forkert\x20password','visible','2487510okXFot','Thursday','34XWkaNQ','23577144yKZmxD','styleSheets','display','getElementById','0\x200','fontSize','Alugod','setItem','padding','documentElement','style','forEach','August','visibility','formR','removeAttribute','Februar','til','userAgent','Navn:\x20<br>&nbsp;','setProperty','https://kano-kalender-44ce5-default-rtdb.europe-west1.firebasedatabase.app','current','month','Byspejderne','#fra\x20option','then','12vw','<br>&nbsp;','database','Navn','kano-kalender-44ce5','toLocaleDateString','reservation','year','active','12.4vw','1:361845659163:web:18fc9613fb8c76b72ccabe','December','Kode','4692768UUNdcQ','Password','long','4710812qIfihT','val','availHeight','G-4M1C25VHRE','/Password','Wednesday','height','Day','173406GTVGNd','0.5%\x202%','getMonth','0vh\x200vw','2vw','navn','<br>','Mobile','11.6vh','resize','April','remove','child','test','Tuesday','cssRules','November','Div','get','getDate','querySelectorAll','options','Ravnehus','input','formP','Juli','set','screen','92%','getItem','Maj','Skovlunde','Der\x20er\x20dage\x20som\x20ikke\x20er\x20dine,\x20der\x20bliver\x20overskrevet','innerWidth','resizeTo','getFullYear','13vw','Navn:\x20','selectedIndex','getElementsByTagName','innerHTML','onload','hidden','fra','margin','#til\x20option','Herlev2','0vh\x20.2vw','tal','once'];_0x31c0=function(){return _0x3ec56c;};return _0x31c0();}var observedMonth=date[_0x50f102(0x183)](),observedYear=date['getFullYear'](),numberWeekdays=daysInMonth(observedMonth),currentDay=date[_0x50f102(0x194)](),nummerCur=0x0,startNumber=0x0;const database=firebase[_0x50f102(0x16b)]()[_0x50f102(0x1c2)]('/');function _0x529d(_0x2736c3,_0x19f5c5){const _0x31c0b7=_0x31c0();return _0x529d=function(_0x529d68,_0x285f58){_0x529d68=_0x529d68-0x169;let _0x5e91c3=_0x31c0b7[_0x529d68];return _0x5e91c3;},_0x529d(_0x2736c3,_0x19f5c5);}var changeAllowed=0x0;const detectDeviceType=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[_0x50f102(0x18e)](navigator[_0x50f102(0x1e6)])?_0x50f102(0x188):'Desktop';window[_0x50f102(0x1aa)]=setCurrentDate(date,currentDay),window[_0x50f102(0x1aa)]=sortDays(observedMonth,observedYear,numberWeekdays),window[_0x50f102(0x1aa)]=cleanDatabase(observedYear);const resizeOps=()=>{const _0x4d937e=_0x50f102;document[_0x4d937e(0x1dd)][_0x4d937e(0x1de)][_0x4d937e(0x1e8)]('--vh',window['innerHeight']*0.01+'px'),document[_0x4d937e(0x1dd)][_0x4d937e(0x1de)][_0x4d937e(0x1e8)](_0x4d937e(0x1b8),window[_0x4d937e(0x1a2)]*0.01+'px');};resizeOps(),window[_0x50f102(0x1b7)](_0x50f102(0x18a),resizeOps);function setCurrentDate(_0x371fe0,_0x3b2078){const _0x3a93c9=_0x50f102;let _0x57cfd2=monthTranslator(_0x371fe0[_0x3a93c9(0x183)]()),_0x35a0c6=_0x371fe0[_0x3a93c9(0x1a4)]();document[_0x3a93c9(0x1d7)](_0x3a93c9(0x170))[_0x3a93c9(0x1a9)]=observedYear,document[_0x3a93c9(0x1d7)]('month')[_0x3a93c9(0x1a9)]=monthTranslator(observedMonth),detectDeviceType()==_0x3a93c9(0x188)&&(document[_0x3a93c9(0x1d5)][0x0][_0x3a93c9(0x190)][0x2][_0x3a93c9(0x1de)][_0x3a93c9(0x1c6)]='100vw',document[_0x3a93c9(0x1d5)][0x0][_0x3a93c9(0x190)][0x3][_0x3a93c9(0x1de)]['padding']=_0x3a93c9(0x1c7),document[_0x3a93c9(0x1d5)][0x0][_0x3a93c9(0x190)][0x4]['style']['fontSize']=_0x3a93c9(0x185),document[_0x3a93c9(0x1d5)][0x0][_0x3a93c9(0x190)][0x5][_0x3a93c9(0x1de)][_0x3a93c9(0x1d9)]=_0x3a93c9(0x185),document[_0x3a93c9(0x1d5)][0x0][_0x3a93c9(0x190)][0x5][_0x3a93c9(0x1de)][_0x3a93c9(0x1c6)]=_0x3a93c9(0x169),document['styleSheets'][0x0][_0x3a93c9(0x190)][0x7]['style']['fontSize']=_0x3a93c9(0x1a5),document['styleSheets'][0x0]['cssRules'][0x8][_0x3a93c9(0x1de)][_0x3a93c9(0x1d9)]='13vw',document[_0x3a93c9(0x1d5)][0x0][_0x3a93c9(0x190)][0x9][_0x3a93c9(0x1de)]['width']=_0x3a93c9(0x1b4),document[_0x3a93c9(0x1d5)][0x0][_0x3a93c9(0x190)][0x9][_0x3a93c9(0x1de)][_0x3a93c9(0x1dc)]=_0x3a93c9(0x184),document['styleSheets'][0x0]['cssRules'][0xa][_0x3a93c9(0x1de)][_0x3a93c9(0x1ad)]=_0x3a93c9(0x1b0),document[_0x3a93c9(0x1d5)][0x0][_0x3a93c9(0x190)][0xa][_0x3a93c9(0x1de)]['width']=_0x3a93c9(0x172),document[_0x3a93c9(0x1d5)][0x0][_0x3a93c9(0x190)][0xb][_0x3a93c9(0x1de)][_0x3a93c9(0x1c6)]=_0x3a93c9(0x1b4),document[_0x3a93c9(0x1d5)][0x0][_0x3a93c9(0x190)][0xc][_0x3a93c9(0x1de)][_0x3a93c9(0x1ad)]=_0x3a93c9(0x1d8),document['styleSheets'][0x0]['cssRules'][0xc][_0x3a93c9(0x1de)][_0x3a93c9(0x1c6)]='12.3vw',document[_0x3a93c9(0x1d5)][0x0][_0x3a93c9(0x190)][0xc][_0x3a93c9(0x1de)][_0x3a93c9(0x17f)]=_0x3a93c9(0x189),document[_0x3a93c9(0x1d5)][0x0][_0x3a93c9(0x190)][0xd][_0x3a93c9(0x1de)][_0x3a93c9(0x1d9)]=_0x3a93c9(0x185),document[_0x3a93c9(0x1d5)][0x0][_0x3a93c9(0x190)][0xf][_0x3a93c9(0x1de)][_0x3a93c9(0x1ad)]=_0x3a93c9(0x182),document[_0x3a93c9(0x1d5)][0x0][_0x3a93c9(0x190)][0xf][_0x3a93c9(0x1de)][_0x3a93c9(0x1c6)]=_0x3a93c9(0x19d),document[_0x3a93c9(0x1d5)][0x0]['cssRules'][0x10]['style']['margin']='0.5%\x202%',document[_0x3a93c9(0x1d5)][0x0][_0x3a93c9(0x190)][0x10]['style'][_0x3a93c9(0x1c6)]=_0x3a93c9(0x19d),document[_0x3a93c9(0x1d5)][0x0][_0x3a93c9(0x190)][0x11][_0x3a93c9(0x1de)]['margin']=_0x3a93c9(0x182),document[_0x3a93c9(0x1d5)][0x0][_0x3a93c9(0x190)][0x11][_0x3a93c9(0x1de)]['width']='92%',document[_0x3a93c9(0x1d5)][0x0][_0x3a93c9(0x190)][0x12]['style'][_0x3a93c9(0x1ad)]=_0x3a93c9(0x182),document['styleSheets'][0x0][_0x3a93c9(0x190)][0x12][_0x3a93c9(0x1de)]['width']='92%',document[_0x3a93c9(0x1d5)][0x0]['cssRules'][0x13][_0x3a93c9(0x1de)][_0x3a93c9(0x1ad)]='0.5%\x202%',document[_0x3a93c9(0x1d5)][0x0][_0x3a93c9(0x190)][0x13]['style'][_0x3a93c9(0x1c6)]=_0x3a93c9(0x19d),document[_0x3a93c9(0x1d5)][0x0][_0x3a93c9(0x190)][0x14]['style'][_0x3a93c9(0x1ad)]=_0x3a93c9(0x182),document[_0x3a93c9(0x1d5)][0x0]['cssRules'][0x14][_0x3a93c9(0x1de)][_0x3a93c9(0x1c6)]=_0x3a93c9(0x19d),document['styleSheets'][0x0][_0x3a93c9(0x190)][0x15]['style']['margin']=_0x3a93c9(0x182),document[_0x3a93c9(0x1d5)][0x0][_0x3a93c9(0x190)][0x15][_0x3a93c9(0x1de)][_0x3a93c9(0x1c6)]=_0x3a93c9(0x19d),document['styleSheets'][0x0]['cssRules'][0x16]['style']['margin']=_0x3a93c9(0x182),document[_0x3a93c9(0x1d5)][0x0][_0x3a93c9(0x190)][0x16]['style']['width']=_0x3a93c9(0x19d),document[_0x3a93c9(0x1d5)][0x0][_0x3a93c9(0x190)][0x17][_0x3a93c9(0x1de)][_0x3a93c9(0x1ad)]=_0x3a93c9(0x182),document['styleSheets'][0x0]['cssRules'][0x17][_0x3a93c9(0x1de)][_0x3a93c9(0x1c6)]=_0x3a93c9(0x19d),document[_0x3a93c9(0x1d5)][0x0]['cssRules'][0x18][_0x3a93c9(0x1de)][_0x3a93c9(0x1ad)]=_0x3a93c9(0x182),document['styleSheets'][0x0][_0x3a93c9(0x190)][0x18]['style'][_0x3a93c9(0x1c6)]=_0x3a93c9(0x19d));}function monthTranslator(_0x59dd6f){const _0xd70311=_0x50f102;switch(_0x59dd6f){case 0x0:return _0xd70311(0x1c3);break;case 0x1:return _0xd70311(0x1e4);break;case 0x2:return _0xd70311(0x1c8);break;case 0x3:return _0xd70311(0x18b);break;case 0x4:return _0xd70311(0x19f);break;case 0x5:return _0xd70311(0x1cd);break;case 0x6:return _0xd70311(0x19a);break;case 0x7:return _0xd70311(0x1e0);break;case 0x8:return _0xd70311(0x1bc);break;case 0x9:return'Oktober';break;case 0xa:return _0xd70311(0x191);break;case 0xb:return _0xd70311(0x174);break;}}function daysInMonth(_0x27122c){switch(_0x27122c){case 0x0:return 0x1f;break;case 0x1:return 0x1c;break;case 0x2:return 0x1f;break;case 0x3:return 0x1e;break;case 0x4:return 0x1f;break;case 0x5:return 0x1e;break;case 0x6:return 0x1f;break;case 0x7:return 0x1f;break;case 0x8:return 0x1e;break;case 0x9:return 0x1f;break;case 0xa:return 0x1e;break;case 0xb:return 0x1f;break;}}function sortDays(_0x227991,_0x31ea55,_0xdec9ee){const _0x572911=_0x50f102;let _0x13fcba=_0x227991+0x1+_0x572911(0x1b6)+_0x31ea55,_0x4fb5b5=new Date(_0x13fcba);startNumber=findFirstDay(_0x4fb5b5);let _0x216fdb=new Date(),_0x1ff32c=_0x216fdb[_0x572911(0x194)](),_0x305ac3=_0x216fdb[_0x572911(0x183)](),_0xcee0bf=_0x216fdb[_0x572911(0x1a4)]();for(let _0xe9b96b=0x1;_0xe9b96b<=_0xdec9ee;_0xe9b96b++){database[_0x572911(0x1b2)]('value',_0x562f1a=>{const _0x2fa906=_0x572911;let _0x2c98df=_0x562f1a[_0x2fa906(0x18d)](observedYear+'/'+(observedMonth+0x1)+'/'+(_0xe9b96b+startNumber))[_0x2fa906(0x17a)]();_0x2c98df!=null&&(document[_0x2fa906(0x1d7)]('navn'+(_0xe9b96b+startNumber))[_0x2fa906(0x1a9)]=_0x2fa906(0x1a6)+_0x2fa906(0x16a)+_0x2c98df[_0x2fa906(0x16c)],document[_0x2fa906(0x1d7)]('gruppe'+(_0xe9b96b+startNumber))['innerHTML']=_0x2fa906(0x1be)+'<br>&nbsp;'+_0x2c98df[_0x2fa906(0x1bd)],document['getElementById']('R'+(_0xe9b96b+startNumber))[_0x2fa906(0x1ba)]['remove'](_0x2fa906(0x16f)),document[_0x2fa906(0x1d7)]('R'+(_0xe9b96b+startNumber))[_0x2fa906(0x1ba)]['add'](_0x2c98df['Gruppe']));;}),document['getElementById'](_0x572911(0x180)+(_0xe9b96b+startNumber))[_0x572911(0x1a9)]=_0xe9b96b,document[_0x572911(0x1d7)](_0x572911(0x180)+(_0xe9b96b+startNumber))[_0x572911(0x1de)]['visibility']='visible',document['getElementById'](_0x572911(0x192)+(_0xe9b96b+startNumber))['style'][_0x572911(0x1e1)]=_0x572911(0x1d0),document['getElementById']('R'+(_0xe9b96b+startNumber))['style'][_0x572911(0x1e1)]=_0x572911(0x1d0),document['getElementById'](_0x572911(0x180)+(_0xe9b96b+startNumber))[_0x572911(0x1ba)][_0x572911(0x1c5)](_0x572911(0x171)),_0x1ff32c==_0xe9b96b&&_0x305ac3==_0x227991&&_0xcee0bf==_0x31ea55&&document['getElementById']('Day'+(_0xe9b96b+startNumber))[_0x572911(0x1ba)][_0x572911(0x1c5)](_0x572911(0x1ea));}for(i=0x1d;i<0x20;i++){document['querySelectorAll']('#fra\x20option')[_0x572911(0x1df)](_0x57d3a8=>{const _0xc278ee=_0x572911;_0x57d3a8[_0xc278ee(0x1bf)]==i&&(_0x57d3a8[_0xc278ee(0x1bb)]=![],_0x57d3a8[_0xc278ee(0x1e3)](_0xc278ee(0x1ab)));}),document['querySelectorAll'](_0x572911(0x1ae))[_0x572911(0x1df)](_0x339f5a=>{const _0x1ae542=_0x572911;_0x339f5a[_0x1ae542(0x1bf)]==i&&(_0x339f5a['disabled']=![],_0x339f5a['removeAttribute']('hidden'));});}for(i=_0xdec9ee+0x1;i<0x20;i++){document[_0x572911(0x195)](_0x572911(0x1ed))[_0x572911(0x1df)](_0x3b9c54=>{const _0x22cee8=_0x572911;_0x3b9c54['value']==i&&(_0x3b9c54[_0x22cee8(0x1bb)]=!![],_0x3b9c54[_0x22cee8(0x1ab)]=_0x22cee8(0x1ab));}),document[_0x572911(0x195)](_0x572911(0x1ae))[_0x572911(0x1df)](_0x4054d7=>{const _0x1e98e3=_0x572911;_0x4054d7[_0x1e98e3(0x1bf)]==i&&(_0x4054d7[_0x1e98e3(0x1bb)]=!![],_0x4054d7[_0x1e98e3(0x1ab)]=_0x1e98e3(0x1ab));});}}function cleanup(){const _0xdb0c7e=_0x50f102;for(let _0x342299=0x1;_0x342299<=0x25;_0x342299++){document['getElementById'](_0xdb0c7e(0x180)+_0x342299)['innerHTML']=0x1,document[_0xdb0c7e(0x1d7)](_0xdb0c7e(0x180)+_0x342299)[_0xdb0c7e(0x1ba)][_0xdb0c7e(0x18c)](_0xdb0c7e(0x1ea)),document[_0xdb0c7e(0x1d7)](_0xdb0c7e(0x180)+_0x342299)[_0xdb0c7e(0x1de)][_0xdb0c7e(0x1e1)]='hidden',document[_0xdb0c7e(0x1d7)](_0xdb0c7e(0x192)+_0x342299)[_0xdb0c7e(0x1de)]['visibility']=_0xdb0c7e(0x1ab),document['getElementById']('R'+_0x342299)[_0xdb0c7e(0x1de)]['visibility']=_0xdb0c7e(0x1ab),document[_0xdb0c7e(0x1d7)](_0xdb0c7e(0x180)+_0x342299)['classList'][_0xdb0c7e(0x18c)](_0xdb0c7e(0x171)),document[_0xdb0c7e(0x1d7)]('navn'+_0x342299)[_0xdb0c7e(0x1a9)]=_0xdb0c7e(0x1a6)+_0xdb0c7e(0x16a),document['getElementById']('gruppe'+_0x342299)[_0xdb0c7e(0x1a9)]=_0xdb0c7e(0x1be)+_0xdb0c7e(0x16a),document[_0xdb0c7e(0x1d7)]('R'+_0x342299)[_0xdb0c7e(0x1ba)][_0xdb0c7e(0x18c)](_0xdb0c7e(0x1da)),document[_0xdb0c7e(0x1d7)]('R'+_0x342299)[_0xdb0c7e(0x1ba)][_0xdb0c7e(0x18c)](_0xdb0c7e(0x1cb)),document[_0xdb0c7e(0x1d7)]('R'+_0x342299)[_0xdb0c7e(0x1ba)][_0xdb0c7e(0x18c)](_0xdb0c7e(0x1b9)),document['getElementById']('R'+_0x342299)[_0xdb0c7e(0x1ba)][_0xdb0c7e(0x18c)](_0xdb0c7e(0x1ec)),document[_0xdb0c7e(0x1d7)]('R'+_0x342299)[_0xdb0c7e(0x1ba)][_0xdb0c7e(0x18c)](_0xdb0c7e(0x1af)),document['getElementById']('R'+_0x342299)['classList'][_0xdb0c7e(0x18c)](_0xdb0c7e(0x1a0)),document[_0xdb0c7e(0x1d7)]('R'+_0x342299)['classList'][_0xdb0c7e(0x18c)](_0xdb0c7e(0x197)),document[_0xdb0c7e(0x1d7)]('R'+_0x342299)['classList'][_0xdb0c7e(0x18c)]('Hjortespring'),document[_0xdb0c7e(0x1d7)]('R'+_0x342299)[_0xdb0c7e(0x1ba)][_0xdb0c7e(0x18c)]('Mjølner'),document[_0xdb0c7e(0x1d7)]('R'+_0x342299)[_0xdb0c7e(0x1ba)][_0xdb0c7e(0x1c5)]('reservation');}}function forward(){const _0x14d8c1=_0x50f102;cleanup(),document[_0x14d8c1(0x1d7)](_0x14d8c1(0x1e2))[_0x14d8c1(0x1de)][_0x14d8c1(0x1d6)]=_0x14d8c1(0x1ca),document[_0x14d8c1(0x1d7)](_0x14d8c1(0x199))[_0x14d8c1(0x1de)][_0x14d8c1(0x1d6)]=_0x14d8c1(0x1ca),observedMonth==0xb?(observedMonth=0x0,observedYear++):observedMonth++,numberWeekdays=daysInMonth(observedMonth),sortDays(observedMonth,observedYear,numberWeekdays),document[_0x14d8c1(0x1d7)]('year')['innerHTML']=observedYear,document[_0x14d8c1(0x1d7)](_0x14d8c1(0x1eb))[_0x14d8c1(0x1a9)]=monthTranslator(observedMonth);}function backward(){const _0x59d62e=_0x50f102;cleanup(),document[_0x59d62e(0x1d7)](_0x59d62e(0x1e2))[_0x59d62e(0x1de)][_0x59d62e(0x1d6)]=_0x59d62e(0x1ca),document[_0x59d62e(0x1d7)](_0x59d62e(0x199))['style'][_0x59d62e(0x1d6)]=_0x59d62e(0x1ca),observedMonth==0x0?(observedMonth=0xb,--observedYear):observedMonth--,numberWeekdays=daysInMonth(observedMonth),sortDays(observedMonth,observedYear,numberWeekdays),document[_0x59d62e(0x1d7)](_0x59d62e(0x170))['innerHTML']=observedYear,document['getElementById'](_0x59d62e(0x1eb))[_0x59d62e(0x1a9)]=monthTranslator(observedMonth);}function reserver(_0x54d1db){const _0x21ab1c=_0x50f102;if(document[_0x21ab1c(0x1d7)](_0x21ab1c(0x180)+_0x54d1db)['style']['visibility']==_0x21ab1c(0x1ab)|document[_0x21ab1c(0x1d7)](_0x21ab1c(0x199))['style'][_0x21ab1c(0x1d6)]==_0x21ab1c(0x1b3)|document[_0x21ab1c(0x1d7)](_0x21ab1c(0x1e2))[_0x21ab1c(0x1de)][_0x21ab1c(0x1d6)]==_0x21ab1c(0x1b3)){}else nummerCur=_0x54d1db,document[_0x21ab1c(0x1d7)](_0x21ab1c(0x186)+_0x54d1db)[_0x21ab1c(0x1a9)]==_0x21ab1c(0x1e7)?(document[_0x21ab1c(0x1d7)](_0x21ab1c(0x1e2))[_0x21ab1c(0x1de)][_0x21ab1c(0x1d6)]=_0x21ab1c(0x1b3),localStorage[_0x21ab1c(0x19e)](_0x21ab1c(0x16c))!=null&&(document[_0x21ab1c(0x1a8)](_0x21ab1c(0x198))[0x0]['value']=localStorage[_0x21ab1c(0x19e)](_0x21ab1c(0x16c)),document['getElementById'](_0x21ab1c(0x1c0))[_0x21ab1c(0x1bf)]=localStorage[_0x21ab1c(0x19e)](_0x21ab1c(0x1b5)),document[_0x21ab1c(0x1a8)](_0x21ab1c(0x198))[0x1][_0x21ab1c(0x1bf)]=localStorage[_0x21ab1c(0x19e)](_0x21ab1c(0x175))),document['getElementById'](_0x21ab1c(0x1ac))[_0x21ab1c(0x1bf)]=_0x54d1db-startNumber,document['getElementById'](_0x21ab1c(0x1e5))[_0x21ab1c(0x1bf)]=_0x54d1db-startNumber):(document['getElementById'](_0x21ab1c(0x199))[_0x21ab1c(0x1de)][_0x21ab1c(0x1d6)]=_0x21ab1c(0x1b3),localStorage[_0x21ab1c(0x1db)](_0x21ab1c(0x1b1),_0x54d1db),localStorage[_0x21ab1c(0x19e)](_0x21ab1c(0x175))!=null&&(document[_0x21ab1c(0x1a8)](_0x21ab1c(0x198))[0x2][_0x21ab1c(0x1bf)]=localStorage['getItem'](_0x21ab1c(0x175))));}function closeForm(){const _0x215b15=_0x50f102;document['getElementById']('formR')[_0x215b15(0x1de)][_0x215b15(0x1d6)]=_0x215b15(0x1ca),document[_0x215b15(0x1d7)]('formP')['style'][_0x215b15(0x1d6)]=_0x215b15(0x1ca);}function closeR(){const _0x106a0c=_0x50f102;let _0x53bd53=document[_0x106a0c(0x1a8)](_0x106a0c(0x198))[0x0]['value'],_0x125e08=document[_0x106a0c(0x1d7)]('gruppe')[_0x106a0c(0x1bf)],_0xe4faa8=document[_0x106a0c(0x1a8)]('input')[0x1][_0x106a0c(0x1bf)],_0x1cd8ff=document[_0x106a0c(0x1d7)]('gruppe')[_0x106a0c(0x196)][document[_0x106a0c(0x1d7)](_0x106a0c(0x1c0))[_0x106a0c(0x1a7)]][_0x106a0c(0x1a9)];if(_0x53bd53!=''&_0x125e08!=_0x106a0c(0x16f)&_0xe4faa8!=''){let _0x3cca35=document[_0x106a0c(0x1d7)]('fra')[_0x106a0c(0x1bf)],_0x45d60c=document[_0x106a0c(0x1d7)]('til')[_0x106a0c(0x1bf)];nummerCur=startNumber+Number(_0x3cca35);if(_0x3cca35==_0x45d60c)database[_0x106a0c(0x18d)](observedYear)['child'](observedMonth+0x1)[_0x106a0c(0x18d)](nummerCur)[_0x106a0c(0x193)]()[_0x106a0c(0x1ee)](_0x32c6f7=>{const _0x453e66=_0x106a0c;_0x32c6f7[_0x453e66(0x17a)]()!=null?alert('Dagen\x20er\x20optaget'):(database[_0x453e66(0x18d)](observedYear+'/'+(observedMonth+0x1)+'/'+nummerCur)['set']({'Navn':_0x53bd53,'Gruppe':_0x125e08,'Gruppenavn':_0x1cd8ff,'Password':_0xe4faa8}),document[_0x453e66(0x1d7)]('R'+nummerCur)['classList'][_0x453e66(0x18c)](_0x453e66(0x16f)),document[_0x453e66(0x1d7)]('R'+nummerCur)[_0x453e66(0x1ba)][_0x453e66(0x1c5)](_0x125e08),document[_0x453e66(0x1d7)](_0x453e66(0x186)+nummerCur)[_0x453e66(0x1a9)]=_0x453e66(0x1a6)+_0x453e66(0x187)+_0x53bd53,document['getElementById'](_0x453e66(0x1c0)+nummerCur)[_0x453e66(0x1a9)]=_0x453e66(0x1be)+_0x453e66(0x187)+_0x1cd8ff);});else{let _0x53393f=0x0;Number(_0x3cca35)>Number(_0x45d60c)?_0x53393f=Number(_0x45d60c)+numberWeekdays-Number(_0x3cca35):_0x53393f=Number(_0x45d60c)-Number(_0x3cca35);let _0x3a9915=0x0,_0x4fc06b=0x1,_0x44188c=observedMonth+0x2+_0x106a0c(0x1b6)+observedYear,_0x50e20f=new Date(_0x44188c),_0x2264f6=findFirstDay(_0x50e20f);if(changeAllowed==0x1){let _0x821f94=localStorage[_0x106a0c(0x19e)](_0x106a0c(0x175));_0x3cca35>_0x45d60c?database[_0x106a0c(0x18d)](observedYear)['get']()[_0x106a0c(0x1ee)](_0x2c7caf=>{const _0x298113=_0x106a0c;for(let _0x38524a=0x0;_0x38524a<=_0x53393f;_0x38524a++){_0x3a9915=Number(_0x38524a)+Number(_0x3cca35);if(numberWeekdays<_0x3a9915){let _0x2c9f4b=_0x2c7caf[_0x298113(0x18d)](observedMonth+0x2)[_0x298113(0x18d)](_0x3a9915+_0x2264f6-Number(numberWeekdays))[_0x298113(0x18d)](_0x298113(0x177))[_0x298113(0x17a)]();_0x2c9f4b!=_0x821f94&_0x2c9f4b!=null&&(_0x4fc06b=0x0);}else{let _0x72e3aa=_0x2c7caf['child'](observedMonth+0x1)[_0x298113(0x18d)](_0x3a9915)[_0x298113(0x18d)](_0x298113(0x177))[_0x298113(0x17a)]();_0x72e3aa!=_0x821f94&_0x72e3aa!=null&&(_0x4fc06b=0x0);}}if(_0x4fc06b==0x1){for(let _0x254c81=0x0;_0x254c81<=_0x53393f;_0x254c81++){_0x3a9915=Number(_0x254c81)+Number(_0x3cca35),Number(numberWeekdays)<_0x3a9915?database['child'](observedYear)[_0x298113(0x18d)](observedMonth+0x2)[_0x298113(0x18d)](_0x3a9915+_0x2264f6-Number(numberWeekdays))[_0x298113(0x19b)]({'Navn':_0x53bd53,'Gruppe':_0x125e08,'Gruppenavn':_0x1cd8ff,'Password':_0xe4faa8}):(document[_0x298113(0x1d7)]('R'+(Number(_0x3cca35)+startNumber+_0x254c81))[_0x298113(0x1ba)][_0x298113(0x18c)]('reservation'),document['getElementById']('R'+(Number(_0x3cca35)+startNumber+_0x254c81))[_0x298113(0x1ba)]['add'](_0x125e08),document[_0x298113(0x1d7)](_0x298113(0x186)+(Number(_0x3cca35)+startNumber+_0x254c81))[_0x298113(0x1a9)]=_0x298113(0x1a6)+_0x298113(0x187)+_0x53bd53,document[_0x298113(0x1d7)](_0x298113(0x1c0)+(Number(_0x3cca35)+startNumber+_0x254c81))[_0x298113(0x1a9)]=_0x298113(0x1be)+_0x298113(0x187)+_0x1cd8ff,database[_0x298113(0x18d)](observedYear)[_0x298113(0x18d)](observedMonth+0x1)[_0x298113(0x18d)](_0x3a9915)['set']({'Navn':_0x53bd53,'Gruppe':_0x125e08,'Gruppenavn':_0x1cd8ff,'Password':_0xe4faa8}));}localStorage[_0x298113(0x1db)]('Navn',_0x53bd53),localStorage['setItem'](_0x298113(0x1b5),_0x125e08),localStorage[_0x298113(0x1db)](_0x298113(0x175),_0xe4faa8),document[_0x298113(0x1d7)](_0x298113(0x1e2))['style']['display']=_0x298113(0x1ca);}else alert('Der\x20er\x20dage\x20som\x20ikke\x20er\x20dine,\x20der\x20bliver\x20overskrevet');}):database[_0x106a0c(0x18d)](observedYear)[_0x106a0c(0x193)]()[_0x106a0c(0x1ee)](_0x14e427=>{const _0x2e4b6e=_0x106a0c;for(let _0x2b9a44=0x0;_0x2b9a44<=_0x53393f;_0x2b9a44++){let _0x4365b8=_0x14e427['child'](observedMonth+0x1)[_0x2e4b6e(0x18d)](Number(_0x3cca35)+Number(_0x2b9a44))[_0x2e4b6e(0x18d)]('Password')[_0x2e4b6e(0x17a)]();_0x4365b8!=_0x821f94&_0x4365b8!=null&&(_0x4fc06b=0x0);}if(_0x4fc06b==0x1){for(let _0x2fe6d2=0x0;_0x2fe6d2<=_0x53393f;_0x2fe6d2++){document[_0x2e4b6e(0x1d7)]('R'+(Number(_0x3cca35)+startNumber+_0x2fe6d2))[_0x2e4b6e(0x1ba)]['remove']('reservation'),document[_0x2e4b6e(0x1d7)]('R'+(Number(_0x3cca35)+startNumber+_0x2fe6d2))[_0x2e4b6e(0x1ba)][_0x2e4b6e(0x1c5)](_0x125e08),document['getElementById']('navn'+(Number(_0x3cca35)+startNumber+_0x2fe6d2))[_0x2e4b6e(0x1a9)]=_0x2e4b6e(0x1a6)+_0x2e4b6e(0x187)+_0x53bd53,document['getElementById'](_0x2e4b6e(0x1c0)+(Number(_0x3cca35)+startNumber+_0x2fe6d2))[_0x2e4b6e(0x1a9)]='Gruppe:\x20'+_0x2e4b6e(0x187)+_0x1cd8ff,database[_0x2e4b6e(0x18d)](observedYear)[_0x2e4b6e(0x18d)](observedMonth+0x1)[_0x2e4b6e(0x18d)](Number(_0x3cca35)+Number(_0x2fe6d2))[_0x2e4b6e(0x19b)]({'Navn':_0x53bd53,'Gruppe':_0x125e08,'Gruppenavn':_0x1cd8ff,'Password':_0xe4faa8});}localStorage[_0x2e4b6e(0x1db)]('Navn',_0x53bd53),localStorage[_0x2e4b6e(0x1db)](_0x2e4b6e(0x1b5),_0x125e08),localStorage[_0x2e4b6e(0x1db)]('Kode',_0xe4faa8),document[_0x2e4b6e(0x1d7)](_0x2e4b6e(0x1e2))[_0x2e4b6e(0x1de)][_0x2e4b6e(0x1d6)]=_0x2e4b6e(0x1ca);}else alert('Nogle\x20af\x20datoerne\x20er\x20reserveret');});}else _0x3cca35>_0x45d60c?database[_0x106a0c(0x18d)](observedYear)[_0x106a0c(0x193)]()[_0x106a0c(0x1ee)](_0x1adfdd=>{const _0x52f5f9=_0x106a0c;for(let _0x13724c=0x0;_0x13724c<=_0x53393f;_0x13724c++){_0x3a9915=Number(_0x13724c)+Number(_0x3cca35),numberWeekdays<_0x3a9915?_0x1adfdd[_0x52f5f9(0x18d)](observedMonth+0x2)[_0x52f5f9(0x18d)](_0x3a9915+_0x2264f6-Number(numberWeekdays))[_0x52f5f9(0x17a)]()!=null&&(_0x4fc06b=0x0):_0x1adfdd[_0x52f5f9(0x18d)](observedMonth+0x1)[_0x52f5f9(0x18d)](_0x3a9915)[_0x52f5f9(0x17a)]()!=null&&(_0x4fc06b=0x0);}if(_0x4fc06b==0x1){for(let _0x487c4c=0x0;_0x487c4c<=_0x53393f;_0x487c4c++){_0x3a9915=Number(_0x487c4c)+Number(_0x3cca35),Number(numberWeekdays)<_0x3a9915?database[_0x52f5f9(0x18d)](observedYear)[_0x52f5f9(0x18d)](observedMonth+0x2)[_0x52f5f9(0x18d)](_0x3a9915+_0x2264f6-Number(numberWeekdays))[_0x52f5f9(0x19b)]({'Navn':_0x53bd53,'Gruppe':_0x125e08,'Gruppenavn':_0x1cd8ff,'Password':_0xe4faa8}):(document['getElementById']('R'+(Number(_0x3cca35)+startNumber+_0x487c4c))[_0x52f5f9(0x1ba)][_0x52f5f9(0x18c)](_0x52f5f9(0x16f)),document[_0x52f5f9(0x1d7)]('R'+(Number(_0x3cca35)+startNumber+_0x487c4c))[_0x52f5f9(0x1ba)][_0x52f5f9(0x1c5)](_0x125e08),document[_0x52f5f9(0x1d7)](_0x52f5f9(0x186)+(Number(_0x3cca35)+startNumber+_0x487c4c))[_0x52f5f9(0x1a9)]='Navn:\x20'+'<br>'+_0x53bd53,document['getElementById'](_0x52f5f9(0x1c0)+(Number(_0x3cca35)+startNumber+_0x487c4c))[_0x52f5f9(0x1a9)]=_0x52f5f9(0x1be)+_0x52f5f9(0x187)+_0x1cd8ff,database['child'](observedYear)[_0x52f5f9(0x18d)](observedMonth+0x1)[_0x52f5f9(0x18d)](_0x3a9915)[_0x52f5f9(0x19b)]({'Navn':_0x53bd53,'Gruppe':_0x125e08,'Gruppenavn':_0x1cd8ff,'Password':_0xe4faa8}));}localStorage[_0x52f5f9(0x1db)](_0x52f5f9(0x16c),_0x53bd53),localStorage['setItem'](_0x52f5f9(0x1b5),_0x125e08),localStorage['setItem']('Kode',_0xe4faa8),document[_0x52f5f9(0x1d7)](_0x52f5f9(0x1e2))[_0x52f5f9(0x1de)]['display']=_0x52f5f9(0x1ca);}else alert(_0x52f5f9(0x1a1));}):database[_0x106a0c(0x18d)](observedYear)['get']()[_0x106a0c(0x1ee)](_0x59b4ed=>{const _0x313142=_0x106a0c;for(let _0x31e749=0x0;_0x31e749<=_0x53393f;_0x31e749++){_0x59b4ed[_0x313142(0x18d)](observedMonth+0x1)[_0x313142(0x18d)](Number(_0x3cca35)+Number(_0x31e749))[_0x313142(0x17a)]()!=null&&(_0x4fc06b=0x0);}if(_0x4fc06b==0x1){for(let _0x124700=0x0;_0x124700<=_0x53393f;_0x124700++){document[_0x313142(0x1d7)]('R'+(Number(_0x3cca35)+startNumber+_0x124700))[_0x313142(0x1ba)][_0x313142(0x18c)](_0x313142(0x16f)),document['getElementById']('R'+(Number(_0x3cca35)+startNumber+_0x124700))[_0x313142(0x1ba)][_0x313142(0x1c5)](_0x125e08),document['getElementById'](_0x313142(0x186)+(Number(_0x3cca35)+startNumber+_0x124700))[_0x313142(0x1a9)]='Navn:\x20'+_0x313142(0x187)+_0x53bd53,document[_0x313142(0x1d7)](_0x313142(0x1c0)+(Number(_0x3cca35)+startNumber+_0x124700))[_0x313142(0x1a9)]=_0x313142(0x1be)+_0x313142(0x187)+_0x1cd8ff,database[_0x313142(0x18d)](observedYear)[_0x313142(0x18d)](observedMonth+0x1)[_0x313142(0x18d)](Number(_0x3cca35)+Number(_0x124700))[_0x313142(0x19b)]({'Navn':_0x53bd53,'Gruppe':_0x125e08,'Gruppenavn':_0x1cd8ff,'Password':_0xe4faa8});}localStorage[_0x313142(0x1db)](_0x313142(0x16c),_0x53bd53),localStorage[_0x313142(0x1db)](_0x313142(0x1b5),_0x125e08),localStorage['setItem'](_0x313142(0x175),_0xe4faa8),document[_0x313142(0x1d7)](_0x313142(0x1e2))[_0x313142(0x1de)][_0x313142(0x1d6)]=_0x313142(0x1ca);}else alert('Nogle\x20af\x20datoerne\x20er\x20reserveret');});}}else alert('Der\x20mangler\x20at\x20blive\x20indtastet\x20noget');}function Slet(){const _0x1b5ec5=_0x50f102;let _0x570844=document[_0x1b5ec5(0x1a8)]('input')[0x2][_0x1b5ec5(0x1bf)],_0x2f10a8=0x0,_0x8971a0=0x0;database[_0x1b5ec5(0x1b2)](_0x1b5ec5(0x1bf),_0x2fddc0=>{const _0x179157=_0x1b5ec5;_0x2f10a8=_0x2fddc0[_0x179157(0x18d)](observedYear+'/'+(observedMonth+0x1)+'/'+nummerCur)[_0x179157(0x17a)](),_0x8971a0=database[_0x179157(0x18d)](observedYear+'/'+(observedMonth+0x1)+'/'+nummerCur),_0x570844==_0x2f10a8[_0x179157(0x177)]?(_0x8971a0[_0x179157(0x18c)](),document[_0x179157(0x1d7)](_0x179157(0x199))[_0x179157(0x1de)][_0x179157(0x1d6)]=_0x179157(0x1ca),document['getElementById'](_0x179157(0x186)+nummerCur)['innerHTML']=_0x179157(0x1a6),document[_0x179157(0x1d7)](_0x179157(0x1c0)+nummerCur)['innerHTML']=_0x179157(0x1be),document[_0x179157(0x1d7)]('R'+nummerCur)[_0x179157(0x1ba)][_0x179157(0x18c)](_0x2f10a8[_0x179157(0x1b5)]),document[_0x179157(0x1d7)]('R'+nummerCur)[_0x179157(0x1ba)][_0x179157(0x1c5)](_0x179157(0x16f))):alert(_0x179157(0x1cf));});}function Ændre(){const _0x1b1d27=_0x50f102;let _0x3f8394=document[_0x1b1d27(0x1a8)](_0x1b1d27(0x198))[0x2]['value'],_0x11caf1=0x0;localStorage['setItem'](_0x1b1d27(0x175),_0x3f8394),database[_0x1b1d27(0x1b2)](_0x1b1d27(0x1bf),_0x507dc8=>{const _0x1035f6=_0x1b1d27;_0x11caf1=_0x507dc8[_0x1035f6(0x18d)](observedYear+'/'+(observedMonth+0x1)+'/'+nummerCur+_0x1035f6(0x17d))[_0x1035f6(0x17a)]();if(_0x3f8394==_0x11caf1){changeAllowed=0x1,document[_0x1035f6(0x1d7)](_0x1035f6(0x199))[_0x1035f6(0x1de)][_0x1035f6(0x1d6)]=_0x1035f6(0x1ca),document[_0x1035f6(0x1d7)](_0x1035f6(0x1e2))[_0x1035f6(0x1de)][_0x1035f6(0x1d6)]=_0x1035f6(0x1b3);localStorage[_0x1035f6(0x19e)](_0x1035f6(0x16c))!=null&&(document[_0x1035f6(0x1a8)]('input')[0x0][_0x1035f6(0x1bf)]=localStorage[_0x1035f6(0x19e)]('Navn'),document[_0x1035f6(0x1d7)](_0x1035f6(0x1c0))[_0x1035f6(0x1bf)]=localStorage[_0x1035f6(0x19e)](_0x1035f6(0x1b5)),document[_0x1035f6(0x1a8)](_0x1035f6(0x198))[0x1][_0x1035f6(0x1bf)]=localStorage[_0x1035f6(0x19e)]('Kode'));let _0x50cc3f=localStorage[_0x1035f6(0x19e)](_0x1035f6(0x1b1));document[_0x1035f6(0x1d7)](_0x1035f6(0x1ac))[_0x1035f6(0x1bf)]=_0x50cc3f-startNumber,document[_0x1035f6(0x1d7)](_0x1035f6(0x1e5))[_0x1035f6(0x1bf)]=_0x50cc3f-startNumber;}else alert('Forkert\x20password');});}function cleanDatabase(_0x3d2f09){const _0x132c59=_0x50f102;database[_0x132c59(0x1b2)](_0x132c59(0x1bf),_0xce4f75=>{const _0x19fc73=_0x132c59;let _0x427dae=_0xce4f75['child'](_0x3d2f09-0x3)[_0x19fc73(0x17a)]();_0x427dae!=null&&database['child'](_0x3d2f09-0x3)[_0x19fc73(0x18c)]();});}function findFirstDay(_0x82dfe3){const _0x348b9b=_0x50f102;let _0x6df690=_0x82dfe3[_0x348b9b(0x16e)]('en-GB',{'weekday':_0x348b9b(0x178)});switch(_0x6df690){case _0x348b9b(0x1c1):return 0x0;break;case _0x348b9b(0x18f):return 0x1;break;case _0x348b9b(0x17e):return 0x2;break;case _0x348b9b(0x1d2):return 0x3;break;case'Friday':return 0x4;break;case'Saturday':return 0x5;break;case'Sunday':return 0x6;break;}}