var d = new Date("12/31/2025");
// console.log(d);
document.cookie = "user=hamada; expires="+d;
document.cookie = "age=25; expires="+d;
var oldDate = new Date("12/15/2025");
//delete cookies
// document.cookie = "user=hamada; expires="+oldDate;
console.log(document.cookie);//get string

function getCookie(key){
var arrkeysAndValues = document.cookie.split(";");
console.log(arrkeysAndValues);

for(var i=0;i<arrkeysAndValues.length;i++){
    var keyAndValue = arrkeysAndValues[i].split("=");
    if(keyAndValue[0] === key){
        return keyAndValue[1];
    }
}

}
console.log(getCookie("user"));