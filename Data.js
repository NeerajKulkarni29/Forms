function GetRData(){

    var REmail = document.getElementById("Remail").value;
    var Rpwd = document.getElementById("Rpwd").value;
    if ((REmail || Rpwd) == 0){

        confirm("Data Missing!! Cannot proceed without data");
        
    }
    else {
    alert("Entered Email is: "+REmail);
    alert("Entered Password is:"+" "+Rpwd);
    }

    const fs = require('fs');
    let data = REmail;
    fs.writeFile('ROutput.txt',data,(err){
        if(err) throw err;
    })
}

function GetSData(){
    var SEMail = document.getElementById("Semail").value;
    var SPwd = document.getElementById("Spwd").value;
    if ((SEMail || SPwd) == 0){

        confirm("Data Missing!! Cannot proceed without data");
        
    }

    else{
        alert("Entered Email is: "+SEMail);
    alert("Entered Password is:"+" "+SPwd);
    alert(Rpwd);
    }
}

function GetAData(){

    var AName = document.getElementById("fname").value;
    var AEmail = document.getElementById("Aemail").value;
    var APwd = document.getElementById("Apwd").value;

}

function Return(){

    alert("This will take you to our Homepage");
}
