
const puppeteer = require('puppeteer-core');

(async () => {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, 
                          executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe', // because we are using puppeteer-core so we must define this option
                          args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // set viewport and user agent (just in case for nice viewing)
    await page.setViewport({width: 1920, height: 1080});
    await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');
    
    // go to the target web
    await page.goto('https://ship.stallionexpress.ca/login');

    console.log(await browser.version());
    
    await page.waitForXPath('/html/body/div[1]/div[1]/div[1]/div/main/div/div/div[2]/div/form/div/div/div[2]/div/div/div[1]/div[2]/input');
    const emailInputElem = await page.$x('/html/body/div[1]/div[1]/div[1]/div/main/div/div/div[2]/div/form/div/div/div[2]/div/div/div[1]/div[2]/input');
    await emailInputElem[0].type('sumeyye@etsauto.ca');

    await page.waitForXPath('/html/body/div[1]/div[1]/div[1]/div/main/div/div/div[2]/div/form/div/div/div[3]/div/div/div[1]/div[2]/input');
    const passwordInputElem = await page.$x('/html/body/div[1]/div[1]/div[1]/div/main/div/div/div[2]/div/form/div/div/div[3]/div/div/div[1]/div[2]/input');
    await passwordInputElem[0].type('Trca2013!');
    await page.keyboard.press('Enter');
    
    while (page.() !== "Dashboard") {
        setTimeout({}, 100);
    }

    await page.goto('https://ship.stallionexpress.ca/shipments');


    // await browser.close();
})();


// var fetch = require('node-fetch');

// const fs = require('fs');

// const fileStream = fs.createWriteStream("file14.pdf");


// const labelPrint = async () => {
//     await fetch('https://ship.stallionexpress.ca/api/shipments/print', {
//         method: 'POST',
//         headers: {
//             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0',
//             'Accept': 'application/json, text/plain, */*',
//             'Accept-Language': 'en-US,en;q=0.5',
//             'X-Requested-With': 'XMLHttpRequest',
//             'X-CSRF-TOKEN': 'tVeAOd6eUeObucJg7WlFrxyUrOfrypVjGd8ucE4r',
//             'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9zaGlwLnN0YWxsaW9uZXhwcmVzcy5jYVwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYyMjU5MzIxMiwiZXhwIjoxNjIyNTk2ODEyLCJuYmYiOjE2MjI1OTMyMTIsImp0aSI6ImRsSmxmMUtURkkxWVVENjYiLCJzdWIiOjQ2NzMxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.jwWrxsmfeXFFNfGIGmMRphPkeV6dJPtnYraa-zq68mQ',
//             'Content-Type': 'application/json;charset=utf-8',
//             'X-Socket-Id': '11516.4750757',
//             'X-XSRF-TOKEN': 'eyJpdiI6Ikl4V1dZdzhDUGZCenBTTEUyODhLM3c9PSIsInZhbHVlIjoiTlBuK05XWHB4c0xGcnVnZWNYamJhb3lWelhWaUVkdmROODN4R0VEOWlHbW1UblFDdU1MTEVtZ1RqYmQ5T3EwTlRhS2xXWDlCVmVoNnkzSjMwU0VHREZvSk1mYWFlbDdncHZJOXprbnFINnErazZtWnN3cXFPN1k5NnNsM1AyRlYiLCJtYWMiOiI5ZDFkZDU4ZTE5MTlkM2Q4YmYwYjMwNjY4OGYwZjRiNzUzNGI1MmNkZWQ1MjBiMzc1ODJiYjc4ZDVjMDZkMTJlIn0=',
//             'Origin': 'https://ship.stallionexpress.ca',
//             'Connection': 'keep-alive',
//             'Referer': 'https://ship.stallionexpress.ca/shipments',
//             'TE': 'Trailers',
//             'Cookie': 'XSRF-TOKEN=eyJpdiI6Ikl4V1dZdzhDUGZCenBTTEUyODhLM3c9PSIsInZhbHVlIjoiTlBuK05XWHB4c0xGcnVnZWNYamJhb3lWelhWaUVkdmROODN4R0VEOWlHbW1UblFDdU1MTEVtZ1RqYmQ5T3EwTlRhS2xXWDlCVmVoNnkzSjMwU0VHREZvSk1mYWFlbDdncHZJOXprbnFINnErazZtWnN3cXFPN1k5NnNsM1AyRlYiLCJtYWMiOiI5ZDFkZDU4ZTE5MTlkM2Q4YmYwYjMwNjY4OGYwZjRiNzUzNGI1MmNkZWQ1MjBiMzc1ODJiYjc4ZDVjMDZkMTJlIn0%3D; laravel_session=eyJpdiI6InVTMUdoMHpBTkhEc1BjN0F5RW9XbUE9PSIsInZhbHVlIjoiN0xhVGEwR3VWZ2tWdGNnaXlRQkJQZWtuZHhPRkFiUEw4V1ArY25OQzYxSGRYNm9rc3dPa0RcL3hmVFFSM1hrS052R3JiSnhGakg2Y0JvMHFhbjRcL0tCNUIrZVc1dzFoNk43dExDM3JVajJsRnp4VXJKeTQxcUsrZFlqb0E1dTczUCIsIm1hYyI6ImQ3ZmNlNDA1YmQyNmE3MGE0N2VhNDEyZjI4MDdjZTFkYzA5YjZkYTJhZDUxNDVmMDQ3ZmFhZmJkMTY4Y2NjZjcifQ%3D%3D; _sl_session={%22firstVisit%22:1622566423876%2C%22lastVisit%22:1622571208682%2C%22number%22:3}; sl_activity=1622573357425; _sl_session_beat=current; rememberMe=false'
//         },
//         body: '{"ids":["210601SO4V"],"sort_by":"created_at","sort_order":"asc"}'
//     })
//     .then(res => {
//         console.log(res);
//         res.body.pipe(fileStream);
//     });
// }

// labelPrint();