    let sal_bruto = document.getElementById('gross-salary')
    let dep = document.getElementById('dependents')
    let res_dep = document.getElementById('res_dependents')
    let res_inss = document.getElementById('res_inss')
    let res_liquido = document.getElementById('res_base-calc')
    let res_irrf = document.getElementById('base-tax')
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
        /*SALÁRIO BRUTO*/
        let sal = parseFloat(sal_bruto.value)
        base_salary.innerHTML=`R$ ${sal.toFixed(2)}`   
        base_salary.style.color='rgb(19, 82, 119)'
        
        /* DEPENDENTES  */
        let calc_dep = parseFloat(dep.value * 189.59)
        res_dep.innerHTML=`R$ ${calc_dep.toFixed(2)}`

        /* OUTRAS DE DUÇÕES */
        let deduct_val = parseFloat(deduct.value);
        if(deduct.value.length == 0){
            deduct_val = 0;
            res_deduct.innerHTML='R$ 0,00'
        }else{
            res_deduct.innerHTML=`R$ ${deduct_val.toFixed(2)}`
        }

        /* CALCULO DO INSS */
        let inss;
        if (sal_bruto.value <= 1045){
            inss = parseFloat(sal_bruto.value * 0.075)  
        }else if (sal_bruto.value > 1045 && sal_bruto.value <= 2089.60){
            inss = parseFloat((sal_bruto.value - 1045) * 0.09 + 78.38)           
        }else if(sal_bruto.value > 2089.60 && sal_bruto.value <= 3134.40){
            inss = parseFloat((sal_bruto.value - 2089.60) * 0.12 + 78.38 + 94.02)
        }else if (sal_bruto.value > 3134.40 && sal_bruto.value <= 6101.06){
            inss = parseFloat((sal_bruto.value - 3134.40) * 0.14 + 78.38 + 94.02 + 125.37)
        }else{
            inss = 713.10
        }
        res_inss.innerHTML=`R$ ${inss.toFixed(2)}`

        /*CÁLCULO DO SALÁRIO LIQUIDO */
        let sal_liquido = parseFloat(sal_bruto.value - inss -  deduct_val - calc_dep);

        if(sal_liquido < 0){
            res_liquido.innerHTML=`R$ ${sal_liquido.toFixed(2)}`
            res_liquido.style.color='red'
        }else{
            res_liquido.innerHTML=`R$ ${sal_liquido.toFixed(2)}`
            res_liquido.style.color='green'
        }
        
        /*CÁLCULO DO IRRF */

        let irrf;
        if(sal_liquido <= 1903.98){
            res_irrf.innerHTML=`Isento`
        }else{
            /*dif_irrf = parseFloat(sal_liquido - 1903.98)*/
            if(sal_liquido >= 1903.00 && sal_liquido <= 2826.65 ){
                irrf = parseFloat(sal_liquido * 0.075 - 142.80)
            }else if(sal_liquido >= 2826.65 && sal_liquido <= 3751.05){
                irrf = parseFloat((sal_liquido * 0.15) - 354.80)
            }else if(sal_liquido >= 3751.05 && sal_liquido <= 4664.68){
                irrf = parseFloat(sal_liquido * 0.2250 - 636.13)
            }else{
                irrf = parseFloat(sal_liquido * 0.2750 - 869.36)
            }
        }
        res_irrf.innerHTML=`R$ ${irrf.toFixed(2)}`
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

function clicar_calc_novamente(){
    location.reload()
}
