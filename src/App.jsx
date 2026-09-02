import { useState } from 'react';

function App() {

  let nome = "Senac"
  let sobrenome = "São Carlos"
  let nome_completo = nome + " " + sobrenome
///////////////////////////////////////////////////////////////////
  // useState é uma forma de criar variáveis que podem ser alteradas e que quando alteradas, o React atualiza a tela automaticamente, sem precisar atualizar a página inteira.
  let [cliques, setCliques] = useState(0) 

  function soma_cliques() {
    setCliques(cliques + 1)
  }

  return (   // Tudo dentro de {} será tratato como JS puro, ou seja, código, e tudo fora de {} será tratado como HTML puro 
    <div>
      <h1>Hello {2+2} World!!!!!!!</h1>
      <p>Estou aprendendo React xD</p>  {/*{console.log("qlocura"), é possivel até mesmo colocar códigos {} entre as palavras*/}
      {/*Esse é um jeito novo no React de mostrar variáveis, muito mais simples */}
      <p>Eu estudo no {nome} na unidade de {sobrenome}, portando estudo no {nome_completo}</p>  

      <hr/>

      <p>Você clicou {cliques} vezes</p>
      <button onClick={soma_cliques}> Clique Aqui</button>
    </div>    
  )
}

export default App
