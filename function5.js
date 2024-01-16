/*let student1 ={
    name:"reena",
    roll:45,
    fees:234234,
    marks:344
}

let student2 ={
    name:"tina",
    roll:42,
    fees:234234,
    marks:341
    
}

let getInfo = function(a,b,c,d){
                    console.log(a,b,c)
                    console.log(this)
                    console.log(this.name+"--"+this.roll+"--"+this.fees+"--"+this.marks );
                }
// getInfo() 

getInfo([1,2,3,4],"hindi", "english","maths")

getInfo.call(student1,[1,2,3,4],"hindi", "english","maths")
getInfo.apply(student2,[[1,2,34],"hindi1", "english1","maths1"])

// let getInfoSt1 = getInfo.bind(student1)
// let getInfoSt2 = getInfo.bind(student2)
// getInfoSt1()
// getInfoSt2()*/

// call back function//
function dosomething(fn){
    console.log("hello world")
    fn();
}
function eat(){
    console.log("lets eat something")
return 12;
}
function read(){
    console.log("i read lot of books")}
    dosomething(eat)
    dosomething(read)
    dosomething(eat())
    

