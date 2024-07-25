/*
Version 1: Kan vise nuværende måned og har strukturen af en kalender.
Version 2: Kan vise flere måneder, DDS farve skema, Der skulle kunne reserveres kanoer og Ændre formatering til være mere google kalender agtig
Version 3: Hjemmesiden skal rappotere til databasen og vice versa, Der skal sættes et system om til at slette data i databasen og Reservere flere datoer på en gang.

Mangler:
*/


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
window.onload = setCurrentDate(date, currentDay);
window.onload = sortDays(observedMonth, observedYear, numberWeekdays);
window.onload = cleanDatabase(observedYear);

const resizeOps = () => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
    document.documentElement.style.setProperty("--vw", window.innerWidth * 0.01 + "px");
  };
  
resizeOps();
window.addEventListener("resize", resizeOps);

// Check if mobile or tablet
window.mobileAndTabletCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

function setCurrentDate(date, day) {
    
    let month = monthTranslator(date.getMonth());
    let year = date.getFullYear();

    document.getElementById("year").innerHTML  = observedYear;
    document.getElementById("month").innerHTML = monthTranslator(observedMonth);

    if (window.mobileAndTabletCheck) {
        document.styleSheets[0].cssRules[10].style.margin = "0 0";
        document.styleSheets[0].cssRules[12].style.margin = "0 0";
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
            let dag = snap.child(observedYear + '/' + observedMonth + '/' + (i + startNumber)).val();
            if (dag != null) {
                document.getElementById("navn"   + (i + startNumber)).innerHTML = "Navn: " + dag.Navn;
                document.getElementById("gruppe" + (i + startNumber)).innerHTML = "Gruppe: " + dag.Gruppenavn;
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
        document.getElementById("navn"   + i).innerHTML = "Navn: ";
        document.getElementById("gruppe" + i).innerHTML = "Gruppe: ";
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

    numberWeekdays = daysInMonth(observedMonth);
    sortDays(observedMonth, observedYear, numberWeekdays);
    document.getElementById("year").innerHTML  = observedYear;
    document.getElementById("month").innerHTML = monthTranslator(observedMonth);
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
    if (document.getElementById("Day" + nummer).style.visibility == "hidden"){
    } else {
        nummerCur = nummer;
        if((document.getElementById("navn" + nummer).innerHTML == "Navn: ")){
            document.getElementById("formR").style.display = "block";
            document.getElementById("fra").value = nummer - startNumber;
            document.getElementById("til").value = nummer - startNumber;
        } else {
            document.getElementById("formP").style.display = "block";
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

    if((navn != "") & (gruppe != "reservation")) {
        let fra = document.getElementById("fra").value;
        let til = document.getElementById("til").value;

        if (fra == til) {
            document.getElementById("R"      + nummerCur).classList.remove("reservation");
            document.getElementById("R"      + nummerCur).classList.add(gruppe);
            document.getElementById("navn"   + nummerCur).innerHTML = "Navn: " + navn  ;
            document.getElementById("gruppe" + nummerCur).innerHTML = "Gruppe: " + gruppenavn;

            database.once('value', snap => {
                database.child(observedYear + '/' + observedMonth + '/' + nummerCur).set({
                    Navn: navn,
                    Gruppe: gruppe,
                    Gruppenavn: gruppenavn,
                    Password: kode
                });
            });
        } else {
            let periode = 0;

            if (Number(fra) > Number(til)) {
                periode = Number(til) + numberWeekdays - Number(fra);
            } else {
                periode = Number(til) - Number(fra);
            }

            let semaphone = 0;
            let dayNum    = 0;
            let optaget   = 0;

            for ( i = 0; i <= periode; i++ ) {
                dayNum = Number(i) + nummerCur - startNumber;
                if (numberWeekdays < dayNum) {
                    database.once('value', snap => { 
                        optaget = snap.child(observedYear + '/' + (observedMonth + 1) + '/' + (dayNum - numberWeekdays) + '/Password').val();
                    });

                    if (optaget != null) {
                        semaphone = 1;
                    }
                } else {
                    if (document.getElementById("navn" + (dayNum + startNumber)).innerHTML != "Navn: ") {
                        semaphone = 1;
                    }
                }
            }

            if (semaphone & (changeAllowed == 0)) {
                alert("En af de valgte dag er optaget");
            } else {
                changeAllowed == 0;

                if (fra > til) {
                    for ( let k = 0; k <= periode; k++ ) {
                        dayNum = Number(k) + Number(fra);
                        let dateString = (observedMonth + 2) + "/1/" + observedYear;
                        let date = new Date(dateString);
                        let newMonthStartDay = findFirstDay(date);

                        if (numberWeekdays < dayNum) {
                            if (0 < Number(Number(fra) + Number(k) - Number(numberWeekdays) + newMonthStartDay) < 37) {
                                database.once('value', snap => {
                                    database.child(observedYear + '/' + (observedMonth + 1) + '/' + (Number(fra) + Number(k) + newMonthStartDay - Number(numberWeekdays))).set({
                                        Navn: navn,
                                        Gruppe: gruppe,
                                        Gruppenavn: gruppenavn,
                                        Password: kode
                                    });
                                });
                            } else {
                                alert("Noget gik galt, kontakt +45 61780264 eller mikkelaa2750@yahoo.dk");
                            }
                        } else {
                            document.getElementById("R"      + (Number(fra) + startNumber + k)).classList.remove("reservation");
                            document.getElementById("R"      + (Number(fra) + startNumber + k)).classList.add(gruppe);
                            document.getElementById("navn"   + (Number(fra) + startNumber + k)).innerHTML = "Navn: " + navn  ;
                            document.getElementById("gruppe" + (Number(fra) + startNumber + k)).innerHTML = "Gruppe: " + gruppenavn;

                            database.once('value', snap => {
                                database.child(observedYear + '/' + observedMonth + '/' + (Number(fra) + Number(k))).set({
                                    Navn: navn,
                                    Gruppe: gruppe,
                                    Gruppenavn: gruppenavn,
                                    Password: kode
                                });
                            });
                        }
                    }
                } else {
                    for( i = 0; i <= periode; i++ ) {
                        document.getElementById("R"      + (Number(fra) + startNumber + i)).classList.remove("reservation");
                        document.getElementById("R"      + (Number(fra) + startNumber + i)).classList.add(gruppe);
                        document.getElementById("navn"   + (Number(fra) + startNumber + i)).innerHTML = "Navn: " + navn  ;
                        document.getElementById("gruppe" + (Number(fra) + startNumber + i)).innerHTML = "Gruppe: " + gruppenavn;
            
                        database.once('value', snap => {
                            database.child(observedYear + '/' + observedMonth + '/' + (Number(fra) + startNumber + i)).set({
                                Navn: navn,
                                Gruppe: gruppe,
                                Gruppenavn: gruppenavn,
                                Password: kode
                            });
                        });
                    }
                }
            }
        }

        document.getElementById("formR").style.display = "none";
        document.getElementById("formP").style.display = "none";
    } else {
        alert("Der mangler at blive indtastet noget");
    }
}

function Slet() {
    let nyKode    = document.getElementsByTagName('input')[3].value;
    let data = 0;
    let sweetChildOfMine = 0;

    database.once('value', snap => {
        data = snap.child(observedYear + '/' + observedMonth + '/' + nummerCur).val();
        sweetChildOfMine = database.child(observedYear + '/' + observedMonth + '/' + nummerCur);
    });

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
}

function Ændre() {
    let nyKode    = document.getElementsByTagName('input')[3].value;
    let gamleKode = 0;
    database.once('value', snap => {
        gamleKode = snap.child(observedYear + '/' + observedMonth + '/' + nummerCur).val();
    });

    if(nyKode == gamleKode.Password){
        changeAllowed = 1;
        document.getElementById("formP").style.display = "none";
        document.getElementById("formR").style.display = "block";
    } else {
        alert("Forkert password");
    }
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
}