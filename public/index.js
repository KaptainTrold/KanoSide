/*
Version 1: Kan vise nuværende måned og har strukturen af en kalender.
Version 2: Kan vise flere måneder, DDS farve skema, Ændre formatering til være mere google kalender agtig


Mangler:
Der skulle kunne reserveres kanoer.
Hjemmesiden skal rappotere til databasen og vice versa.
Der skal sættes et system om til at slette data i databasen.
*/

window.onload = window.resizeTo(window.screen.availWidth / 2, window.screen.availHeight / 2);
window.onload = cleanup();
const date = new Date();
var observedMonth = date.getMonth();
var observedYear = date.getFullYear();
var numberWeekdays = daysInMonth(observedMonth);
var currentDay = date.getDate();
window.onload = setCurrentDate(date, currentDay);
window.onload = sortDays(observedMonth, observedYear, numberWeekdays);


function setCurrentDate(date, day) {
    
    let month = monthTranslator(date.getMonth());
    let year = date.getFullYear();

    document.getElementById("year").innerHTML = year;
    document.getElementById("month").innerHTML = month;
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
    let startDay = date.toLocaleDateString("en-GB", { weekday: 'long' });
    let startNumber;

    switch(startDay) {
        case "Monday": startNumber = 0;
        break;
        case "Tuesday": startNumber = 1;
        break;
        case "Wednesday": startNumber = 2;
        break;
        case "Thursday": startNumber = 3;
        break;
        case "Friday": startNumber = 4;
        break;
        case "Saturday": startNumber = 5;
        break;
        case "Sunday": startNumber = 6;
        break;
    }

    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    for(let i = 1; i <= numberWeekdays; i++){
        document.getElementById("Day" + (i + startNumber)).innerHTML = i;
        document.getElementById("Day" + (i + startNumber)).style.visibility = "visible";
        if((currentDay == i) && (currentMonth == month) && (currentYear == year)){
            document.getElementById("Day" + (i + startNumber)).classList.add('current');
        }
    }
}

function cleanup() {
    for(let i=1; i<=37; i++){
        document.getElementById("Day" + i).innerHTML = 1;
        document.getElementById("Day" + i).classList.remove('current');
        document.getElementById("Day" + i).style.visibility = "hidden";
    }
}

function forward() {
    cleanup();

    if(observedMonth == 11){
        observedMonth = 0;
        observedYear++;
    } else {
        observedMonth++;
    }

    numberWeekdays = daysInMonth(observedMonth);
    sortDays(observedMonth, observedYear, numberWeekdays);
    document.getElementById("year").innerHTML = observedYear;
    document.getElementById("month").innerHTML = monthTranslator(observedMonth);
}

function backward() {
    cleanup();
    
    if(observedMonth == 0){
        observedMonth = 11;
        observedYear--;
    } else {
        observedMonth--;
    }

    numberWeekdays = daysInMonth(observedMonth);
    sortDays(observedMonth, observedYear, numberWeekdays);
    document.getElementById("year").innerHTML = observedYear;
    document.getElementById("month").innerHTML = monthTranslator(observedMonth);
}

function reserver(nummer) {
    console.log("Du der " + nummer);
    //let reserved = document.getElementById("R" + nummer).value;

    //if(reserved == 1){
        // Pop up med password for at ændre
    //} else {
        // Pop up med de fire oplysninger for at huske
    //}
}