//button id=color - alert favorite color
let colorBtn = document.querySelector('#color');

function colorBtnActn(evt) {
    evt.preventDefault();
    alert("Did you know: \n\n GREEN \n\n is one of my favorite colors ever?\n It's pronounced like the place 'Gruene, TX'!")
};

colorBtn.addEventListener('click', colorBtnActn)

//button id=place - alert favorite place
let placeBtn = document.querySelector('#place');

function placeBtnActn() {
    alert("Did you know: \n\n GRUENE, TX\n\n is one of my favorite places ever?\n It's pronounced like the color 'green'!")
};

placeBtn.addEventListener('click', placeBtnActn)

//button id=ritual - alert favorite ritual
let ritualBtn = document.querySelector('#ritual');

function ritualBtnActn() {
    alert("Did you know: \n\nA COLD SHOWER \n\nis one of my favorite daily rituals!\nPretty weird huh?  It's a great way to start the day!")
};

ritualBtn.addEventListener('click', ritualBtnActn)