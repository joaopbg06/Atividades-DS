let estado = function(a){
    if( a === "RJ" || a === "SP"){
        return "Estado Permitido"
    } else{
        return "Estado negado"
    }
}

module.exports = estado