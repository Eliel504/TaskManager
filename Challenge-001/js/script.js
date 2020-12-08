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
    let body_id = document.getElementById('body_id')
    let title_result = document.getElementById('title-result')
    let title_calc = document.getElementById('title-calc')
    let box_span1 = document.getElementById('box-span-id1')
    let box_span2 = document.getElementById('box-span-id2')
    let box_span3 = document.getElementById('box-span-id3')
    let box_span4 = document.getElementById('box-span-id4')
    let box_span5 = document.getElementById('box-span-id5')
    let box_span6 = document.getElementById('box-span-id6')



function clica_calcula(){
 
    if(sal_bruto.value <= 0){
        erro_sal.style.display='block'
        erro_sal.innerHTML= `O valor do salário deve ser maior que 0.` 
        erro_sal.style.color='red' 
        erro_sal.style.marginBottom='15px'
    }else{
        erro_sal.style.display='none'
        result.style.display='inline'
        let sal = parseFloat(sal_bruto.value)
        base_salary.innerHTML=`R$ ${sal.toFixed(2)}`   
        base_salary.style.color='rgb(19, 82, 119)'
        
        let calc_dep = parseFloat(dep.value * 189.59)
        res_dep.innerHTML=`R$ ${calc_dep.toFixed(2)}`

        if(deduct.value.length == 0){
            res_deduct.innerHTML='R$ 0,00'
        }else{
            let deduct_val = parseFloat(deduct.value)
            res_deduct.innerHTML=`R$ ${deduct_val.toFixed(2)}`
        }
        

    }
}

function claro(){
    box.style.background='linear-gradient(white, rgb(3, 58, 83))'
    box.style.backgroundClip='padding-box'
    result.style.background='linear-gradient(white, rgb(3, 58, 83))'
    result.style.backgroundClip='padding-box'
    body_id.style.backgroundImage='url(/Challenge-001/images/claro.jpg)'
    title_calc.style.color='rgb(19, 82, 119)'
    title_result.style.color='rgb(19, 82, 119)'
    box_span1.style.color='black'
    box_span2.style.color='black'
    box_span3.style.color='black'
    box_span4.style.color='black'
    box_span5.style.color='black'
    box_span6.style.color='black'

}

function escuro(){
    box.style.background='linear-gradient(black, rgb(3, 58, 83))'
    box.style.backgroundClip='padding-box'
    result.style.background='linear-gradient(black, rgb(3, 58, 83))'
    result.style.backgroundClip='padding-box'
    body_id.style.backgroundImage=' url(/Challenge-001/images/au1D4I.jpg)'
    title_calc.style.color='white'
    title_result.style.color='white'
    box_span1.style.color='white'
    box_span2.style.color='white'
    box_span3.style.color='white'
    box_span4.style.color='white'
    box_span5.style.color='white'
    box_span6.style.color='white'
}

function clica_limpar(){
    sal_bruto.value = null
    dep.value = null
    deduct.value = null
}
