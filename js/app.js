function Verificar(){
    let data = new Date()
    console.log(data)
    let ele_data = document.querySelector('#ano')
    let nascimento = new Date(ele_data.value + "T00:00:00")
    let ele_respota = document.querySelector('.resultado')

    
    if (ele_data.value == '' || nascimento.getFullYear() > data.getFullYear()){
        alert("Data de nascimento invalida.")
    } else {
        let ele_sex = document.querySelectorAll('[name="input_sex"]')
        let idade = Calculo_Idade(data,nascimento)
        console.log(idade)
        let genero = ''
        if (ele_sex[0].checked){
            genero = "Mulher" 
        } else if (ele_sex[1].checked){
            genero = "Homem"
        }
        if (ele_sex[0].checked || ele_sex[1].checked){
            ele_respota.innerHTML = `Detectamos ${genero} de ${idade[0]} anos 
            ${idade[1]} meses e ${idade[2]} dias de idade.`
        } else{
            alert("Selecione um sexo.")
        }
        
    }
}
function Calculo_Idade(data_func,nascimento_func){
    let anos = data_func.getFullYear() - nascimento_func.getFullYear()
    let meses = data_func.getMonth() - nascimento_func.getMonth()
    let dias = data_func.getDate() - nascimento_func.getDate()

    if (meses < 0 || (meses == 0 && dias < 0)){
        anos--
        meses +=12
    }
    if (dias < 0){
        let dia_MesAnterior = new Date(data_func.getFullYear(),data_func.getMonth(), 0)
        dias += dia_MesAnterior.getDate()
        meses--
    }

    return [anos, meses, dias]
}