const upperset="ASDFGHJKLQWERTYUIOPZXCVBNM"
const lowerset="asdfghjklqwertyuiopzxcvbnm"
const numberset="1234567890"
const symbolset="~!@#$%^&*()_+/"

const passwordbox=document.getElementById("pass-box")
const totalchar=document.getElementById("total-char")
 const upperinput=document.getElementById("upper-case")
 const lowerinput=document.getElementById("lower-case")
 const numberinput=document.getElementById("numbers")
 const symbolinput=document.getElementById("symbols")

const getRandomData = (datset) =>{
    return datset[Math.floor(Math.random() * datset.length)]
}

const generatePassword = (Password="") =>{
    if(upperinput.checked){
        Password+=getRandomData(upperset)
    }
    if(lowerinput.checked){
        Password+=getRandomData(lowerset)
    }
    if(numberinput.checked){
        Password+=getRandomData(numberset)
    }
    if(symbolinput.checked){
        Password+=getRandomData(symbolset)
    }

    if(Password.length<totalchar.value){
       return generatePassword(Password)
    }
    document.getElementById("pass-box").innerText=truncateString(Password,totalchar.value)
}

document.getElementById("btn").addEventListener("click",function(){
    generatePassword()
})

generatePassword()

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}