const result = document.getElementById('result')
const submit = document.getElementById('submit')
// function binary (e){
//     e.preventDefault()

//     let num = document.getElementById('number1').value
//     if(num === ''){
//         alert('Wrong')
//     }else if(num < 0 ){
//         alert('wrong')
//     }else{
//         result.style.visibility = "visible"
//     }

//     // let binaryNumber = Number(num).toString(2)
//     // result.innerHTML = binaryNumber
// }
// submit.addEventListener('click',binary)

function BmICalculator(e){
    e.preventDefault()
    let num = document.getElementById('number1').value
    let num1 = document.getElementById('number2').value

    if((num && num1 ) === ''){
        alert('Please Provide Data')
    }else if ((num && num1  ) < 0 ){
        alert('Please Provide a Positive Number')
    }else{
        result.style.visibility = 'visible'
    }

    const height = Number(num1) / 3.2808 
    const value = (height * height).toFixed(2)
    console.log(value)
    
    // final Calculate 
    const number = Number(num) / value
    result.innerHTML = number.toFixed(3) 
    
    if (number < 18.5){
        // document.getElementById("Bmi").innerText = "Underweight"
        alert('UnderWight')


    }else if(number >= 18.5 && number <= 25){
        // document.getElementById('BMi').innerText = "Normal"
        alert('Normal')
    }else if(number >= 25 && number <= 30){
        // document.getElementById('BMi').innerText = "Obese"
        alert('Obese')
    }else if(number > 30){
        // document.getElementById('BMi').innerText = "Overweight"
        alert('OverWeight')
    }


}
submit.addEventListener('click',BmICalculator)
