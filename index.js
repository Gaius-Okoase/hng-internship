// Leaving this script here to remind myself how I had to practice how to loop through an array
// of objects to get the value of a field in the objects by the highest value of another field in the objects
const country = [
        {a: 'b', c: 20},
        {a: 'f', c: 119},
        {a: 'j', c: 43},
        {a: "n", c: 53}
    ]
    let c = country[0].c;    
    let a = country[0].a;
    for (let nation of country) {

        if (nation.c > c) {
            c = nation.c
            a = nation.a
        }
    }
    console.log(a);