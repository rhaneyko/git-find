import { Header } from "../../components/Header/index";
import background from "../../assets/background.png";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username" />
            <button>Buscas</button>
          </div>
          <div className="profile">
            <img
              src="https://avatars.githubusercontent.com/u/80545536?v=4"
              className="profile-pic"
              alt="profile-pic"
            />
            <div>
              <h3>Rhaneyko Honorio</h3>
              <span>@rhaneyko</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr/>
        </div>
      </div>
    </div>
  );
}

export default App;
