/*console.log('mohit')
//sum of digit??//
let num=2568;
let sum=0;
while(num!=0){
    let digit=num%10;
  sum =sum+digit 

}
console.log(sum)
//reverse a num//
let num1=2588;
let rev=0;
while(num1!=0){
   let digit=num%10;
   rev=rev*10+digit;
   num1=Math.floor(num1/10)
}
console.log(rev)*/
let arr=[3,5,7,9,7,8,7]
let res;
for(let i=1; i<arr.length; i++){
  for(let j=i+1; j<arr.length;j++)
  if(arr[i]== arr[j]){
  res=res+arr[i]
  break; 
  }
  
