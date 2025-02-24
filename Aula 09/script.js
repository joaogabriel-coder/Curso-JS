function contar(){
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('Fim')
    let passo = document.getElementById('Passo')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || Fim.value.length ==0 || Passo.value.length == 0){
        window.alert('Faltam dados!')
    }else{
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(Fim.value)
        let p = Number(Passo.value)
        
        if( p<=0){
            window.alert('Passo invalido, considerando PASSO 1')
            p = 1
        }

        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} `
            }
        }else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} `
            }
        }
    }
}