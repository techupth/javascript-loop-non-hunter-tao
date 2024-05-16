let companyName = "TechUp Thailand";
let reversedCompanyName = "";

for (let i = companyName.length-1;i>=0; i--) {
    console.log(companyName[i])
    reversedCompanyName = reversedCompanyName + companyName[i];
}

console.log(reversedCompanyName);
