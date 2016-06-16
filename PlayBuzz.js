/**
 * Created by itc_user on 6/16/2016.
 */
var getResult = function () {
    var sum = 0;
    var questOne = document.getElementsByName("q1");
    for (var i = 0; i < questOne.length; i++) {
        var checkBox = questOne[i];
        if (checkBox.checked) {
            sum += parseInt(checkBox.value);
        }
    }

    var questTwo = document.getElementsByName("q2");
    for (var i = 0; i < questOne.length; i++) {
        var radio = questTwo[i];
        if (radio.checked) {
            sum += parseInt(radio.value);
        }
    }

    sum += parseInt(document.getElementById("quantity").value);

    sum += parseInt(document.getElementById("slider").value);

    if (document.getElementById("Name").value !== "") {
        sum += 2
    }

    if (document.getElementById("Email").value !== "") {
        sum += 2
    }


    if (sum <= 4) {
        alert("You are the worst parent in the history of the world! Your kids don't like you because you can't even tie their shoes :(");
    } else if (sum <= 12) {
        alert("Ouch, you're not the best parent in the world but you aint the worst either");
    } else if (sum < 16) {
        alert("You're a good parent but if you put in a little more effort you can be THE BEST!");
    } else if (sum >= 16) {
        alert("You're the greatest parent in the world! Your kids love you, your life is perfect and everyone wants to be you :)");
    }


};