// Array Concatenation
const ages1 = [12,14,20,16];
const ages2 = [19,24,30,26];
const ages3 = [32,13,40,36];

//const allAges1 = ages1.concat(ages2).concat([5]).concat(ages3);

const allAges2 = [...ages1, ...ages2, 5, ...ages3];
console.log(allAges2);

// Array Max

const takaPoisa = [650, 450, 250];
const maximum = Math.max(...takaPoisa);
console.log(maximum);