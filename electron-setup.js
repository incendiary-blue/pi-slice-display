const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

// Menu
const Menu = electron.Menu
const MenuItem = electron.MenuItem
const ipc = electron.ipcMain


const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// Adding the menus
let menu = new Menu();
menu.append(new MenuItem({label: 'Iron man', click() { console.log("You clicked iron man") } }));
menu.append(new MenuItem({label: 'Spiderman', type: 'checkbox', checked: true}));
menu.append(new MenuItem({label: 'Hulk'}));
menu.append(new MenuItem({label: 'Captain America'}));
menu.append(new MenuItem({label: 'Thor'}));

function createWindow () {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
    });

    mainWindow.setFullScreen(true);

    // and load the index.html of the app.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, './public/index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// When the window is created let's add a content menu.
app.on('browser-window-created', function (event, win) {
    win.webContents.on('context-menu', function (e, params) {
        menu.popup(win, params.x, params.y)
    })
});

ipc.on('show-context-menu', function (event) {
    const win = BrowserWindow.fromWebContents(event.sender)
    menu.popup(win)
});


// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
