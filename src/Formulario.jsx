import {useState} from "react"
import "./Formulario.css"  // É assim que se importa o CSS no React, sem precisar colocar o caminho completo, apenas o nome do arquivo.

function Formulario () {

    let [nome, setNome] = useState("")
    let [idade, setIdade] = useState("")
    let [local, setLocal] = useState("")
    let [estado, setEstado] = useState("")

    function salvar(){
        
        if (nome === "" || idade === "" || local === "" || estado === ""){  // === é usado como estritamente rigoroso, ou seja, não aceita nem mesmo um espaço em branco.
            alert("Preencha todos os campos")
            return
        } 

        if (nome.length > 3 && parseInt(idade) > 18 && local.length > 2 && estado.length === 2){
            alert("Seja bem-vindo(a) " + nome + ", você tem " + idade + " anos, mora em " + local + " e seu estado é " + estado)
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
                <input name="nome" placeholder="Seu nome" onChange={ e => setNome(e.target.value)} />

                <p> Digite sua idade: </p>
                <input name="idade" placeholder="Sua idade" onChange={ e => setIdade(e.target.value)} />

                <p> Digite onde mora: </p>
                <input name="local" placeholder="Cidade" onChange={ e => setLocal(e.target.value)} /> 
                <input name="estado" maxLength="2" placeholder="Estado" onChange={ e => setEstado(e.target.value)} /> 

                <br/><br/>

                <button onClick = {salvar} > Salvar </button>  <br/><br/>
                <hr/>
            </div>
        )
}

// Tem que colocar esse cara no final do arquivo para poder exportar o componente e poder ser usado em outros arquivos.
export default Formulario   