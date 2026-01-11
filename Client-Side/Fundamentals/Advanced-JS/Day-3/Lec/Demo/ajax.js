{/* <Employee>
    <name>menna</name>
    <age>25</age>
</Employee>
<Employee>
    <name>hamada</name>
    <age>30</age>
</Employee>
<Employee>
    <name>ahmed</name>
    <age>25</age>
</Employee>
<Employee>
    <name>menna</name>
    <age>25</age>
</Employee>
<Employee>
    <name>menna</name>
    <age>25</age>
</Employee> */}

// `{
//     "name":"menna",
//     "age":"25"

// },{
//     "name":"menna",
//     "age":"25"

// },{
//     "name":"menna",
//     "age":"25"

// }
// ,{
//     "name":"menna",
//     "age":"25"

// }`

// var jsObject = JSON.parse(Json);//convert Json To Js Object
// var jsonObject = JSON.stringify(jsObject);//convert js Object to Json Object//

//AJAX concept  async Js and Xml

//js native
function start(){
    var users;
    var xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.open("get","https://jsonplaceholder.typicode.com/users");
    xhr.send();
    xhr.addEventListener("readystatechange",function(){
        if(xhr.readyState==4 && xhr.status===200){
            //console.log(xhr.response);
            users = JSON.parse(xhr.response);
            // console.log(users[0].name);
            // console.log(users);//
            userUi(users);

        }
    });
}


function userUi(arr){
    arr.forEach(function(el){
        console.log(el.name);
    })

}

