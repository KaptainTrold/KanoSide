/*
Version 1: Kan vise nuværende måned og har strukturen af en kalender.
Version 2:


Mangler:
Kan vise flere måneder.
Ændre formatering til være mere google kalender agtig.
Der skulle kunne reserveres kanoer.
Hjemmesiden skal rappotere til databasen og vice versa.
Der skal sættes et system om til at slette data i databasen.
*/




window.onload = maxWindow;
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

function maxWindow() {
    window.moveTo(0, 0);

    if (document.all) {
        top.window.resizeTo(screen.availWidth, screen.availHeight);
    }

    else if (document.layers || document.getElementById) {
        if (top.window.outerHeight < screen.availHeight || top.window.outerWidth < screen.availWidth) {
            top.window.outerHeight = screen.availHeight;
            top.window.outerWidth = screen.availWidth;
        }
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


    var dateString = (month + 1) + "/1/" + year;
    var date = new Date(dateString);
    var startDay = date.toLocaleDateString("en-GB", { weekday: 'long' });

    switch(startDay) {
        case "Monday": var startNumber = 0;
        break;
        case "Tuesday": var startNumber = 1;
        break;
        case "Wedensday": var startNumber = 2;
        break;
        case "Thursday": var startNumber = 3;
        break;
        case "Friday": var startNumber = 4;
        break;
        case "Saturday": var startNumber = 5;
        break;
        case "Sunday": var startNumber = 6;
        break;
    }
    
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();

    for(let i = 1; i <= numberWeekdays; i++){
        document.getElementById("Day" + (i + startNumber)).innerHTML = i;
        if((currentDay == i) & (currentMonth == month) & (currentYear == year)){
            document.getElementById("Day" + (i + startNumber)).classList.add('active');
        }
    }
}