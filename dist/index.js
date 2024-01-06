"use strict";
console.log("hello world");
let a = "sss";
let num = 18;
let isTrue = false;
let id;
let tup = ["BCA", 2022];
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Black"] = "black";
})(Color || (Color = {}));
;
var Value;
(function (Value) {
    Value[Value["one"] = 1] = "one";
    Value[Value["two"] = 2] = "two";
    Value[Value["three"] = 3] = "three";
})(Value || (Value = {}));
let color = Color.Red;
let val = Value.two;
console.log("String : ", a);
console.log("Number : ", num);
console.log("Boolean : ", isTrue);
console.log("Type : ", typeof (id));
console.log("Tuple : ", tup);
console.log("Enum : ", color);
console.log("Enum : ", val);
let func = () => {
    console.log("This is afunction");
};
function fullName(firstName, LastName) {
    return firstName + LastName;
}
function Details(Name, age) {
    console.log("Name : ", Name, " Age : ", age);
}
let Fname = fullName("Kartik", "Shettar");
Details(Fname, 22);
let objLiteral = { name: "Literal", age: 17 };
let objTypeAnno = { name: "Annotaion type", age: 88 };
;
;
let person = { name: "Interfaces", age: 19, address: { street: "5th cross", city: "hubli" } };
console.log("Object literal :", objLiteral);
console.log("Type annotaion :", objTypeAnno);
console.log("Interface using Dot", person.age);
console.log("Interface using bracket notation", person['name']);
console.log("Nested obj ", person);
let grade;
console.log("Union types can be used to combine different data types :", grade = 90, grade = 'A');
console.log("interscetion type");
let editUser = {
    edit() {
        console.log("Editing...");
    },
    view() {
        console.log("Viewing...");
    }
};
let adminUser = {
    edit() {
        console.log("Editing...");
    },
    view() {
        console.log("Viewing...");
    },
    delete() {
        console.log("Deleteing...");
    }
};
let viewUser = {
    view() {
        console.log("Viewing...");
    },
};
viewUser.view();
console.log(adminUser);
editUser.edit();
console.log("Union and intersection type together");
let obj = {
    name: "Union and intersection",
    isLearn: true
};
console.log("Union and intersection :", obj);
;
;
;
;
let products = [
    { id: 1, name: "Tube light", Price: 200, voltage: 120 },
    { id: 2, name: "Novel", Price: 400, author: "Chethan Bhagu" },
    { id: 3, name: "t-Shirt", Price: 1200, size: "sm" }
];
function filterElectronicProduct(products) {
    return products.filter((product) => 'voltage' in product);
}
function filterClothingProduct(products) {
    return products.filter((product) => 'size' in product);
}
function filterBookProduct(products) {
    return products.filter((product) => 'author' in product);
}
console.log("Union and intersection together", filterBookProduct(products));
console.log(filterClothingProduct(products));
console.log(filterElectronicProduct(products));
//# sourceMappingURL=index.js.map