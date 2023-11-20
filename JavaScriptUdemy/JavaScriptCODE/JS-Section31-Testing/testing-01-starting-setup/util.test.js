const puppeteer = require('puppeteer')
const {generateText, checkAndGenerate} = require('./util');

test('should good test', ()=>{
    const text = generateText('Max',29);
    expect(text).toBe('Max (29 years old)');
});

test('should generate a vaild text output',()=>{
    const text = checkAndGenerate('Max', 29);
    expect(text).toBe('Max (29 years old)')
})

test('should click around', async ()=>{
    const browser = puppeteer.launch({
        headless : false,
        slowMo : 80,
        args : ['--window-size=1920,1080']
    });
    const page = (await browser).newPage();
    await page.goto('file:///C:/Users/dnjsx/Desktop/JavaScript/JavaScriptUdemy/JavaScriptCODE/JS-Section31-Testing/testing-01-starting-setup/index.html');
})

