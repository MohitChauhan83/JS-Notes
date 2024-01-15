/*let arr=[13,23,12,45,22,48,66,100]
for(let i=1; i<=arr.length; i++){
    if(arr[i]%2==0){
        console.log(arr[i])
    }e

}*/
/*let row=8
for(let i=1; i<=row; i++){
    /*for(let j=1; j<=i; j++){
        console.log(i)
    }
    console.log(" ")
}
let str="i";
console.log(str.repeat(i));}
for (let i=1; i<=8;i++){
    for(let j=0; j<=i; j++){
        console.log(i)
    }
    console.log(" ")
}*/
// largest number in array//
/*let large=0
let arr=[2,45,3,67,34,567,34,345,123]
for(let i=0; i<arr.length; i++){
    if(arr[i]<Math.max(arr[i])){
        large=large+arr[i]
}}
console.log(large)*/
// find dublicate//
/*let arr=[4,2,34,4,1,12,1,4]
let dup=[]; 
for(let i=0; i<=arr.length; i++){
    for(let j=i+1;j<=arr.length; j++ ){
        if(arr[i]==arr[j]){
            dup=arr[i]
            console.log(dup)
        }

    }

}*/
let row=2;
let colum=3;
let matrix=[];
let h=0
for(let i=1; i<row; i++){
matrix[i]=[];
for(let j=1; j<=colum; j++){
matrix[i][j]=h++;
}
}
console.log(matrix)


