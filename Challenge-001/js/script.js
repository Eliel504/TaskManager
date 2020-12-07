    let sal_bruto = document.getElementById('gross-salary')
    let dep = document.getElementById('dependents')
    let res_dep = document.getElementById('res_dependents')
    let container = document.getElementById('container')
    let deduct = document.getElementById('deductions')
    let res_deduct = document.getElementById('res_deduction')
    let box = document.getElementById('box-calculator-id')
    let result = document.getElementById('result-id')
    let erro_sal = document.getElementById('erro_sal_br')
    let base_salary = document.getElementById('base-salary')

function clica_calcula(){
 
    if(sal_bruto.value <= 0){
        erro_sal.innerHTML= `O valor do salário deve ser maior que 0` 
        erro_sal.style.color='red' 
        erro_sal.style.marginBottom='15px'
    }else{
        result.style.display='inline'
        base_salary.innerHTML=`${sal_bruto.value}`   
        base_salary.style.color='rgb(19, 82, 119);'
        
        let calc_dep = dep.value * 189.59
        res_dep.innerHTML=`${calc_dep}`

        if(deduct == null){
            res_deduct.innerHTML='0'
        }
        res_deduct.innerHTML=`${deduct.value}`

    }
}

