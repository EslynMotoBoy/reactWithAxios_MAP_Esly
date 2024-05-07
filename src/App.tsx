import { useCallback, useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import { Link } from 'react-router-dom';


function App() {

  const [personagem, setPersonagem] = useState<any>();
  const [imagem, setImagem] = useState<string>();

  const getData = useCallback( async()=> {
    await axios.get('https://swapi.py4e.com/api/people/14')
    .then(function (response) {
     console.log(response.data);
     setPersonagem(response.data);
     setImagem("http://www.nerdforever.com.br/image/catalog/Personagens/HanSolo-Fathead.png");
    })
    .catch(function (error) {
      console.error(error);
    })
  }, [])

  useEffect(()=>{
    getData();
  }, [])

  const defImagem = (imagem: string) => {
    setImagem(imagem);
  }

  return (
    <div className = "App">
      <header className="App-header">
        <h1>Meu Personagem é....</h1>
      </header>
      
      <div className="conteudo">

        <h1>{personagem && personagem.name}</h1>

        {imagem && <img src={imagem} style={{width: "250px"}} alt= "Imagem atual"/>}
      </div>
      
      <button onClick={() => defImagem('http://www.nerdforever.com.br/image/catalog/Personagens/HanSolo-Fathead.png')} >Antes</button>
      <button onClick={() => defImagem('https://i0.wp.com/ovicio.com.br/wp-content/uploads/han-solo-harrison-ford-158748.jpg?resize=683%2C1024&ssl=1')} >Depois</button>
      
      <Link to={'/teste'}> Link MADICIOADO</Link> 
    </div>
  )
}

export default App
