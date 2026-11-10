//Accept number as inputvalue 

function givenNumber(value) {

    // 2. Handle negative numbers (treat negative numbers as not a palindrome)

    if (value < 0) {
        console.log("The nuber is not palindrome");
    } else {

        // Convert the number into a string (text) so we can look at its individual digits

        let orginalNumber = String(value);
        let reverseNumber = "";

        //Reverse the number using a loop (without built-in reverse)

        for (let i= orginalNumber.length - 1; i >= 0; i--) {
            reverseNumber += orginalNumber[i];
        }
        //Compare original number with the reversed number and display messag
        if (orginalNumber === reverseNumber) {
            console.log("The number is a palindrome");
        } else {
            console.log("The number is not a  palindrome");
        }
    }
}
givenNumber(121);
givenNumber(1331);
givenNumber(243);
givenNumber(10);
givenNumber(-134);
