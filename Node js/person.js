// const person = {
//     name: "Mamunur Rashid Ujjal",
//     age:23,
//     studeis: "University of Dhaka"
// }

// // console.log(person)

// module.exports.ujjal= person;


class People {
    constructor(name, age, dept){
        this.name = name;
        this.age = age;
        this.dept = dept;
    }

    greetings(){
        console.log(`I am ${this.name}. I'm ${this.age} years old and I'm studying at ${this.dept} dept`)
    }
}

module.exports = People;