const callAs="krithika balan";
let reverName="";
//Loop backwards from the last letter to the first letter
for (let i = callAs.length - 1; i>=0; i--){
//  Add each character to our new string
reverName += callAs[i];
}

console.log(reverName);