
function validAddEven(word) {
    let output = '';
    for (let i = 0; i < word.length; i++) {
        if (i % 2 !== 0) {

            output = output + word[i].toUpperCase()
        } else {
            // console.log(output + word[i]);
            output = output + word[i];
        }

    }
    console.log(output)
}
validAddEven("javascript");
validAddEven("hello");
validAddEven("testleaf");
validAddEven("automation");


