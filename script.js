var myIndex = 0;
carousel();
var myIndex1 = 0;
carousel1();

var myIndexDept = 0;
carouselDept();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 3 seconds
}

function carousel1() {
    var i;
    var x = document.getElementsByClassName("mySlides1");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex1++;
    if (myIndex1 > x.length) { myIndex1 = 1 }
    x[myIndex1 - 1].style.display = "block";
    setTimeout(carousel1, 3000);
}

function carouselDept() {
    var i;
    var x = document.getElementsByClassName("mySlidesDept");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndexDept++;
    if (myIndexDept > x.length) { myIndexDept = 1 }
    x[myIndexDept - 1].style.display = "block";
    setTimeout(carouselDept, 3000);
}