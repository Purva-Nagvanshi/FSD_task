// Function using for number is prime or not

function Anynumber(num){
    if(num <= 1){
        return `${num} not a prime number`;
    }
    for(let i=2; i<= Math.sqrt(num); i++){
        if(num % i === 0){
            return `${num} not a prime number`;
        }
    }
    return `${num} is prime number`;
}


//Function using for reverse of string

function reverseString() {
    let input = "purva";   
    let reversed = input.split("").reverse().join("");

    console.log("Reverse String: " + reversed);
}

reverseString();


//Function using for specific chracter within a string

function countChar(str, char) {
  let count = 0;
  for (let c of str) {
    if (c === char) count++;
  }
  return count;
}

console.log(countChar("Niharika", "r")); 


//Function using for do while loop

function printCount(limit) {
  let count = 1;
   do {
     console.log("Count is: " + count);
     count++;
   } while (count <= limit);
}

printCount(10);
