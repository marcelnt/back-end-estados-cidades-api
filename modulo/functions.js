/* *********************************************************************
* Objetivo:  Arquivo de Funções
* Data: 09/09/2025 
* Autor: Marcel
* **********************************************************************/

const MESSASE_ERRO              = {status: false, status_code: 500, development: 'Marcel Neves Teixeira'}
const MESSAGE_ESTADOS_REGIAO    = {status: true, status_code:200, development: 'Marcel Neves Teixeira', itens :[]}

const dados = require('./estados_cidades.js')

const getEstados = function () {
    const MESSAGE_ESTADOS   = {status: true, status_code:200, development: 'Marcel Neves Teixeira', estados :[]}
    
    dados.listaDeEstados.estados.forEach(function(item){
        MESSAGE_ESTADOS.estados.push(item.sigla)
       

    }) 
    MESSAGE_ESTADOS.quantidade = MESSAGE_ESTADOS.estados.length
    return MESSAGE_ESTADOS
}

const getSiglaEstado = function (estado) {
    let status = false
    const MESSAGE_ESTADO    = {status: true, status_code:200, development: 'Marcel Neves Teixeira', itens :[]}

    dados.listaDeEstados.estados.forEach(function(item){
        
        //console.log(sigla.sigla)
        if (item.sigla == String(estado.sigla).toUpperCase()){
            MESSAGE_ESTADO.itens.push(item)
            status = true
        }    
    })
    
    if(status){
        //Remove do JSON o eelemento cidades
        delete MESSAGE_ESTADO.itens[0].cidades
        return MESSAGE_ESTADO
    }else
        return MESSASE_ERRO
}

const getCapitalEstado = function (estado) {
    let dadosEstados = {}
    let status = false
    const MESSAGE_CAPITAL   = {status: true, status_code:200, development: 'Marcel Neves Teixeira', itens :[]}

  dados.listaDeEstados.estados.forEach(function(item){
       
    if (item.sigla.toUpperCase() == String(estado.sigla).toUpperCase()){
            
            dadosEstados.uf = item.sigla
            dadosEstados.descricao = item.nome
            dadosEstados.capital = item.capital
            MESSAGE_CAPITAL.itens.push(dadosEstados)
            status = true
        }

        
    })
    if(status)
        return MESSAGE_CAPITAL
    else
        return MESSASE_ERRO
}

const getEstadosRegiao = function (regiao) {
    
    let status = false
    

  dados.listaDeEstados.estados.forEach(function(item){
       
    if (item.regiao.toUpperCase() == String(regiao).toUpperCase()){
            let dadosEstados = {}
            dadosEstados.uf = item.sigla
            dadosEstados.descricao = item.nome
            dadosEstados.capital = item.capital
            dadosEstados.regiao = item.regiao
      
            if(item.capital_pais != undefined) { 
                dadosEstados.capital_atual = true
                dadosEstados.capital_pais_ano_inicio = item.capital_pais.ano_inicio
                dadosEstados.capital_pais_ano_termino = item.capital_pais.ano_fim
            }

            MESSAGE_ESTADOS_REGIAO.itens.push(dadosEstados)
            status = true
        }

        
    })

    MESSAGE_ESTADOS_REGIAO.quantidade = MESSAGE_ESTADOS_REGIAO.itens.length
    
    if(status)
        return MESSAGE_ESTADOS_REGIAO
    else
        return MESSASE_ERRO
}

const getCidadesEstado = function (estado) {
    let dadosEstados = {}
    let status = false
    const MESSAGE_CIDADE   = {status: true, status_code:200, development: 'Marcel Neves Teixeira', itens :[]}

  dados.listaDeEstados.estados.forEach(function(item){
       
    if (item.sigla.toUpperCase() == String(estado).toUpperCase()){
            
            dadosEstados.uf = item.sigla
            dadosEstados.descricao = item.nome
            dadosEstados.cidades = item.cidades
            MESSAGE_CIDADE.itens.push(dadosEstados)
            status = true
        }

        //MESSAGE_CIDADE.quantidade = MESSAGE_CIDADE.itens[0].cidades.length
        //console.log(MESSAGE_CIDADE.itens[0])
    })
    MESSAGE_CIDADE.quantidade = MESSAGE_CIDADE.itens[0].cidades.length
    if(status)
        return MESSAGE_CIDADE
    else
        return MESSASE_ERRO
}

//console.log(getCidadesEstado('sp'))
//console.log(getEstadosRegiao('nordeste'))
//console.log(getSiglaEstado('ac'))

module.exports = {  
                    getEstados,
                    getSiglaEstado,
                    getCapitalEstado,
                    getEstadosRegiao,
                    getCidadesEstado
 }


