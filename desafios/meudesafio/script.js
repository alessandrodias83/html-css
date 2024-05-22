let count =1;
document.getElementById("slide1").checked = true;

setInterval( function(){nexImage();

}, 2500)

function nexImage (){
    count++;
    if(count>5) {
        count = 1;
    }

    document.getElementById("slide"+count).checked = true;
}