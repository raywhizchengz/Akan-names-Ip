var year=parseInt.documentgetElementById("year").value;
var month=parseInt.documentgetElementById("month").value;
var date=parseInt.documentgetElementById("date").value;
var gender=parseInt.documentgetElementById("gender").value;

var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
function(DayofTheWeek){
    var centuryCode, yearCode, dayofTheWeek;
    var yearCode= year % 100;
    var centuryCode= parseInt(year / 100);
    dayOfWeek = (day + 2.6 * (month + 1) + yearCode + yearCode / 4 + centuryCode / 4 - 2 * centuryCode - 1) % 7;
    return parseInt(dayofTheWeek) - 1;
}
if(gender=="male"){
    alert(maleAkanNames);
}else if(gender== female){
    alert(femaleAkanNames);
}else if(dayofTheWeek==0 && male){
    alert("Kwasi");
}else if(gender== female){
    alert("Akosua");
}else if(dayofTheWeek==1 && male){
    alert("Kwadwo");
}else if(gender== female){
    alert("Adwoa");
}else if(dayofTheWeek==2 && male){
    alert("Kwabena");
}else if(gender== female){
    alert("Abenaa");
}else if(dayofTheWeek==3 && male){
    alert("Kwaku");
}else if(gender== female){
    alert("Akua");
}else if (dayofTheWeek==4 && male){
    alert("Yaw");
}else if(gender== female){
    alert("Yaa");
}else if(dayofTheWeek==5 && male){
    alert("Kofi");
}else if(gender== female){
    alert("Afua");
}else if(dayofTheWeek==6 && male){
    alert("Kwame");
}else{
    alert("Ama");
}