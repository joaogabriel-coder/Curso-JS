let num = [5,4,3,4,6]
num.push(1)
num.sort()
/*console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)*/

/*for(let c = 0; c<num.length;c++){
    console.log(num[c])
}*/

for(let c in num){
    console.log(num[c])
}

let a = num.indexOf(1)
console.log(a)