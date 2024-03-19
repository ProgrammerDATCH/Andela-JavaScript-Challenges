function formatArray(arr) {
    let result = { females: {}, males: {} };

    arr.forEach(person => {
        let [fullName, age, gender] = person.split(', ');
        let [firstName, secondName] = fullName.split(' ');

        let personInfo = { 'second-name': secondName, age: parseInt(age) };

        if (gender === 'female') {
            result.females[firstName] = personInfo;
        } else if (gender === 'male') {
            result.males[firstName] = personInfo;
        }
    });

    return result;
}

let people = [
    "David Shema, 23, male",
    "Diane Mimi, 21, female",
    "Dodos deck, 21, male"
];

console.dir(formatArray(people));