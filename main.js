function getRandomPassword(){
    const alph = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890'.split('')
    // const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
    // const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // const nums = '0123456789'
    // let result = getRandomPassword()
    // let logic = false
    let n = document.getElementById('input').value
    let password = []
    if(n>20){
        password.push('Too long password(max length - 20)')
    }else{
        for(let i = 0;i<n;i++){
        password.push(alph[Math.floor(Math.random()*(alph.length-1))])
        }
    }
    return document.getElementById('result').innerHTML = password.join('')
}

// for(let i = 0;i<result.length;i++){
//     logic = false
//     if(nums.includes(result[i])){
//         logic = true
//         break
//     }
// }

// for(let i = 0;i<result.length;i++){
//     logic = false
//     if(lowerCaseLetters.includes(result[i])){
//         logic = true
//         break
//     }
// }

// for(let i = 0;i<result.length;i++){
//     logic = false
//     if(upperCaseLetters.includes(result[i])){
//         logic = true
//         break
//     }
// }

// if(logic === true){
//     console.log(result.join(""));
// }else{
//     console.log('Try again');
// }


