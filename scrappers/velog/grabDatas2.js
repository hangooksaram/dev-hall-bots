/* eslint-disable no-undef */
const { exit } = require("process");
const puppeteer = require("puppeteer");
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// var document = new JSDOM().window.document;

const width = 1024,
  height = 1600;

(async () => {
  const browser = await puppeteer.launch({ headless: "false" });
  // 새로운 페이지 열기

  const page = await browser.newPage();
  await page.setViewport({ width, height });

  await page.goto("https://velog.io/trending/week", {
    waitUntil: "load",
  });

  page.on("console", (msg) => {
    for (let i = 0; i < msg.args().length; ++i)
      console.log(`${i}: ${msg.args()[i]}`);
  });

  const a = await page.evaluate(() => {
    return 1 + 2;
  });
  console.log(a);

  const sData = await page.evaluate(() => {
    let scrappedData = []; // 스크래핑 내용 담을 빈 배열

    const tbodyChilds = document.querySelectorAll("img");

    for (let i = 1; i < tbodyChilds.length; i++) {
      scrappedData.push({
        src: tbodyChilds[i].src,
      });
    }

    return scrappedData;
  });

  const fs = require("fs"); // 내장된 `file system` 모듈
  // 스크래핑된 내용 json 파일로 원하는 경로에 생성
  fs.writeFile(
    "scrappers/velog/Docs/velog-trending.json",
    JSON.stringify(sData, null, 2),
    (err) =>
      err
        ? console.error("!!Failed writing file", err)
        : console.log("Successfuly file created!")
  );

  await browser.close();

  exit();
})();
