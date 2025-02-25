let num = document.getElementById('fnum')
let flista = document.getElementById('flista')
let res = document.getElementById('res')
let valor = []

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isnumero(num.value) && !inlista(num.value, valor)){
        valor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        flista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor invalido ou ja na lista')
    }
    num.value = ''
    num.focus()
}
function final(){
    if(valor.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let tot = valor.length
        let maior = valor[0]
        let menor = valor[0]
        let soma = 0
        let media = 0
        for(let pos in valor){
            soma += valor[pos]
            if(valor[pos]> maior){
                maior = valor[pos]
            }
            if(valor[pos]< menor){
                menor = valor[pos]
            }
            media = soma/tot
        }
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A media dos valores é ${media}</p>`
    }
}