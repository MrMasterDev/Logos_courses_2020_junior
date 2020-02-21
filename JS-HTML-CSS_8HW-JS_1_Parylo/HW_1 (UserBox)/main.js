let name = prompt('Write your name');
let mainH = prompt('Main div height');
let mainW = prompt('Main div width');
let mainBGC = prompt('Main div background color');
let smallH = prompt('Small div height');
let smallW = prompt('Small div width');
let smallBG = prompt('Small div background');

document.write(`<div style='width:${mainW}px; height:${mainH}px; background-color:${mainBGC}; display:flex; flex-flow: column wrap'><div style="height:${smallH}px; width:${smallW}px; background-image:url(${smallBG}); background-size:cover; margin-top:24px;"></div><span style="font-size:26px; font-style:bold; margin-top:28px;">Welcome, ${name}</span></div>`)