import { useState } from "react";
import "./App.css";
import axios from "axios";

// json
const api = axios.create({
  baseURL: "https://infoweb-api.vercel.app/",
})

const AppNavBar = () => {
  return(
    <div className="card">
      <h1>Exemplo de Chamada a API</h1>
      <h2>Aplicação tarefas</h2>
    </div>
  );
}

// C reate POST
// R etrieve  HTTP GET
// U pdate HTTP POST, PUT, PATCH
// D elete HTTP DELETE


const AppTarefas = () => {
  const [tarefas, setTarefas] = useState([
  ]);
  const tratarClique = () => {
    api.get("/tarefas").then(
      (resposta) => {
        //console.log("Alô mundo");
        //console.info(resposta);
        //console.info(resposta.data.data);
        const lista = resposta.data.data.map(
          (item : any) => {
            return item.titulo
          }
        );
        console.info(lista);
        setTarefas(lista);
      }
    );
  }

	return (
		<div className="card">
			<button onClick={tratarClique}>Pegar tarefas</button>
			<ul>
				{tarefas.map((tarefa, indice) => <li key={indice}>{tarefa}</li>)}

			</ul>
		</div>
	);
};

const App = () => {
	return (
		<>
			<AppNavBar />
			<AppTarefas />
		</>
	);
};


export default App;