window.addEventListener('load', ()=> {

    getBackground();

    
})

function getBackground() {
    var storage = firebase.storage();
    var storageRef = storage.ref();

    var test = storageRef.child('backgrounds/backalley.jpg');

    let root = document.documentElement;
    root.style.setProperty('background')
}
