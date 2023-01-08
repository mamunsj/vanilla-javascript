let companies = [
  { name: "company one", category: "Finance", start: 1950, end: 2012 },
  { name: "company two", category: "Accountant", start: 1983, end: 2018 },
  { name: "company three", category: "Retail", start: 1990, end: 2011 },
  { name: "company four", category: "Auto", start: 1923, end: 2032 },
  { name: "company five", category: "Retail", start: 1963, end: 2002 },
  { name: "company six", category: "Technology", start: 1974, end: 2014 },
];

let categories = companies.forEach((player) => console.log(player.category));

//   let sortedCompanies = companies.sort((a,b)=>  a.start -b.start
//   )
//   console.log(sortedCompanies)

let sortedCompanies = companies.sort((a, b) => {
  if (a.start > b.start) {
    return 1;
  } else {
    return -1;
  }
});
console.log(sortedCompanies);

let filteredCompany = companies.filter((company) => {
  if (company.category == "Retail") {
    return -1;
  }
});
console.log(filteredCompany);

let endDate = companies.map((company) => company.end);
console.log(endDate);

companies.forEach((company) => console.log(company.end - company.start));

let reduceAge = companies.reduce((prev, curr) => {
  return (prev += curr.end - curr.start);
},0);
console.log(reduceAge);

