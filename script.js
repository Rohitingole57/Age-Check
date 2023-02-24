
function checkAge() {
        var agee = document.getElementById("age").value
        console.log(agee);
        if (agee > 18) {
        //    console.log("Heloo 18+");
            document.getElementById("chekage").innerText = "you can drive no problem";
        }
        else if (agee < 18)
        {
        //    console.log("Heloo 18-");
           document.getElementById("chekage").innerText = "you can NOT DRIVE";
       }
        else
         {
            // console.log("Heloo 18");
            document.getElementById("chekage").innerHTML = "Just Eligible";
        }
    }