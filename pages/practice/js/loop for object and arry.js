const ob = {a: 1, b: 2, c: 3};
const li = ["a1","a2","a3"];

////for...in
for (let p in ob){
    console.log(`boj.${p} = ${ob[p]}`);
}
//expected output:obj.a = 1
//expected output:obj.b = 2
//expected output:obj.c = 3

for (const p in obj) {
    console.log(p);
  }
//expected output:a
//expected output:b
//expected output:c
////

////for...of
for (let e of li){
    console.log(e);
}
//expected output:"a1"
//expected output:"a2"
//expected output:"a3"
////

////for
let st = "";
for (let i = 0; i < 9; i++){
    st = st + i;
}
console.log(st);
//expected output:"0123456789"
////

////Array.prototype.map()
let nLi = li.map(x=>x+"n");
console.log(nLi);
//expected output:["a1n", "a2n", "a3n"]
////

////Object.keys()
let objectKeysArry = Object.keys(ob);
console.log(objectKeysArry);
//expected output:["a", "b", "c"]
////

////Object.values()
let objectValuesArry = Object.values(ob);
console.log(objectValuesArry);
//expected output:[1, 2, 3]
////

////Object.entries()
let objectentriesArry = Object.entries(ob);
console.log(objectentriesArry);
//expected output:[["a",1], ["b",2], ["c",3]]
////