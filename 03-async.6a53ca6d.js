function o(o){const e={strawberry:"🍓",kiwi:"🥝 ",apple:"🍎"};return new Promise(((t,n)=>setTimeout((()=>t(e[o])),500)))}(async function(){try{console.time("aMakeSmoothie");const e=o("apple"),t=o("kiwi"),n=o("strawberry"),r=await Promise.all([e,t,n]);return console.log(r),r}catch(o){console.log("Ошибка"+o)}})().then((o=>console.log(o)));
//# sourceMappingURL=03-async.6a53ca6d.js.map
