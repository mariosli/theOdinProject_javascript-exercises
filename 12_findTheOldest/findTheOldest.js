const findTheOldest = function(people) {
    const ages = []
    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath === undefined) {
            people[i].yearOfDeath = 2024;
        }
        ages.push(people[i].yearOfDeath - people[i].yearOfBirth);
        //console.log(people[i].name);
    }
    indexOfOldestPerson = ages.indexOf(Math.max(...ages));
    
    return people[indexOfOldestPerson];
};


// const people = [
//     {
//         name: "Carly",
//         yearOfBirth: 2018,
//       },
//       {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//       },
//       {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//       },
//   ]


// findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
