function changeImage(src)
{
    document.getElementById('image').src = src;
}




/*    Слайдшоу        */
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}


i=0;
dt=new Array("#0000A0", "#A00000", "#00A000", "#00A0A0", "#A000A0", "#A0A000");
function cl() // эта функция будет менять цвет текста
{document.getElementById("web").style.color=dt[i++];
    if (i>dt.length) i=0;
    setTimeout("cl()",150);}
setTimeout("cl()",150);

i=0;
dt=new Array("#0200A0", "#A00040", "#01A000", "#0BA0A0", "#A00AA0", "#A0A040");
function cl2() // эта функция будет менять цвет текста
{document.getElementById("web2").style.color=dt[i++];
    if (i>dt.length) i=0;
    setTimeout("cl2()",150);}
setTimeout("cl2()",150);

i=0;
dt=new Array("#0000A0", "#A00000", "#00A000", "#00A0A0", "#A000A0", "#A0A000");
function cl3() // эта функция будет менять цвет текста
{document.getElementById("web3").style.color=dt[i++];
    if (i>dt.length) i=0;
    setTimeout("cl3()",150);}
setTimeout("cl3()",150);

i=0;
dt=new Array("#0000A0", "#A00000", "#00A000", "#00A0A0", "#A000A0", "#A0A000");
function cl4() // эта функция будет менять цвет текста
{document.getElementById("web4").style.color=dt[i++];
    if (i>dt.length) i=0;
    setTimeout("cl4()",150);}
setTimeout("cl4()",150);

i=0;
dt=new Array("#0321A0", "#A001200", "#32A000", "#00A044", "#AA0AA0", "#A0ABB0");
function cl5() // эта функция будет менять цвет текста
{document.getElementById("web5").style.color=dt[i++];
    if (i>dt.length) i=0;
    setTimeout("cl5()",150);}
setTimeout("cl5()",150);