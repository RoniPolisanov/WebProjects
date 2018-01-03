$(function(){
    $("header").append(
        `<h6> מזל חתוקה, גן תפרחת </h6>
        <span id="triggerOpen">&#9776;</span>
        <a class="miniLogo" href="index.html"></a>
        <article>
            <h3> לוח מודעות </h3>
        </article>`
    )

    $("body").append(
        `<nav id="mySidenav" class="sidenav" dir="rtl">
        <a href="javascript:void(0)" id="triggerClose"></a>
        <a href="#" id="settings"></a>
        <a href="#" id="userPhoto"></a>
        <article id="centerMenu">
            <h4>מזל חתוקה</h4>
            <h6>גננת, גן תפרחת</h6>
        </article>
        <article class="arrival">
        <a href="#">הגעה / איסוף</a>
        </article>
        <article class="bulitingBoard">
            <a href="index.html">לוח מודעות</a>
        </article>
        <article class="personalRecord">
        <a href="kidslist.html">מעקב אישי</a>
        </article>
        <article class="phoneBook">
            <a href="#">ספר טלפונים</a>
        </article>
        <article class="liveStream">
        <a href="#">צפייה בשידור חי</a>
        </article>
        <article class="gallery">
            <a href="#">גלריית תמונות</a>
        </article>
        <article class="calender">
        <a href="#">לוח שנה</a>
        </article>
        <article class="aboutUs">
            <a href="#">פרטי הגן</a>
        </article>
    </nav>`
    )
    
    $("kidsList").append(
        `<section id="child1">
        <a href="#"></a>
        <h5>ברי צקלה</h5>
        </section>`
    )
    var filename;
    var fullPath = window.location.href ;
    
    if (fullPath) {
        var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
    }

    if(filename != "asafl.html"){
    $("#submenu").append(
        `<li>
            <h6>
                <a href="asafl.html">פרטים אישיים</a>
            </h6>
        </li
        ><li id="selected">
            <h6>
                <a href="asafl-obehave.html">תיק משמעתי</a>
            </h6>
        </li
        ><li>
            <h6>
                <a href="#">מעקב נוכחות</a>
            </h6>
        </li
        ><li>
            <h6>
            <a href="#">הערות</a>
            </h6>
            </li>`
        )
    }

    fullPath = window.location.href ;
    
    if (fullPath) {
        var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
    }

    if(filename == "kidslist.html"){
        var childList = ["ברי צקלה", "יפה לולה", "אישים אוטו", "ניקולאי יונה", "אסף לוץ", "יפה רונקל", "אלכס טאזי", "אגם צאושו"];
    
        var childAddition = document.getElementById("kidsList");
        for(var i=1; i<9; ++i)
        {
            var aToAdd = document.createElement("a");
            var h5 = document.createElement("H5");
            var temp = document.createElement("SECTION");
            aToAdd.href = "#";
            temp.id = "child";
            if(i == 5)
            {
                aToAdd.href = "asafl.html";
            }
            aToAdd.style.background = "url(images/child" + i + ".png) center no-repeat";
            temp.appendChild(aToAdd);
            h5.append(childList[i-1]);
            temp.appendChild(h5);
            childAddition.append(temp);
            }
    }
    start();
});

function start(){
    document.getElementById("triggerClose").addEventListener("click", function closeNav(){
        document.getElementById("mySidenav").style.width = "0";
    });
    
    document.getElementById("triggerOpen").addEventListener("click", function openNav(){
        var w = window.innerWidth;
        if(w > 750){
            document.getElementById("mySidenav").style.width = "25%";
        }
        if(w < 750) {
            document.getElementById("mySidenav").style.width = "85%";
        }
    });

    fullPath = window.location.href ;
    
    if (fullPath) {
        var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
    }

    if(filename == "eventlist.html"){
        document.getElementById("addFooter").addEventListener("click", function addition(){
                var tempElement = document.getElementById("eventadded").cloneNode(true);
                document.getElementById("unusual").appendChild(tempElement);   
        });

        document.getElementById("deleteFooter").addEventListener("click", function removale(){
            document.getElementById("unusual").removeChild(document.getElementById("unusual").lastChild);   
        });
    }
};


