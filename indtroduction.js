var intnames = [
    [
        ename = "DOANYA",
        pname = "Doanya",
        message = "Hello Doanya. I'm Sean. You're stuck in here too? You know there has been a murder in this building, right. Right? <button onclick='intmes(\"YES-MUR\")' opt>YES</button><button onclick='intmes(\"YES-MUR\")>NO</button>"
    ],
    [
        ename = "ETHAN",
        pname = "Ethan",
        message = "Hello. I'm Sean. As you might know, there has been a murder in this very building. We  <span color='red'>need</span> to find the killer. Are you up for it? <button opt onclick='intmes(\"OKAY-1\")'>Yes</button>"
    ],
    [
        ename = "TAKIRA",
        pname = "Takira",
        message = "Hello Takira. I'm Sean. As you might know, there has been a murder in this very building. We  <span color='red'>need</span> to find the killer. Are you up for it? <button opt onclick='intmes(\"OKAY-1\")'>Yes</button>"
    ],
    [
        ename = "LIAM",
        pname = "Liam",
        message = "Hello Liam/Kristoff. I'm Sean. As you might know, there has been a murder in this very building. We  <span color='red'>need</span> to find the killer. Are you up for it? <button opt onclick='intmes(\"OKAY-1\")'>Yes</button>"
    ],
    [
        ename = "KEELY",
        pname = "Keely",
        message = "Hello. I'm Sean. As you might know, there has been a murder in this very building. We  <span color='red'>need</span> to find the killer. Are you up for it? <button opt onclick='intmes(\"OKAY-1\")'>Yes</button>"
    ],
    [
        ename = "KJ",
        pname = "KJ",
        message = "Hello. I'm Sean. As you might know, there has been a murder in this very building. We  <span color='red'>need</span> to find the killer. Before we start, would you rather me call you Kirk or KJ?<button opt onclick='intmes(\"CALL-KJ\")'>KJ</button><button opt onclick='intmes(\"CALL-KIRK\")'>Kirk</button>"
    ],
    [
        ename = "KIRK",
        pname = "KJ",
        message = "Hello. I'm Sean. As you might know, there has been a murder in this very building. We  <span color='red'>need</span> to find the killer. Before we start, would you rather me call you Kirk or KJ?<button opt onclick='intmes(\"CALL-KJ\")'>KJ</button><button opt onclick='intmes(\"CALL-KIRK\")'>Kirk</button>"
    ],
    [
        ename = "COURTNEY",
        pname = "Courtney",
        message = "Hello. I'm Sean. Horse-back riding is kind of creepy because I'm probably going to fall of the horse. I'm assuming you have heard about the murder, and we  <span color='red'>need</span> to find the killer. Are you up for it? <button opt onclick='intmes(\"OKAY-1\")'>Yes</button>"
    ],
    [
        ename = "PENN",
        pname = "Penn",
        message = "Hello. I'm Sean. As you might know, there has been a murder in this very building. We  <span color='red'>need</span> to find the killer. Are you up for it? <button opt onclick='intmes(\"OKAY-1\")'>Yes</button>"
    ],
    [
        ename = "WILLIAM",
        pname = "Penn",
        message = "Hello. I'm Sean. As you might know, there has been a murder in this very building. No fooling around right now. Are you up for it? <button opt onclick='intmes(\"OKAY-1\")'>Yes</button>"
    ],
    [
        ename = "SEAN",
        pname = "Sean",
        message = "Hello. I'm Sean. As you might know, there has been a murder in this very building. We  <span color='red'>need</span> to find the killer. Are you up for it? <button opt onclick='intmes(\"OKAY-1\")'>Yes</button>"
    ],
    [
        ename = "DECLAN",
        pname = "Declan",
        message = "Hello. I'm Sean. Just saying, I think I could beat you in basketball (: I'm guessing you've heard about the murder. We, are going to find the killer. Are you up for it? <button opt onclick='intmes(\"OKAY-1\")'>Yes</button>"
    ],
    [
        ename = "CASEY",
        pname = "Casey",
        message = "Hello. I'm Sean. There's been a murder in this building, which I'm sure you know. We  <span color='red'>need</span> to find the killer. Are you up for it? <button opt onclick='intmes(\"OKAY-1\")'>Yes</button>"
    ],
    [
        ename = "CASSIDY",
        pname = "Casey",
        message = "Hello. I'm Sean. As you might know, there has been a murder in this very building. We  <span color='red'>need</span> to find the killer. Are you up for it? <button opt onclick='intmes(\"OKAY-1\")'>Yes</button>"
    ],
    [
        ename = "CONNOR",
        pname = "Connor",
        message = "Hello. I'm Sean. As you might know, there has been a murder in this very building. We  <span color='red'>need</span> to find the killer. Are you up for it? <button opt onclick='intmes(\"OKAY-1\")'>Yes</button>"
    ],
    [
        ename = "ISAAC",
        pname = "Isaac",
        message = "Hello. I'm Sean. As you might know, there has been a murder in this very building. We  <span color='red'>need</span> to find the killer. Are you up for it? <button opt onclick='intmes(\"OKAY-1\")'>Yes</button>"
    ]
]

