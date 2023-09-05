import { Header } from "./components/Header"

import "./App.css";

function App() {
  return (
    <div className="container">
      <Header title="Projeto Vision do Giovanni" />

      <h1>Conteúdo do projeto vision</h1>

      <main>
        <section>
          <img
            src="https://fastly.picsum.photos/id/1002/300/300.jpg?hmac=BoX0yYHGnuaryVR22pkiNUrVS3oOMU1nL4i3bObV6A4"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vero
            consectetur ipsum asperiores ipsa vitae reprehenderit praesentium
            nemo hic? Mollitia iusto dolores ratione laboriosam voluptas qui
            voluptates expedita facere cupiditate.
          </p>
        </section>

        <section>
          <h1>Lista de projetos</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
