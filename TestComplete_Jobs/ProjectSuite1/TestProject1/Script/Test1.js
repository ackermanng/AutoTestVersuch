function Test1()
{
  TestedApps.chrome.Run();
  Browsers.Item(btChrome).Navigate("https://www.google.com/search?q=hallo&rlz=1C1GCEA_enDE1105DE1105&oq=hallo&gs_lcrp=EgZjaHJvbWUqDAgAEEUYOxixAxiABDIMCAAQRRg7GLEDGIAEMg0IARAuGNQCGLEDGIAEMg0IAhAuGIMBGLEDGIAEMgcIAxAAGIAEMg0IBBAAGIMBGLEDGIAEMgoIBRAAGLEDGIAEMgoIBhAAGLEDGIAEMgcIBxAAGIAEMg0ICBAuGIMBGLEDGIAEMgcICRAAGI8C0gEIMTc5N2owajeoAgiwAgE&sourceid=chrome&ie=UTF-8");
  let browserWindow = Aliases.browser.BrowserWindow;
  aqObject.CheckProperty(Aliases.chrome.pageHalloGoogleSuche.FindElement("//span[.='hal·lo']"), "contentText", cmpEqual, "hal·lo");
  browserWindow.Close();
}
