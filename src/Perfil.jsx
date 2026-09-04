import {useState} from "react"

function Perfil() {

    let [ is_showing_profile, setShowingProfile ] = useState(true)
    let [ change_password, setChangePassword] = useState(false)

    let [senha_digitada, setSenhaDigitada] = useState("")
    let [senha_nova, setSenhaNova ] = useState("")


    let [senha, setSenha] = useState("1234")
    let usuario = {
        nome: "Guilherme",
        gmail: "guilherme@example.com",
    }

    function salvar_senha (){
        if (senha_digitada == senha ){
            setSenha(senha_nova)
            alert("Senha alterada com sucesso")
        } else {
            alert("Senha incorreta")
        }
    }

    return ( // Não pode usar elementos com estrutura no return, apenas sem. (Então sera usado o "Operador Ternário (?) ")
        <div>
            <h1>Perfil do usuário</h1> 
            <p>Bem-vindo ao meu perfil!</p>
            
            {
                is_showing_profile == true ?
                    <button onClick={() => setShowingProfile(false)} > Ocultar Perfil </button>
                :    
                    <button onClick={() => setShowingProfile(true)} > Carregar Perfil</button>
            }

            {/* para poder alternar o botão (!) e não ser de uso único (apenas uma curiosidade, caso não for fazer é só colocar um (true)) */} 
            {/* ! esse sinal serve para negação, não igual, diferente (o significado mais técnico é "não igual") */}
            <hr/>

            { // O operador ternário (?) é praticamente um if/else sem estrutura próprio, ou seja simplificado
                is_showing_profile == true ? // Essa é a estrutura do operador ternário
                    <div> {/* Ele só consegue retornar um resultado(como um return), então precisa da div também */}
                        <p> Nome: {usuario.nome} </p>
                        <p> Email: {usuario.gmail} </p>
                        <button onClick={() => setChangePassword(!change_password)} >Alterar Senha</button>
                    </div>  
                :   
                    <></>  // Isso é uma tag vazia (fragmento), para quando não se quer colocar nada em alguma tag
            }

            <hr/>

            {
                change_password == true ?
                    <div>
                        <h1> Alterar senha </h1>
                        <p> Coloque a senha atual: {senha}</p>
                        <input onChange={ e => setSenhaDigitada(e.target.value)} type="password" name="senha_atual" placeholder="Senha atual" />

                        <p> Coloque a nova senha: </p>
                        <input onChange={ e => setSenhaNova(e.target.value)} type="password" name="senha_nova" placeholder="Senha nova" />   <br/><br/>
                        <button onClick={salvar_senha}> Salvar alterações </button>
                    </div>
                :
                    <></>
            }  

                
        
        </div>
    )
}

export default Perfil