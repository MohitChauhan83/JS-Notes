// call by value//declarative function
/*function sum(a,b){
    a=a+10;
    console.log(a)
}
let p=90
let q=100
sum(q,p)
console.log(q)
// call by refrence//
/*function sum(arr){
    arr[0]=90
    arr[1]=80
    arr[2]=60
    console.log(arr)
}
let brr=[1,2,3,4,5,6]
sum(brr)
console.log(brr)*/
// anonomus function// expression function
/*let print=function(){
    console.log("Mohit")
}
print();
//nomous function//
let greeting=function abc(){
    console.log("happy new year 2024")

}
greeting();
//abc()// not called directly//


/*let add =(a,b)=> a+b
let sum1=add(12,13);
console.log(sum1)

let add2=(a,b)=>{
    return a+b}
    let sum2=add2(12,13);
    console.log(sum2)*/
// object arrow function this key combine window object
let obj={
    name :"tinka",
    phone: "630958468",
    getInfo:()=>{
        console.log(this)
        console.log(this.name)
        console.log(this.phone)
    }
}

obj.getInfo();
// object simple function current object
let obj2={
    name :"tinka",
    phone: "630958468",
    getInfo: function (){
        console.log(this)
        console.log(this.name)
        console.log(this.phone)
    }
}

obj2.getInfo();