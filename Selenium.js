const { Builder, By, Key, until, ass } = require("selenium-webdriver");
const assert = require("assert");

describe("Open my Web App", function () {
  let driver;
  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });
  // Navigate to Url
  it("open local url", async function () {
    let srt = await driver.get("http://localhost:3000/");
  });

  it("click on forgot button", async () => {
    try {
      await driver.findElement(By.linkText("Forgot Password")).click();
      url = await driver.getCurrentUrl();
    } catch (err) {
      assert.strictEqual(err.name, "Forgot Password");
    }
  });

  it("Check userName filled or Not", async function () {
    await driver.findElement(By.name("user_name")).sendKeys("Akash");
  });
  // await driver.findElement(By.id("name")).click()
  it("Check Button Click or Not", async function () {
    try {
      await driver.findElement(By.id("button")).click();
    } catch (err) {
      console.log(err);
    }
  });
  it("Search on Google", async function () {
    try {
      let str = await driver.findElement(By.name("check text")).getText();
      assert.strictEqual(str, "Edit and save to reload.");
      console.log("paragraph text same");
    } catch (err) {
      console.log("err");
    }
  });

  after(() => driver && driver.quit());
});
