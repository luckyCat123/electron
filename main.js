const {app,BrowserWindow} = require("electron")

const createWindow = ()=>{
    const win = new BrowserWindow({
        width:800,
        height:600
    })
    win.loadFile("index.html")
}

app.whenReady().then(()=>{
    createWindow()
    
    app.on("activate",()=>{
        if(BrowserWindow.getAllWindows().length === 0){
            console.log('重新创建窗口')
            createWindow()
        }
    })
})

app.on("window-all-closed",()=>{
    console.log(process.platform)
    if(process.platform !== "darwin"){
        app.quit()
    }
})