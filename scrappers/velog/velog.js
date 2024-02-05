const puppeteer = require("puppeteer");

(async () => {
  // headless 브라우저 실행
  const browser = await puppeteer.launch();
  // 새로운 페이지 열기
  const page = await browser.newPage();
  // `https://ko.reactjs.org/` URL에 접속
  await page.goto("https://velog.io/trending/week");
  // `ko-reactjs-homepage.png` 스크린샷을 캡처 하여 Docs 폴더에 저장
  await page.screenshot({ path: "scrappers/velog/Docs/velog-homepage.png" });
  // `react_korea.pdf` pdf 파일을 생성하여 Docs 폴더에 저장
  await page.pdf({
    path: "scrappers/velog/Docs/velog-homepage.pdf",
    format: "A4",
  });
  // 모든 스크래핑 작업을 마치고 브라우저 닫기
  await browser.close();
})();
