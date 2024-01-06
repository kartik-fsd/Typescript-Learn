console.log("hello world");
let a : string = "sss";

let num : number = 18;

let isTrue :boolean = false ;

let id :any;

let tup:[string,number] = ["BCA" ,2022];

enum Color{Red="red" , Green="green" ,Black="black"};
enum Value{one=1 ,two,three}
let color:Color =Color.Red;
let val:Value =Value.two;

console.log("String : ",a);
console.log("Number : ",num);
console.log("Boolean : ",isTrue);
console.log("Type : ",typeof(id));
console.log("Tuple : ",tup);
console.log("Enum : ",color);
console.log("Enum : ",val);


let func:Function =() =>{
    console.log("This is afunction");
}

function fullName(firstName:string,LastName:string):string{
    return firstName+LastName;
}
function Details(Name:string ,age :number){
    console.log("Name : ",Name," Age : ",age);
}

let Fname:string = fullName("Kartik" , "Shettar");
Details(Fname , 22);

let objLiteral :{name :string , age:number} = {name:"Literal" , age:17};

type TypeAnno = {name:string ,age:number} ;
let objTypeAnno : TypeAnno = {name:"Annotaion type" ,age:88};

interface Address{street :string , city :string};
interface Person {name :string , age :number ,address:Address};
let person :Person = {name:"Interfaces" , age:19 ,address:{street:"5th cross",city:"hubli"}};

console.log("Object literal :",objLiteral);
console.log("Type annotaion :",objTypeAnno);
console.log("Interface using Dot",person.age);
console.log("Interface using bracket notation",person['name']);
console.log("Nested obj ",person);



let grade : number | string ;
console.log("Union types can be used to combine different data types :",grade = 90 , grade = 'A');


console.log("interscetion type");
interface CanView {
    view : ()=> void;
}

interface CanEdit {
    edit :()=> void;
}

interface CanDelete {
    delete :()=> void;
}

type editor = CanEdit & CanView;
type admin = CanDelete & CanEdit & CanView;
type viewer = CanView;

let editUser : editor = {
    edit(){
        console.log("Editing...");
    },
    view(){
        console.log("Viewing...");
    }
}

let adminUser : admin = {
    edit(){
        console.log("Editing...");
    },
    view(){
        console.log("Viewing...");
    },
    delete(){
        console.log("Deleteing...");
    }
}

let viewUser :viewer = {
    view() {
        console.log("Viewing...")
    },
}

viewUser.view();
console.log( adminUser );
editUser.edit();


console.log("Union and intersection type together");

type a = {name : string};
type b = {isLearn : boolean};
type c = a & b;
let obj : c = {
    name:"Union and intersection",
    isLearn : true
}

console.log("Union and intersection :",obj);

interface Product {id:number , Price :number , name:string};
interface Clothing extends Product {size:string};
interface Book extends Product {author:string};
interface Electronic extends Product{voltage :number};

type ElectronicProduct = Product & Electronic;
type BookProduct  =  Product & Book;
type ClothingProduct = Product & Clothing;

let products:(ElectronicProduct|BookProduct|ClothingProduct) []= [
    {id:1, name:"Tube light",Price:200 ,voltage:120},
    {id:2, name:"Novel",Price:400,author:"Chethan Bhagu"},
    {id:3,name:"t-Shirt",Price:1200 ,size:"sm"}
];

function filterElectronicProduct(products:Product[]):ElectronicProduct[]{
    return products.filter((product)=>'voltage' in product)  as ElectronicProduct[];
}

function filterClothingProduct(products:Product[]):ClothingProduct[]{
    return products.filter((product)=>'size' in product) as ClothingProduct[];
}

function filterBookProduct(products:Product[]):BookProduct[]{
    return products.filter((product)=>'author' in product) as BookProduct[];
}

console.log("Union and intersection together",filterBookProduct(products));
console.log(filterClothingProduct(products));
console.log(filterElectronicProduct(products));