import {useState} from "react"

function Perfil() {

    let [ is_showing_profile, setShowingProfile ] = useState(false)

    let usuario = {
        nome: "Guilherme",
        gmail: "guilherme@example.com",
        senha: "1234"
    }

    return ( // Não pode usar elementos com estrutura no return, apenas sem. (Então sera usado o "Operador Ternário (?) ")
        <div>
            <h1>Perfil do usuário</h1>
            <p>Bem-vindo ao meu perfil!</p>
            {/* para poder alternar o botão (!) e não ser de uso único (apenas uma curiosidade, caso não for fazer é só colocar um (true)) */} 
            {/* ! esse sinal serve para negação, não igual, diferente (o significado mais técnico é "não igual") */}
            <button onClick={() => setShowingProfile(!is_showing_profile)} >Carregar Perfil</button>
        
            <hr/>

            { // O operador ternário (?) é praticamente um if/else sem estrutura próprio, ou seja simplificado
                is_showing_profile == true ? // Essa é a estrutura do operador ternário
                    <div> {/* Ele só consegue retornar um resultado(como um return), então precisa da div também */}
                        <p> Nome: {usuario.nome} </p>
                        <p> Email: {usuario.gmail} </p>
                        <button>Alterar Senha</button>
                    </div>  
                :   
                    <></>  // Isso é uma tag vazia (fragmento), para quando não se quer colocar nada em alguma tag
            }
        </div>
    )
}

export default Perfil