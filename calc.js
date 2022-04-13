let buttonElement = document.querySelectorAll('.btn')
let textField = document.getElementById('view')
let trigBtns = document.querySelectorAll('.trigBtn');
let resultField = document.getElementById('resultContainer')
let results = document.getElementById('solve')
let operatorBtns = document.querySelectorAll('.operator')
let numBtn = document.querySelectorAll('.btn2')
 let clearBtn = document.getElementById('clear')
 let delBtn = document.getElementById('delete')
 let rad =  document.getElementById('Rad')
 let deg =  document.getElementById('deg')
 let factorial =  document.getElementById('fact')
 let squareBtn = document.getElementById('square')
 let powerBtn = document.getElementById('power')
 let sqrtBtn = document.getElementById('sqrt')
 let rootBtn = document.getElementById('root')
 let inverseBtn = document.getElementById('inverse')
 let storageBtn = document.getElementById('storage')
 let hisBtn = document.getElementById('history')
 let percentBtn = document.getElementById('percent')
 let ansBtn = document.getElementById('ans')
 
 let select = document.querySelector('.select')
 
// query selectorall add event listener to only the first button element
// we can use for loop to iterate through all the button element
numBtn.forEach(function (btns) {
    numBtn = btns.innerText
    btns.addEventListener('click', function (event) {
        textField.value += event.target.innerText
    })
})
buttonElement.forEach(function (btn) {
    buttonElement = btn.innerText
    btn.addEventListener('click', function (event) {
        console.log(event.target.innerText);
        
        
        textField.value += event.target.innerText
    
        })
        
    })
    trigBtns.forEach(function (trigBtn) {
        rad.addEventListener('click', function () {
            select.innerText ="rad"
            
        })
        deg.addEventListener('click', function () {
            
                
                select.innerText ="deg"
            
            
        })
        trigBtn.addEventListener('click', function (event) {
            
            if (event.target.innerText === 'Sin' && select.innerText == "Rad") {
                resultField.value =Math.sin(textField.value) 
                console.log( resultField.value);
            }
            else if (event.target.innerText === 'Sin'  && select.innerText =="deg") {
                resultField.value =Math.sin(textField.value*(Math.PI/180)) 
            }
            else if (event.target.innerText === 'Tan' && select.innerText == "Rad") {
                resultField.value =Math.tan(textField.value) 
            }
            else if (event.target.innerText === 'Tan'  && select.innerText =="deg") {
                resultField.value =Math.tan(textField.value*(Math.PI/180)) 
            }
            else if (event.target.innerText === 'Cos' && select.innerText == "Rad") {
                resultField.value =Math.cos(textField.value) 
            }
            else if (event.target.innerText === 'Cos'  && select.innerText =="deg") {
                resultField.value =Math.cos(textField.value*(Math.PI/180)) 
            }
            else if (event.target.innerText === 'asin' && select.innerText == "Rad") {
                resultField.value =Math.sin(textField.value) 
            }
            else if (event.target.innerText === 'asin'  && select.innerText =="deg") {
                resultField.value =Math.asin(textField.value*(Math.PI/180)) 
            }
            else if (event.target.innerText === 'atan' && select.innerText == "Rad") {
                resultField.value =Math.asin(textField.value) 
            }
            else if (event.target.innerText === 'atan'  && select.innerText =="deg") {
                resultField.value =Math.atan(textField.value*(Math.PI/180)) 
            }
            else if (event.target.innerText === 'acos' && select.innerText == "Rad") {
                resultField.value =Math.atan(textField.value) 
            }
            else if (event.target.innerText === 'acos'  && select.innerText =="deg") {
                resultField.value =Math.acos(textField.value*(Math.PI/180)) 
            }
            else if (event.target.innerText === 'Ln' ) {
                resultField.value =Math.log(textField.value) 
            }
            else if (event.target.innerText === 'sinh' ) {
                resultField.value =Math.sinh(textField.value) 
            }
            else if (event.target.innerText === 'Log' ) {
                resultField.value =Math.log10(textField.value) 
            }
            else if (event.target.innerText === 'cosh' ) {
                resultField.value =Math.cosh(textField.value)
            }
            else if (event.target.innerText === 'tanh' ) {
                resultField.value =Math.tanh(textField.value)
            }
            else if (event.target.innerText === 'Ln' ) {
                resultField.value =Math.LN2(textField.value) 
            }
            else if (event.target.innerText === 'hyp' ) {
                let valueEnt = prompt('enter a value')
                resultField.value =Math.hypot(textField.value , valueEnt) 
            }
            else if (event.target.innerText === 'Exp' ) {
                resultField.value =Math.exp(textField.value) 
            }
            
        })
        
    })
    
    
    
