// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();

var folderRef = storageRef.child('backgrounds');

var images = new Array();

// Find all the prefixes and items.
folderRef.listAll().then(function (res) {

    res.items.forEach(function (itemRef) {
        images.push(itemRef.fullPath)
    });

    setImage(images.length)



}).catch(function (error) {
    // Uh-oh, an error occurred!
});

function setImage(length) {

    var randomNumber = Math.floor(Math.random() * images.length);

    console.log(images);

    console.log(randomNumber);

    var imageRef = storageRef.child(images[randomNumber]);

    console.log(imageRef);

    imageRef.getDownloadURL().then(function (url) {

        var background = document.createElement('style');
        background.innerHTML = `
    body {
        background-image: url(${url});
    }
    `;

        document.head.appendChild(background);
    })
}

