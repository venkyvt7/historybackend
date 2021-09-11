const e = require('express');
const puppeteer=require('puppeteer');


async function scrapData(url){
    const browser=await puppeteer.launch();

    const page=await browser.newPage();
    await page.goto(url ,{ waitUntil:'networkidle2'});

    await page.waitForXPath('//*[@id="list-sc__content_1-0"]');
    const [el]=await page.$x('//*[@id="list-sc__content_1-0"]');
//    const src=await el.getProperty('src');
//    await console.log(el)
//    const srcTxt=await  src.jsonValue();
   console.log(el);
   await browser.close();
}

scrapData('https://sortingwithstyle.com/dinosaur-names/');



function allSrc1() {
    var src = [];
    var imgs = document.strong;
    for (var i=0, iLen=imgs.length; i<iLen; i++) {
      src[i] = imgs[i].innerText;
    }
    return src;
  }

  
function allSrc2() {
    var src = [];
    var imgs =document.getElementsByTagName('strong');
    for (var i=0, iLen=imgs.length; i<iLen; i++) {
      src[i] = imgs[i].innerText;
    }
    return src;
  } 

  function allSrc3() {
    var src = [];
    var imgs = document.getElementsByTagName('p');
    for (var i=0, iLen=imgs.length; i<iLen; i++) {
      src[i] = imgs[i].innerText;
    }
    return src;
  }