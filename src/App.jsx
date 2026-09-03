import { useEffect, useState } from "react"  // Ao usar o useState em algum lugar, automaticamente esse import aparece na primeira vez.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* useEffect(() => {
  let intervalo = setInterval(() => {
    setCliques((cliques) => cliques + 1) // setCliques é a função que altera o valor da variável cliques, e cliques += 1 é o valor que será alterado, ou seja, o valor atual de cliques + 1, a função atualiza a variável.
    }, 100) // 100 ms = 0,1 seg
    
    return () => clearInterval(intervalo) // O return é uma função que é executada quando o componente é desmontado, ou seja, quando a tela é atualizada, e o clearInterval(intervalo) é a função que limpa o intervalo, ou seja, para de executar a função setCliques.
    }, []) */    // Apenas uma curiosidade de como clicar sozinho.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Tudo deve ser colocado dentro da função App, pois o React só renderiza o que está dentro dela, mas as variáveis e funções podem colocadas fora dela, porém não aparecem na tela.
  function App() {  
    
  // useState cria um estado no componente. Quando o estado é alterado através da função setter (setNome, setCliques etc.), o React renderiza novamente o componente para atualizar a tela.
  let [cliques, setCliques] = useState(0)

  function soma_cliques() {
    setCliques(cliques + 1) // setCliques é a função que altera o valor da variável cliques, e cliques += 1 é o valor que será alterado, ou seja, o valor atual de cliques + 1, a função atualiza a variável.
  }
  
  let [nome, setNome] = useState("Carregando...")
  
  function carregar_nome(){
    setNome("Guilherme")     
  }

  return (   
    <div>
      <h1>Hello {2+2} World!!!!!!!</h1>
      <p>Estou aprendendo React xD</p>
      <p>Meu nome é {nome}</p>
      <button onClick={() => setNome("Guilherme")}> Carregar nome </button>  
      {/* Ou fazer assim, <button> onClick={carregar_nome} */}
      {/* Dessa forma eu preciso criar uma função para modificar uma variável(global ou local), acho que a () => é mais direta */} 

      <hr/>

      <p>Você clicou {cliques} vezes</p>
      <button onClick={soma_cliques}> Clique Aqui</button> 
      {/*
            Arrow Function -> Função do tipo seta (lambda) () =>
            Função anônima -> Função sem nome, que não precisa ser declarada antes de ser usada, e é usada apenas uma vez.
      
      */}

      <hr/>
    </div>    
  ) 
}

export default App
