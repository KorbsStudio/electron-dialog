# Electron Dialog
Electron Documention: https://www.electronjs.org/docs/api/dialog

## Preview
### Windows
Message Dialog:

![Message](https://i.imgur.com/34eu9ue.png)

Question Dialog:

![Question](https://i.imgur.com/yxR626R.png)

Error Dialog:

![Error](https://i.imgur.com/MEO9exs.png)

### macOS
No preview available, I don't own a mac :)

<!-- Message Dialog:

![Message]()

Question Dialog:

![Question]()

Error Dialog:

![Error]() -->

### Linux
Message Dialog:

![Message](https://i.imgur.com/sr3WE4O.png)

Question Dialog:

![Question](https://i.imgur.com/6wDsWAV.png)

Error Dialog:

![Error](https://i.imgur.com/Uc1gH4H.png)

## Dialogs
### Message
```
const options = {
    type: 'info',
    title: 'Dialog',
    message: 'Title of dialog.',
    detail: 'Details for the message dialog.',
};

dialog.showMessageBox(null, options, (response, checkboxChecked) => {});
```

### Question
```
const options = {
    type: 'question',
    buttons: ['Cancel', 'Option One', 'Option Two', 'Option Three'],
    defaultId: 2,
    title: 'Dialog',
    message: 'Do you want to continue?',
    detail: 'Choose any of the options below or cancel.',
    checkboxLabel: 'This is a checkbox',
    checkboxChecked: true,
};

dialog.showMessageBox(null, options, (response, checkboxChecked) => {});
```

### Error Message
```
const options = {
    type: 'error',
    title: 'Dialog',
    message: 'Title of error.',
    detail: 'Details for the error dialog.',
};

dialog.showMessageBox(null, options, (response, checkboxChecked) => {});
```
