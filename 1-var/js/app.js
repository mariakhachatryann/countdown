"use strict";
// ստեղծում եք ֆունկցիա, որը կստանա երկու արգումենտ ՕՐ և ԱՄԻՍ, ըստ դրա գեներացնում եք հետհաշվարկի 
// ֆունկցիա թե քանի օր, ժամ, րոպե ու վայրկյան ա մնացել, որ նշված դեյթան հասնի, օրինակ եթե 
// նշեք 12, 31, պետք ա էս օրվանից սկսած մինչև դեկտեմբերի 31ը հետհաշվարկ գնա հետևյալ ֆորմատով

// ՕՐ, ԺԱՄ, ՐՈՊԵ, ՎԱՅՐԿՅԱՆ, սա պետք ա ֆռոնտում դնեք ու դինամիկ, այսինքն ֆռոնտում ի սկզբանե 
// ոչինչ պետք ա չլինի բացառությամբ 1 հատ դիվի, որի վրա կարող եք հավաքել մնացած լոգիկան

// ֆունկցիան պետք ա նաև ունենա ստուգում, որ եթե եկել հասել ենք էդ օրվան, ապա մինուսով չշարունակի 
// իրա գործողությունը, այսինքն կամ սաղ 0ներ դնի, կամ էլ գրի, որ վերջացել ա, ժող տնայինը էն PRACTICE
//  ֆոլդրի մեջ կանեք


const wrapper = document.querySelector("[data-wrapper]");
const h1 = document.querySelector("[data-header]");

document.addEventListener("DOMContentLoaded", () => {
  setInterval(function (m = 9, d = 19) {
    const start = new Date();
    const end = new Date(2022, m-1, d, 21, 36, 0);

    const day = Math.floor((end - start) / 1000 / 60 / 60 / 24);
    const hour = Math.floor((end - start) / 1000 / 60 / 60) % 24;
    const minute = Math.floor((end - start) / 1000 / 60) % 60;
    const second = Math.floor((end - start) / 1000) % 60;

    h1.textContent = `Countdown ends in ${day} : ${hour} : ${minute} : ${second}`;

    if ((end - start) <= 0) {
      h1.textContent = `Countdown ended 0 : 0 : 0 : 0`;
    }
  }, 1000);
});