function intmes(type){
    if(type=="LET-START"){
        window.location.assign("story.html")
    } else {
        document.getElementById("ex").innerHTML = intmes2(type);
    }

    new Audio("click.mp3").play()
}

function intmes2(type){
    if (type=="YES-MUR"){
        return "Good, that gives me a little less explaining to do. <button opt onclick='intmes(\"OKAY-1\")'>Okay</button>"
    } else if (type=="NO-MUR"){
        return "Oh. Okay... Well there has been a murder so, now you know. <button opt onclick='intmes(\"OKAY-1\")'>Okay</button>"
    } else if(type=="OKAY-1") {
        if (ename=="DECLAN"){
            return "Declan, is dead. It happened in this very buildi- wait, aren't you Declan? Are you the same Declan that died or... Let's just act like you are another Declan, I guess. <button opt onclick='intmes(\"IS-DECLAN\")'>Okay</button>"
        } else {
            return "I'm so creeped out being locked in this hospital... But if we get out of here alive we have to get out knowing who the killer is. I'm ready, but are you? <button opt onclick='intmes(\"YES-R\")'>Yes</button><button opt onclick='intmes(\"NO-R\")'>No</button>"
        }
    } else if (type=="YES-R"){
        return "Then let's not waste any time. <button opt onclick='intmes(\"LET-START\")'>Okay</button><button opt onclick='intmes(\"YOU-TIME\")'>You're the one wasting time!</button>"
    }  else if(type=="LET-START"){
        return "Okay!";
    } else if(type=="YOU-TIME"){
        return "Someone has an attitude, " + ename + ". <button opt onclick='intmes(\"LET-START\")'>Let's start.</button>"
    } else if(type=="IS-DECLAN"){
        return "Declan, is dead. It happened in this very building. We, are going to find out who this killer is. And I may or may not have asked you this before, but are you up for it, because I am. <button opt onclick='intmes(\"YES-R\")'>Yes</button><button opt onclick='intmes(\"NO-R\")'>No</button>"
    } else if(type=="NO-R"){
        return "Well unless you want to get your head chopped off too, you don't have a choice. I'm not trying to die. <button opt onclick='intmes(\"LET-START\")'>Fine</button>"
    } else if(type=="CALL-KJ"){
        ename = "KJ"
        pname = "KJ"
        return "Okay.  I'm ready to find the killer. Are you? <button opt onclick='intmes(\"YES-R\")'>Yes</button><button opt onclick='intmes(\"NO-R\")'>No</button>"
    } else if(type=="CALL-KIRK"){
        ename = "KIRK"
        pname = "KIRK"
        return "Declan, is dead. It happened in this very building. I'm ready to find the killer. Are you? <button opt onclick='intmes(\"YES-R\")'>Yes</button><button opt onclick='intmes(\"NO-R\")'>No</button>"
    }
}

//<button opt onclick='\"HERE\"'>Okay</button>

window.addEventListener("load", function(){
    //document.getElementById("ex").innerHTML = intmes2("YES-MUR")
})
window.addEventListener("load", function(){
    document.querySelector("[opt]")
})

var ename = "no-name";
var pname;
var i;

function searchForName(name){
    for (let index = 0; index < intnames.length; index++) {
        if(name==intnames[index][0]){
            ename=name;
            pname=intnames[index][1];
            localStorage.setItem("pname", pname)
            i = index;
        };       
    }
}

function goName(){
    if(ename=="no-name"){
        //document.getElementById('name').value
        new Audio("click.mp3").play()

        document.getElementById("ex").style.bottom = "0vw";
        document.getElementById("ex").style.fontSize = "3vw"
        document.getElementById("ex").innerHTML = "I'm sorry, but I don't know who that is. Maybe check if you spelled your name incorrectly. Otherwise, are you in the class of Science 7-1?"
    } else {
        document.getElementById("ex").innerHTML = intnames[i][2];
        document.getElementById("ex").style.bottom = "0vw";
        document.getElementById("ex").style.height = "90%";
        document.getElementById("ex").style.fontSize = "3vw";
        document.querySelector("[this]").style.display = "block";
    }
}


window.addEventListener("load", function(){
    /*
    this.setInterval(function(){
        var click = document.querySelector("#red")
        click.play()
    }, 1000)*/

})   



function click(){

}
