# Electron Dialog
Preview shown on [GNOME 40](https://forty.gnome.org/) desktop using [Fedora 34](https://getfedora.org/):

https://user-images.githubusercontent.com/51213244/120060559-73dbb180-c026-11eb-9523-366d77a9bf00.mp4

Electron Documention: https://www.electronjs.org/docs/api/dialogw

## Example Shown in Video Preview
### Message
```
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
```

### Error Message
```
error.addEventListener('click', (event) => {
    dialog.showErrorBox('Error Message', 'Explaination for error.');
});
```
