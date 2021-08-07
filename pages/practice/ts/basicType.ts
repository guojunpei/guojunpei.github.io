//boolean
let isDone: boolean = false;

//number
let myAge: number = 33;

//string
let myName: string = "Guo Junpei";

let mySpeach: string = `my name is ${myName}, my age is${myAge}...`;

//array
let numberList: number[] = [1, 2, 3];

let stringList: string[] = ["a","b","c"];

let objectList: object[] = [{a:1},{b:2},{c:3}];

//tuple
let x: [string, number];

x = ["Tim",8];
//ok

//x = [9,9];
//erro

//x[2]="man";
//erro!?

//enum
enum Color {Red,Green,Blue}
//enum Color {Red=1,Green,Blue}
//enum Color {Red=1,Green=2,Blue=3}
//enum Color {Red=1,Green=2,Blue=4}

let myFavourateColor:Color = Color.Blue;
//let myFavourateColor:Color = Color[1];

//any
let notSure: any = 4;
notSure = "maybe a tring";
notSure = true;

let mixList: any[] = [1,"a",false];

//void
function notReturn():void{
    console.log("finsh!")
}

//null
let n: null = null;

//undefind
let u: undefined = undefined;

//never

//object
let myObject:object = {a:1,b:"b"};

//as
let unknow:any = "in fact,this is a string!";
let stringLength:number = (<string>unknow).length;
let newStingLength:number = (unknow as string).length;