// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then,

// (P − 1)! + 1
// divided by
// P ∗ P
 
// should give a whole number, where P! is the factorial of P.

// Your task is to create a function that returns true if the given number is a Wilson prime and false otherwise.

let wilsonPrimeNumber(p){
    if(a === p){
        return true;
    }else{
        return false;
    }
}

// Solution

function amIWilson(p) {
    return p === 5 || p === 13 || p === 563
}

// Another

function amIWilson(p) {
    p = BigInt(p)
    return ((factorial(p - 1n)) + 1n) % (p * p) == 0n
  }
  function factorial(x) {
    if (x <= 1n) {
      return 1n
    }
    return x * factorial(x - 1n)
}

// Another

function factorial(x) {
    if (x < 0n) return NaN
    if (x <= 1n) return 1n
    return x * factorial(x - 1n)
}

function amIWilson(p) {
    p = BigInt(p)
    return !((factorial(p - 1n) + 1n) % (p * p))
}