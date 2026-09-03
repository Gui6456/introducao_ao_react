import {useState} from "react"

function Formulario () {

    let [nome, setNome] = useState("")
    let [idade, setIdade] = useState("")
    let [local, setLocal] = useState("")
    let [estado, setEstado] = useState("")

    function salvar(){
        
        if (nome == "" || idade == "" || local == "" || estado == ""){
            alert("Preencha todos os campos")
            return
        } 

        if (nome.length > 3 && idade > 18 && local.length > 2 && estado.length == 2){
            alert("Seja bem-vindo(a) " + nome)
        } else {
            alert("Dados inválidos")
        }
    }

        return (  // O return não consegue enviar varias tags de uma vez, então precisa ter uma div global.
            <div>  
                <h1> Página de formulário </h1>
                <p> Aprendendo a usar o input no React </p>
            
                <p> Digite seu nome: </p>
                {/* O onChange é ativado sempre que o usuário digitar algo no input, ou mudar algo nele. (e = evento) (e.target.value captura o evento e coloca no input o valor do alvo citado) */}
                <input placeholder="Seu nome" onChange={ e => setNome(e.target.value)} />

                <p> Digite sua idade: </p>
                <input placeholder="Sua idade" onChange={ e => setIdade(e.target.value)} />

                <p> Digite onde mora: </p>
                <input placeholder="Cidade" onChange={ e => setLocal(e.target.value)} /> 
                <input placeholder="Estado" onChange={ e => setEstado(e.target.value)} /> 

                <br/><br/>

                <button onClick = {salvar} > Salvar </button>
            </div>
        )
}

// Tem que colocar esse cara no final do arquivo para poder exportar o componente e poder ser usado em outros arquivos.
export default Formulario   