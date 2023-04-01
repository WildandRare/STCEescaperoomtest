var pageR = {
    notes: `<div style="width: 100%; height: 4.3vw; position: relative; background-color: rgb(255, 230, 0); border-radius: 1.3vw; text-align: center; font-size: xx-large; border-color: black; border-style: solid; border-width: 0.3vw; margin: -0.3vw;">
    Notes
</div>
<br>
<div notes style="display: grid; grid-template-columns: auto auto auto auto; justify-content: left; align-items: center; column-gap: 2.3vw;">
    <div note="1" onclick="note(1)">
        <p style="position:absolute; font-size: 0.9vw;">Name: Decl...</p>
        <span>Untitled Note</span>
    </div>
    <div note="2" onclick="note(0)">
        <p style="position:absolute; font-size: 0.9vw;">I will fi...</p>
        <span><i style="color: lightskyblue;">(shared file)</i> life_threat</span>
    </div>
    <div addNote onclick="note(2)">
        +
    </div>
</div>
<br><br><br><br>
<div style="position: relative; bottom: 0vw; background-color: lightgray; width: 100%; height: 29vw; display: none;" insNote>
    <span style="color: red; float: right; font-size: xx-large; background-color: brown;" onclick="this.parentElement.style.display = 'none';">x</span>
    <br>
    <i style="color: lightskyblue;">(shared file)</i>
    <textarea style="width: 95%; height: 80%; resize: none; background-color: rgb(253, 255, 222); font-size: xx-large;">I will find you, and I will kill you.</textarea>
</div>`,
    lock: ` <div style="display: grid; grid-template-columns: auto; justify-content: center;">
    <br>
    <br>
    <span time>01</span>
    <span time>11</span>
    <br>
    <br>
    <span style="text-align: center; font-size: xx-large;">Enter Password</span>
</div>
<div style="display: grid; grid-template-columns: auto; justify-content: start; justify-items:center;">
    <div>
        <input style="width: 98.3%; position: absolute; font-size: x-large;" pass>
    </div>
</div>


<div>

</div>

</div>
<br>
<br>
<br>
<br>
<div style="display: grid; grid-template-columns: auto; justify-content: center;">
<button style="background-color: rgb(158, 206, 209); width: 2.3vw; height: 2.3vw; border-radius: 2.3vw; font-size: x-large; display: none;" go onclick="edGO()">^</button>
</div>
<div style="width: 100%; height: 3.3vw; position: relative;"></div>`,  
    home: `<span style="position: absolute; left: 93%; color: white;">1:11</span>

    <br>

    <div apps style="display: grid; grid-template-columns: auto auto auto auto; justify-items: center; row-gap: 1.3vw;">
        <div app outofservice onclick="outOS()"></div>
        <div app="notes" onclick="changePage('notes')"><span>Notes</span></div>
        <div app outofservice onclick="outOS()"></div>
        <div app outofservice onclick="outOS()"></div>

        <div app outofservice onclick="outOS()"></div>
        <div app outofservice onclick="outOS()"></div>
        <div app="grades" onclick="changePage('gTracker')"><span>GTracker</span></div>
        <div app outofservice onclick="outOS()"></div>

        <div app outofservice onclick="outOS()"></div>
        <div app outofservice onclick="outOS()"></div>
        <div app outofservice onclick="outOS()"></div>
        <div app outofservice onclick="outOS()"></div>

        <div app="SmartHome" onclick="changePage('sHome')"><span>Smart Home</span></div>
        <div app outofservice onclick="outOS()"></div>
        <div app outofservice onclick="outOS()"></div>
        <div app outofservice onclick="outOS()"></div>

        <div app outofservice onclick="outOS()"></div>
        <div app outofservice onclick="outOS()"></div>
        <div app outofservice onclick="outOS()"></div>
        <div app outofservice onclick="outOS()"></div>

        <div app outofservice onclick="outOS()"></div>
        <div app outofservice onclick="outOS()"></div>
        <div app outofservice onclick="outOS()"></div>
        <div app outofservice onclick="outOS()"></div>

        
    </div>`,
    sHome: `<div style="display: grid; grid-template-columns: auto auto; justify-content: center; row-gap: 0.3vw; column-gap: 0.3vw;">
    <div dev>
        <span>Living Room Light <span style="color: lightblue;">Unavaliable</span></span>
    </div>
    <div dev>
        <span>Kitchen Light <span style="color: lightblue;">Unavaliable</span></span>
    </div>
    <div dev>
        <span>Declan's Bedroom Light<span style="color: lightblue;">Unavaliable</span></span>
    </div>
    <div dev>
        <span>Kat's Bedroom Light<span style="color: lightblue;">Unavaliable</span></span>
    </div>
</div>`,
    gTracker: `
    <br>
                    Grades: Declan Rini
                    <br>
                    <div grades>
                        <br>
                        <div grade><span>Algebra 1</span> <span style="color: red; text-align: right;">90%</span></div>
                        <div grade><span>English 7-1</span> <span style="color: red; text-align: right;">88%</span></div>
                        <div grade><span>History 7-1</span> <span style="color: red; text-align: right;">97%</span></div>
                        <div grade><span>Science 7-1</span> <span style="color: red; text-align: right;">100%</span></div>
                        <div grade><span>Lunch</span> <span style="color: red; text-align: right;">20%</span></div>
                    </div>`
}

var giveSPEX = `<button opt style="width: 100%; z-index: 1; font-size: x-large;" onclick="gStp()">*give Sean the phone*</button>
<button opt style="width: 100%; z-index: 1; font-size: x-large;" onclick="dgStp()">*don't give Sean the phone*</button>`;