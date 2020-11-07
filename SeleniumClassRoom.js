const { Builder, By, Key, until, ass } = require("selenium-webdriver");
const assert = require("assert");

describe("Open my Web App", function () {
  let driver;
  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });
  // Navigate to Url
  it("open local url", async function () {
    await driver.get("http://localhost:3001");
  });

  it("Check userName filled or Not", async function () {
    try {
      let dd = await driver.findElement(By.xpath("//input[@name='Enter']")).sendKeys("5512345673");
    } catch (err) {
      console.log("err in Check userName filled or Not");
    }
  });

  it("Send OTP", async () => {
    try {
      await driver.findElement(By.name("Send OTP")).click();
    } catch (err) {
      assert.strictEqual(err.name, "Send OTP");
    }
  });

  it("Check userName filled or Not", async function () {
    try {
      await driver.wait(until.elementLocated(By.name("password")));

      let pass = await driver.findElement(By.xpath("//input[@name='password']"));
      await pass.sendKeys("879383");
    } catch (err) {
      console.log(err);
    }
  });
  it("Submit OTP", async () => {
    try {
      await driver.findElement(By.name("Verify")).click();
      let url = await driver.getCurrentUrl();
      assert.strictEqual(url, "http://localhost:3001/otp");
    } catch (err) {
      assert.strictEqual(err.name, "Send OTP");
    }
  });
  it("Check User Page", async function () {
    try {
      await driver.wait(until.elementLocated(By.name("scheduled")));
      let url = await driver.getCurrentUrl();
      assert.strictEqual(url, "http://localhost:3001/student-live-list");
      let str = await driver.findElement(By.name("scheduled")).getText();
      console.log(str);
      assert.strictEqual(str, "No scheduled session at this time");
    } catch (err) {
      console.log(err);
    }
  });
  it("studentProfile", async function () {
    try {
      let str = await driver.findElement(By.name("studentProfile")).click();
    } catch (err) {
      console.log(err);
    }
  });
  it("Logout", async function () {
    try {
      await driver.wait(until.elementLocated(By.name("Logout")));
      let str = await driver.findElement(By.name("Logout")).click();
    } catch (err) {
      console.log(err);
    }
  });
  //   after(() => driver && driver.quit());
});

// driver.wait(function() {
//     return driver.getTitle().then(function(title) {
//       return title === 'webdriver - Google Search';
//     });
//   }, 1000);
