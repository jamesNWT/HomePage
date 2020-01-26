// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();

var doryRef = storageRef.child('backgrounds/dory.jpg');

doryRef.getDownloadURL().then(function(url) {

    var background = document.createElement('style');
    background.innerHTML = `
    body {
        background-image: url(${url});
    }
    `;

    document.head.appendChild(background);
})