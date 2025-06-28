const calculate=()=>{
    let bmi=document.getElementById("bmi")
    let bmiword=document.getElementById('bmiword')
    if(weight.value){
        if(height.value){
            bmi.style.color="black"
            bmiword.style.color="black"
            bmi.innerHTML=Math.round(((weight.value)/(height.value**2))*10)/10
            bmiword.innerHTML=" &nbsp;&nbsp;BMI"
            let bmiIndex=(weight.value)/(height.value**2)
            if(bmiIndex<18.5){
                condition.innerHTML="Underweight"
                condition.style.color='red'
            }
            if(bmiIndex>=18.5 && bmiIndex<=24.9){
                condition.innerHTML="Normal Weight"
                condition.style.color='green'
            }
            if(bmiIndex>=25 && bmiIndex<=29.9){
                condition.innerHTML="Overweight"
                condition.style.color='red'
            }
            if(bmiIndex>=30 && bmiIndex<=35){
                condition.innerHTML="Obese"
                condition.style.color='red'
            }
            if(bmiIndex>35){
                condition.innerHTML="Morbid Obesity"
                condition.style.color='red'
            }
        }
        else{
            height.style.borderColor="red"
            alert('Enter valid Height') 
        }
    }
    else{
        if(height.value){
            weight.style.borderColor="red"
            alert('Enter valid Weight') 
        }
        else{
            weight.style.borderColor="red"
            height.style.borderColor="red"
            alert('Enter valid Weight and Height') 
        }
    }
    
}