operatorBtns.forEach(function (operatorBtn) {
    operatorBtn.addEventListener('click' , function (event) {
        if (event.target.innerText === "+") {
            
            textField.value += "+"
            console.log(textField.innerText);
        } 
        else  if (event.target.innerText === 'X') {
            
            textField.value += "*"
        }
        else  if (event.target.innerText === '/') {
            
            textField.value += "/"
        }
        else  if (event.target.innerText === '-') {
            
            textField.value +="-"
        }
        else  if (event.target.innerText === 'mod') {
            
            textField.value +="%"
        }
        else  if (event.target.innerText === 'PI') {
            
            textField.value +="PI"
            resultField.value = Math.PI
        }
        else  if (event.target.innerText === '%') {
            
           
            resultField.value = eval(textField.value/100)
        }
        
        
        
        
    })
    
})

results.addEventListener('click' , function () {
    resultField.value = eval(textField.value)
    console.log( resultField.value);
   
    // if (textField.value ="") {
    //     resultField.value=""
    // }
})
delBtn.addEventListener('click', function () {
    var text = textField.value
    textField.value =  text.substring(0,textField.value.length-1)
})
clearBtn.addEventListener('click' , function () {
    textField.value = ""
    resultField.value= ""
})
factorial.addEventListener('click', function () {
    console.log(factorial.innerText);
    if (factorial.innerText ==="X!") {
        
        let text= textField.value
        let multiplier =1
        for (let i = text; i >= 1; i--) {
    
            multiplier *= i
    }
        
    resultField.value= multiplier
    console.log(resultField.value);
    textField.value += "!"
    }
})

squareBtn.addEventListener('click', function () {
    if (squareBtn.innerHTML.includes('X' && '2')) {
        resultField.value = Math.pow(textField.value,2)
        textField.value+="**2"
    }
})
powerBtn.addEventListener('click', function () {
    if (powerBtn.innerHTML.includes('X' && 'y')) {
        let valueEnt = prompt('enter a value')
        resultField.value = Math.pow(textField.value,valueEnt)
        textField.value+="**"+ valueEnt
    }
})
sqrtBtn.addEventListener('click', function () {
    if (sqrtBtn.innerHTML.includes('X' && '2')) {
        resultField.value = Math.sqrt(textField.value)
        textField.value+=''
    }
})
rootBtn.addEventListener('click', function () {
    if (rootBtn.innerHTML.includes('X' && 'y')) {
        let valueEnt = prompt('enter a value')
        let solve = eval(1/valueEnt)
        resultField.value = Math.pow(textField.value,solve)
        textField.value+='**' + solve
    }
})
inverseBtn.addEventListener('click', function () {
    if (inverseBtn.innerHTML.includes('X' && '1')) {
        resultField.value = eval(1/textField.value)
        
    }
})

storageBtn.addEventListener('click', function () {
    let prevObj=""
    let store =localStorage.getItem('store')
    if (store === null) {
        prevObj =[]
    }else{prevObj = JSON.parse(store)}
    let myObj ={
        title: textField.value,
        texts: resultField.value
    }
    prevObj.push(myObj)
    localStorage.setItem('storage', JSON.stringify(prevObj))
    console.log(prevObj);
  

})
ansBtn.addEventListener('click', function () {
    textField.value = resultField.value
})
