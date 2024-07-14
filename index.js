const electron = require("electron");
const { app } = electron;
const { BrowserWindow } = electron;

// 윈도우 객체를 전역에 유지
let win;

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });
  win.loadURL(`file://${__dirname}/index.html`);
  //   win.webContents.openDevTools();

  win.on("closed", () => {
    // 윈도우 객체의 참조를 삭제
    win = null;
  });
}

app.on("ready", createWindow);

// 모든 창이 닫히면 애플리케이션 종료.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
