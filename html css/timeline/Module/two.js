const sayHello = ()=>{
    return "Hello Ujjal, What's going on?"
}

const age = 40;
const cgpa = 3.44;

// exports.ageOfme = age;
// exports.hello = sayHello;
// exports.cgpa = cgpa;

module.exports = {
    age,
    cgpa,
    sayHello,
}