// applying filters on this array
let people = [
    { name: "Alice", age: 25, city: "New York", profession: "Engineer" },
    { name: "Bob", age: 30, city: "San Francisco", profession: "Designer" },
    { name: "Charlie", age: 35, city: "Los Angeles", profession: "Teacher" },
    { name: "David", age: 28, city: "Chicago", profession: "Developer" },
    { name: "Eve", age: 22, city: "New York", profession: "Developer" },
    { name: "Frank", age: 40, city: "Miami", profession: "Manager" },
    { name: "Grace", age: 27, city: "New York", profession: "Engineer" },
    { name: "Hank", age: 32, city: "Seattle", profession: "Engineer" },
    { name: "Ivy", age: 29, city: "Chicago", profession: "Designer" },
    { name: "Jack", age: 33, city: "San Francisco", profession: "Teacher" }
  ];
let data = people.filter( (people) => people.city ==='New York' && people.profession === 'Engineer' );
//we will get data about only Engineers in NewYork.
console.log(data);

let techTeam = people.filter((people) => people.profession !== 'teacher' );
// A tech team may have developers,designers,managers,engineers but not teachers
console.log(techTeam);

let age = people.filter((people) => {
    return people.age < 28;
})
//Only the people under 28 years will appread in console.
console.log(age);