// Basic Types

let id:number = 55;
let employe:string = 'Gopalakrishnan';
let isEmpPresent:boolean = true;
let address : any = '2424';      // if we declare type as any we can give any type to that variable.

// Array

let ids : number []= [1,2,3,4,5];
 ids.push(4);

 let x1 : any [] = [1,'efefe',true]

 // Tuple

 let employee : [number,string,boolean] = [ 12,'GK',true];

 let employees : [number,string,boolean] [] = [
    [12,'GK',false],
    [13,'SGK',true],
    [14,'SK',true]
 ]

 // Union

 let eid : string | number| boolean;

 eid='SGK',
 eid = true

 // Enum

 enum direction1 {
    up,
    down,
    left,
    right
 }

 console.log(direction1.left);

enum direction2 {
    up='up',
    down = 'down',
    left = 'left',
    right = 'right'
}
console.log(direction2.right);

// Object

let user : {id:number,name:string} ={
    id:2,
    name:'Gopal'
}

type userType = {
    id:number,
    name:string
}

let users : userType ={
    id:2,
    name:'Gopal'
}

// Type Assert
 let x3 : any = "24"
//  let empId = x3 as string;
 let  empId = <string> x3;

 // Function
  function addd (a :number, b:number):number{
    return a+b;
  }

  console.log(addd(23,3));

  // Interface

  interface userType1{
    readonly id : number;
    name: string;
    age ? : number
  }

  let user1 : userType1 = {
    id:12,
    name:'Gopalakrishnan'
  }

//   user1.id = 5;

interface Mathfunc {
    (x:number,y:number):number
}

const add : Mathfunc = (x:number,y:number)=> x + y

// Class 

interface PersonType {
    id:number
    name:string
    register() :string
}

 class Person implements PersonType {
    id:number
    name:string

    constructor(id:number,name:string){
        this.id = id,
        this.name = name
    }

    register () {
        return `${this.name} is registered now`
    }
 }

 const names = new Person(1,'Gopal')

//  console.log(names.register());

class Employee extends Person {
    position : string;

    constructor (id:number,name:string,position:string){
        super(id,name)
        this.position = position
    }
}

const emp1 = new Employee ( 5,'Gk','Developer')

console.log(emp1.name);

// Generics

function getArray(items:any[]):any[]{
    return new Array().concat(items);
}

let numArray = getArray([1,2,3,4,5,6])
let strArray = getArray(['dfs','wsfsf','dfsd'])


function getArrays<T>(items:T[]):T[]{
    return new Array().concat(items);
}

let numArrays = getArrays<number>([1,2,3,4,5,6])
let strArrays= getArrays<string>(['dfs','wsfsf','dfsd'])

numArrays.push(123)