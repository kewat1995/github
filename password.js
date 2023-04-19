const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/"

// ------selector-------

const passBox = document.getElementById('pass-box')
const totalChar = document.getElementById('total-char')
const upperInput = document.getElementById('upper-case')
const lowerInput = document.getElementById('lower-case')
const numberInput = document.getElementById('number')
const symbolInput = document.getElementById('symbol')



const  getRandomData = (dataSet) =>{
	return dataSet[Math.floor(Math.random() * dataSet.length)]
}
const generatPassword =(password ="") => {
	if (upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
    	password +=getRandomData(lowerSet)
    }
    if (numberInput.checked) {
    	password +=getRandomData(numberSet)
    }
    if (symbolInput.checked) {
    	password +=getRandomData(symbolSet)
    }
    if (password.length<totalChar.value) {
    	return generatPassword(password)
    }

passBox.innerText =truncareString(password,totalChar.value);
}
generatPassword();

document.getElementById('btn').addEventListener(
	"click", function(){
generatPassword();
	})

function truncareString(str,num){
    if(str.length>num){
        let subStr= str.substring(0,num);
        return subStr;
    }
    else{
        return str;
    }
}


