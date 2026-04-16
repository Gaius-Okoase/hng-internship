// Leaving this script here to remind myself how I had to practice how to loop through an array
// of objects to find the index of an element by one of the properties of the objects
const country = [
        {a: 'b', c: 4},
        {a: 'f', c: 9},
        {a: 'j', c: 11},
        {a: "n", c: 3}
    ]
    let c = country[0].c
    for (let nation of country) {
        if (nation.c > c) {
            c = nation.c
            
        }
    }
    console.log(c);