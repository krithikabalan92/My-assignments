/*function checkGrade (){
return "hikeerthi"
}
console.log(checkGrade());*/


function checkGrade(value) {
if(value <0 || value>100){
    console.log("ivalid Mark");
    return;// used to stop the condition
} 
if (value >=90 ){
    console.log("Grade A");
}else if (value >=80){
    console.log("Grade B");
}else if (value >=70){
    console.log("Grade C");
}else if (value >=60){
    console.log("Grade D");
}else if (value >=50){
    console.log("Grade E");
}else {
    console.log("Fail");
}

}
checkGrade(93);
checkGrade(80);
checkGrade(75);
checkGrade(63);
checkGrade(51);
checkGrade(12);
checkGrade(-5);
checkGrade(170);


