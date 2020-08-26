const eyes = document.querySelectorAll(".pupil")
document.onmousemove = function() {
    var x = event.clientX * 100 / window.innerWidth + "%"
    var y = event.clientY * 100 / window.innerHeight + "%"
    eyes.forEach(eye => {
        eye.style.left = x;
        eye.style.top = y;
        eye.style.transform = "translate(-"+x+", -"+y+")"
    })
}
function upward()
{
    var pos1=100; //orange red
    var pos2=0; //right side green 
    var pos3=50; //orange right side bottom one
    var pos4=0; //light green from right side
    var pos5=40;//pink one from left side
    var pos6=50;//orange from tight rye side
    var pos7=0;
    var pos8=0;
    var pos9=0;
    var pos10=0;
    var rot=0;
    var element1=document.querySelector("#square div:nth-child(1)");
    var element2=document.querySelector("#square div:nth-child(2)");
    var element3=document.querySelector("#square div:nth-child(3)");
    var element4=document.querySelector("#square div:nth-child(4)");
    var element5=document.querySelector("#square div:nth-child(5)");
    var element6=document.querySelector("#square div:nth-child(6)");
    var element7=document.querySelector("#square div:nth-child(7)");
    var element8=document.querySelector("#square div:nth-child(8)");
    var element9=document.querySelector("#square div:nth-child(9)");
    var element10=document.querySelector("#square div:nth-child(10)");

    var id = setInterval(call1,150);
    function call1()
    {
        if(pos1<30)
        {
            pos1=100;
        }
        else
        {
            pos1--;
            console.log(pos1)
            rot=rot+10;
            element1.style.top = pos1+"vh";
            if(rot>359)
            {
                rot=10;
            }
            element1.style.transform="rotate("+rot+"deg)";
        }
    }
    var id = setInterval(call2,150);
    function call2()
    {
        if(pos2==-10)
        {
            pos2=30;
        }
        else
        {
            pos2--;
            console.log(pos2)
            rot=rot+10;
            element2.style.top = pos2+"vh";
            if(rot>359)
            {
                rot=10;
            }
            element2.style.transform="rotate("+rot+"deg)";
        }
    }
    var id = setInterval(call3,100);
    function call3()
    {
        if(pos3==40)
        {
            pos3=70;
        }
        else
        {
            pos3--;
            console.log(pos3);
            rot=rot+10;
            element3.style.top = pos3+"vh";
            if(rot>359)
            {
                rot=10;
            }
            element3.style.transform="rotate("+rot+"deg)";
        }
    }
    var id = setInterval(call4,200);
    function call4()
    {
        if(pos4==-10)
        {
            pos4=100;
        }
        else
        {
            pos4=pos4-5;
            console.log(pos4);
            rot=rot+10;
            element4.style.top = pos4+"vh";
            if(rot>359)
            {
                rot=10;
            }
            element4.style.transform="rotate("+rot+"deg)";
        }
    }
    var id = setInterval(call5,250);
    function call5()
    {
        if(pos5<-10)
        {
            pos5=40;
        }
        else
        {
            pos5=pos5-5;
            console.log(pos5);
            rot=rot+10;
            element5.style.top = pos5+"vh";
            if(rot>359)
            {
                rot=10;
            }
            element5.style.transform="rotate("+rot+"deg)";
        }
    }
    var id = setInterval(call6,250);
    function call6()
    {
        if(pos6<=-10)
        {
            pos6=50;
        }
        else
        {
            pos6-=5;
            console.log(pos6);
            rot=rot+10;
            element6.style.top = pos6+"vh";
            if(rot>359)
            {
                rot=10;
            }
            element6.style.transform="rotate("+rot+"deg)";
        }
    }
    var id = setInterval(call7,250);
    function call7()
    {
        if(pos7==0)
        {
            pos7=100;
        }
        else
        {
            pos7--;
            console.log(pos7);
            rot=rot+10;
            element7.style.top = pos7+"vh";
            if(rot>359)
            {
                rot=10;
            }
            element7.style.transform="rotate("+rot+"deg)";
        }
    }
    var id = setInterval(call8,250);
    function call8()
    {
        if(pos8==0)
        {
            pos8=100;
        }
        else
        {
            pos8--;
            console.log(pos8);
            rot=rot+10;
            element8.style.top = pos8+"vh";
            if(rot>359)
            {
                rot=10;
            }
            element8.style.transform="rotate("+rot+"deg)";
        }
    }
    var id = setInterval(call9,250);    
    function call9()
    {
        if(pos9==0)
        {
            pos9=100;
        }
        else
        {
            pos9--;
            console.log(pos9);
            rot=rot+10;
            element9.style.top = pos9+"vh";
            if(rot>359)
            {
                rot=10;
            }
            element9.style.transform="rotate("+rot+"deg)";
        }
    }
    var id = setInterval(call10,250);
    function call10()
    {
        if(pos10==0)
        {
            pos10=100;
        }
        else
        {
            pos10--;
            console.log(pos10);
            rot=rot+10;
            element10.style.top = pos10+"vh";
            if(rot>359)
            {
                rot=10;
            }
            element10.style.transform="rotate("+rot+"deg)";
        }
    }

    
}
upward();
