const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for(let i=0; i<data.length; i++){
    if(data[i]==="developer"){
      console.log(data[i]);
      console.log("Here are the Developers")
    }
  }
}

// 2. Add Data
function addData() {
  
}

// 3. Remove Admins
function removeAdmin() {}

// 4. Concatenate Array
function concatenateArray() {}

// 5. Average Age
function averageAge() {
  let ans=0;
  for(let i=0;i<data.length; i++){
     ans = ans + data[i].age; 
  }
  console.log("Average Age in the array is ==>"+ ans/data.length);
}

// 6. Age Check
function checkAgeAbove25() {
  for(let i=0; i<data.length; i++){
    if(data[i].age>=25){
      console.log(data[i]);
    }
  }
}

// 7. Unique Professions
function uniqueProfessions() {}

// 8. Sort by Age
function sortByAge() {}

// 9. Update Profession
function updateJohnsProfession() {}

// 10. Profession Count
function getTotalProfessions() {}
