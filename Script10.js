console.log("Mohit")
/*let sum=0;
let arr=[20,false , 60,"mohit",[20,40,false,"chauhan"]]
for(let i=0; i<arr.length;i++ ){
    if(typeof arr[i]=="number"){
        sum=sum+arr[i]
    }
    else if(typeof arr[i]=="object"){
     for(let num of arr[i]){
       if(typeof num == 'number') {
        sum=sum+num

       }

    }
    }
}
    console.log(sum)
*/
//method 2nd//
let sum=0;
let arr=[20,false , 70,"mohit",[30,40,false,"chauhan"]]
for(let i=0; i<arr.length;i++ ){
    if(typeof arr[i]=="number"){
        sum=sum+arr[i]
    }
    else if(typeof arr[i]=="object"){
     for(let j=0; j<arr.length; j++){
       if(typeof arr[j] == "number") {
        sum=sum+arr[j]

       }

    }
    }
}
    console.log(sum)

