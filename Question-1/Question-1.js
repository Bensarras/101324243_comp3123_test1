const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
const lowerCaseWords = (array) => {
    return new Promise((resolve, reject) => {
        resolve (array.filter(word => typeof word === 'string').map(word => word.toLowerCase()));


    });
}
lowerCaseWords(mixedArray)
    .then((result) => console.log(result))


    
