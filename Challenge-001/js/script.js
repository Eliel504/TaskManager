function clica_calcula(){
    let sal_bruto = document.getElementById('gross-salary')
    let dep = document.getElementById('dependents')
    let deduct = document.getElementById('deductions')
    let box = document.getElementById('box-calculator-id')
    let result = document.getElementById('result-id')
    let erro_sal = document.getElementById('erro_sal_br')
    
    
    if(sal_bruto.value <= 0){
        erro_sal.innerHTML= `O valor do salário deve ser maior que 0` 
        erro_sal.style.color='red' 
        erro_sal.style.marginBottom='15px'
    }else{
        result.style.display='inline'   
        





    }
}