const electron = require('electron');
const { type } = require('os');
const path = require('path');
const dialog = electron.remote.dialog;
var showBox = document.getElementById('show');
var error = document.getElementById('error');
  
showBox.addEventListener('click', (event) => {
    dialog.showMessageBox({
        buttons: ['Canel', 'Okay'],
        icon: path.join(__dirname, './src/image.png'), // This demo doesn't include an image, but path is there as an example
        title: 'Message',
        message: 'Hey there! This is a message.',
        detail: 'More details about the message that has appeared on your screen.',
    }).then(box => {
        console.log('Button Clicked Index - ', box.response);
      
        if (box.response === 0) {
            console.log('User triggered "Cancel" button in dialog.')
        } else if (box.response === 1) {
            console.log('User triggered "Okay" button in dialog.')
        }
    }).catch(err => {
        console.log(err)
    })
});

error.addEventListener('click', (event) => {
    dialog.showErrorBox('Error Message', 'Explaination for error.');
});
