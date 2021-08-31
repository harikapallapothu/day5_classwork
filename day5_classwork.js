

const students = [{ name: "Adhi", gender: "male" },
{ name: "Ahamed", gender: "male" },
{ name: "Rutika Kadam", gender: "female" },
{ name: "Priyadharsini", gender: "female" },];
 
 var female = students.filter(students=>students.gender =='female')
 console.log(female.map(value=>value.name));
 var names = students.map(students=>students.name);
 console.log(names.filter(value=>value.charAt(0)=='A'));
var male = students.filter(students=>students.gender =='male')
console.log(male.length);
