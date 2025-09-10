/***********************************************************************************
 * Objetivo: Criar uma API para realizar integração com banco de dados
 * Data: 09/09/2025
 * Autor: Marcel
 * Versão: 1.0
 * /********************************************************************************** */
const estados = require('./modulo/functions.js')


 const express       = require('express')
 const cors          = require('cors')
 // Define ume porta randomica ou padroniza na 8080
 const PORT = process.PORT || 8080


 //Cria o objeto app para criar a API
const app = express()

//Configurações do cors
app.use((request, response, next) =>{
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    
    app.use(cors())
    next()
})

app.get('/v1/api/estados' , function (request, response){
    let dados = estados
    
    response.status(dados.getEstados().status_code)
    response.json(dados.getEstados())
})

app.get('/v1/api/estados/:sigla' , function (request, response){
    let dados = estados
    let sigla = request.params
    let estadosJSON = dados.getSiglaEstado(sigla)

    response.status(estadosJSON.status_code)
    response.json(estadosJSON)
})

app.get('/v1/api/capital/estados/:sigla' , function (request, response){
    let dados = estados
    let sigla = request.params
    let estadosJSON = dados.getCapitalEstado(sigla) 

    response.status(estadosJSON.status_code)
    response.json(estadosJSON)
})

app.get('/v1/api/regiao/estados/:regiao' , function (request, response){
    let dados = estados
    let regiao = request.params

    let estadosJSON = dados.getEstadosRegiao(regiao.regiao)

    response.status(estadosJSON.status_code)
    response.json(estadosJSON)


})

app.get('/v1/api/cidades/estados/:sigla' , function (request, response){
    let dados = estados
    let sigla = request.params

    let estadosJSON = dados.getCidadesEstado(sigla.sigla)

    response.status(estadosJSON.status_code)
    response.json(estadosJSON)

})

app.get('/v1/api/help-estados/' , function (request, response){
    let JSON = {
                "/v1/api/estados":                  "Lista todos os estado",
                "/v1/api/estados/:sigla":           "Lista dados referente a um unico estado",
                "/v1/api/capital/estados/:sigla":   "Lista dados referente a capital de um unico estado",
                "/v1/api/regiao/estados/:regiao":   "Lista dados de estados referente a uma unica região",
                "'/v1/api/cidades/estados/:sigla":  "Lista as cidades de um estado"
           
    }
       


    response.status(200)
    response.json(JSON)

})

app.listen(PORT, function(){
    console.log('API aguardando Requisições...')
})
