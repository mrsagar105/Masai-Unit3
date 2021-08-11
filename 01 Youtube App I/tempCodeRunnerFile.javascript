let str = "jashdsjadas jsad sajdh  sdhasjhdas 12-03-1996 12-31-3442 -  -asda";

let obj = {};
let count = 0;
for(let i = 0; i < str.length; i++) {
  if(str[i] == '-' && str[i+3] == '-' && (typeof Number(str.slice(i+4, i+8))) == Number) {
    let year = str.slice(i+4, i+8)
    
    if(obj[year] == undefined) {
      obj[year] = 1;
    }
  }
}

console.log(Object.keys(obj).length);