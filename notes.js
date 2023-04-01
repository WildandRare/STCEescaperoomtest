localStorage.setItem("checkIfINisViewed", false)

var noteS = [
    `<span style="color: red; float: right; font-size: xx-large; background-color: brown;" onclick="this.parentElement.style.display = 'none';">x</span>
    <br>
    <i style="color: lightskyblue;">(shared file)</i>
    <textarea style="width: 95%; height: 80%; resize: none; background-color: rgb(253, 255, 222); font-size: xx-large;">I will find you, and I will kill you.</textarea>`,
    `<span style="color: red; float: right; font-size: xx-large; background-color: brown;" onclick="this.parentElement.style.display = 'none';">x</span>
    <br>
    <textarea style="width: 95%; height: 80%; resize: none; background-color: rgb(253, 255, 222); font-size: xx-large;">
Name: Declan Rini
Age: 12
Favorite Sport: DODGEBALL
Worst Enemy: Kirk Evering
Blood Type: Z
Grade: 7th
Class: 2028
Obsession: Science
Status: Alive?
Gender: Male

</textarea>`,
`<span style="color: red; float: right; font-size: xx-large; background-color: brown;" onclick="this.parentElement.style.display = 'none';">x</span>
    <br>
    <textarea style="width: 95%; height: 80%; resize: none; background-color: rgb(253, 255, 222); font-size: xx-large;"></textarea>`
]

var notesViewed = [];

function note(numb){
    if(numb!=2){
        if(notesViewed.includes(1)==false){
            //
            setTimeout(function(){
                document.getElementById("ex").style.bottom = "0vw";
                document.getElementById("ex").innerHTML = `
                I guess this note is just a bunch of things about Declan. Plus, why in the world is his blood type Z? Is that even possible?
                <button opt>Yeah</button><button opt>No</button>`;
                localStorage.setItem("checkIfINisViewed", true)
            }, 1000)
            //
        }
        if(numb==0 && notesViewed.includes(0)==false){
            //
            setTimeout(function(){
                document.getElementById("ex").style.bottom = "0vw";
                document.getElementById("ex").innerHTML = `
                Is this a <span style='color: red;'>death</span> threat????!?!?!?!?!`
            }, 1000)
            //
        }
        document.querySelector("[insNote]").style.display = "block";
        document.querySelector("[insNote]").innerHTML = noteS[numb];  
        notesViewed.push(numb)
    } else {
        document.querySelector("[insNote]").style.display = "block";
        document.querySelector("[insNote]").innerHTML = noteS[numb];  
        setTimeout(function(){
            document.querySelector("[insNote]").style.display = "none";
            document.getElementById("ex").style.bottom = "0vw";
            document.getElementById("ex").innerHTML = `
            <span style="color: blue;"><i>*closes the new note*</i></span>
            Why are you making a new note? We don't have time for that. Just look at the other notes and see if we get any other good information. And fast so we can get out of here.`
        }, 1000)
    }
}
