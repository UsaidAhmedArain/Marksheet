let btn = document.getElementById("cresult");

btn.addEventListener("click", () => {
    let ur = document.getElementById("urdu").value;
    let eng = document.getElementById("English").value;
    let chem = document.getElementById("Chemistry").value;
    let ma = document.getElementById("math").value;
    let p = document.getElementById("physics").value;
    let cp = document.getElementById("cpractical").value;
    let pp = document.getElementById("ppractical").value;

    let grade = "";

    let total = parseFloat(ur)+ parseFloat(eng) + parseFloat(chem)+ parseFloat(ma)+ parseFloat(p)+ parseFloat(cp) + parseFloat(pp);
    alert(`Your total marks is : ${total}`);

    let par = (total/550)*100;
    alert(`Your percantage is ${par.toFixed(2)}`);

    if(par <= 99 && par >= 80 ){
        grade ="A";
    }
    else if(par <= 79 && par >= 60){
        grade ="B";
    }
    else if(par <= 59 && par >= 40){
        grade = "C";
    }
    else{
        grade = "Failed";
    }

    document.getElementById("showData").innerHTML = `Your total marks are ${total} out of 550 and your percentage is ${par.toFixed(2)} 
    and your obtained grade is ${grade}.`;
});