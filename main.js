const axios = require('axios').default;
const fs = require('fs');


const API_URI = 'https://ship.stallionexpress.ca/api/v3';
const API_TOKEN = 'ZkmSAnZR1VQIqvL1H9Un1KbqIfdubxmX2Zz2IwG9IlzeMZSav2kZyNrzml9F';
const label_path = 'labels'
let ship_code = '210607CTTY';


axios.get(`${API_URI}/shipments/${ship_code}`, {
    headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'accept': 'application/json'
    }
}).then(res => {
    // const file = fs.createWriteStream(`${label_path}/${ship_code}.pdf`);
    // res.data.pipe(file);
    // console.log(res);
    // console.log(res.data.label);
    // console.log(typeof res.data.label);

    const labelData = Buffer.from(res.data.label, "base64");
    fs.writeFile(`labels/${ship_code}.pdf`, labelData, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});

// var fetch = require('node-fetch');

// fetch('https://ship.stallionexpress.ca/api/shipments/print', {
//     method: 'POST',
//     headers: {
//         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0',
//         'Accept': 'application/json, text/plain, */*',
//         'Accept-Language': 'en-US,en;q=0.5',
//         'X-Requested-With': 'XMLHttpRequest',
//         'X-CSRF-TOKEN': 'HWiazi2ZQM1ZLAB6Zu9XAX1UWOS6smdHvoNZrA9C',
//         'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9zaGlwLnN0YWxsaW9uZXhwcmVzcy5jYVwvYXBpXC9hdXRoXC9yZWZyZXNoIiwiaWF0IjoxNjIzMDgzMzYyLCJleHAiOjE2MjMxMDU1MDAsIm5iZiI6MTYyMzEwMTkwMCwianRpIjoidW1hU09XYktDZVFURkNpNiIsInN1YiI6NDY3MzEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.-4obmTTAeXzBNQ1d6W26YeSKRhT1SJhDLYBXy2NYb0U',
//         'Content-Type': 'application/json;charset=utf-8',
//         'X-Socket-Id': '11539.8944679',
//         'X-XSRF-TOKEN': 'eyJpdiI6InBrbGpDRlM0WGlDUER0ZDd3QTBnM3c9PSIsInZhbHVlIjoiclwvaFVXczd5UFpmQjVDc1BmZkJwUDNpVDNiT0VXaVZqSkE2WE96UGoycVJmQ2laTVY4c2xDamhhRitHeHFXOGRtRTM4WldzdWUrSWFUV245MFlNVGpNM2pGOFdLU1dpbDlcL2tvWjRZd1h5ZVg3ZUljc1cxdmR2VDRJQk9Cd2JBdyIsIm1hYyI6ImIwNGMwMDU4M2Q2NThlYzc2Y2E2ZGMxMzBmZjE5YjU5YmFhODNmOTE0MTQzYzM3YzI3MDMyMWJkZDIxYzc1NDgifQ==',
//         'Origin': 'https://ship.stallionexpress.ca',
//         'Connection': 'keep-alive',
//         'Referer': 'https://ship.stallionexpress.ca/shipments',
//         'TE': 'Trailers',
//         'Cookie': '_sl_session={%22firstVisit%22:1622566423876%2C%22lastVisit%22:1622573357425%2C%22number%22:4}; sl_activity=1623083348765; XSRF-TOKEN=eyJpdiI6InBrbGpDRlM0WGlDUER0ZDd3QTBnM3c9PSIsInZhbHVlIjoiclwvaFVXczd5UFpmQjVDc1BmZkJwUDNpVDNiT0VXaVZqSkE2WE96UGoycVJmQ2laTVY4c2xDamhhRitHeHFXOGRtRTM4WldzdWUrSWFUV245MFlNVGpNM2pGOFdLU1dpbDlcL2tvWjRZd1h5ZVg3ZUljc1cxdmR2VDRJQk9Cd2JBdyIsIm1hYyI6ImIwNGMwMDU4M2Q2NThlYzc2Y2E2ZGMxMzBmZjE5YjU5YmFhODNmOTE0MTQzYzM3YzI3MDMyMWJkZDIxYzc1NDgifQ%3D%3D; laravel_session=eyJpdiI6IndGSXFGVnJPeUZZSDRsVXlWWnl3b0E9PSIsInZhbHVlIjoiWnM5RDN0UDBcL24wRTczR0dpVVE5MHF5TlI4WUVzQmJpUWluak5rUDl1OFVnUkpmcEJ1WWluaE4yc0NKWnBBQk9cL2Z6blhrRWdCYWp0OCtyS2lCVnZDVjRnejVYNjJnYWlOK1c4T2ZaTjVRZkJGK2JvTEJraUZuMmEzTCtUZVhRZyIsIm1hYyI6ImU2ZWFhZGZlOWZhZjg1Y2E4YTNjZGYyOWViYzIzOWRmZDEwZjI4MGQwNDY4ZWYxYWJiYTk3M2ZkNmU2MTkzMzUifQ%3D%3D; rememberMe=false; _sl_session_beat=current'
//     },
//     body: '{"ids":["210607ZRU9"],"sort_by":"created_at","sort_order":"asc"}'
// })
// .then(res => {
//     console.log(res.body._readableState.buffer.head);
// });
