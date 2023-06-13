import './App.css';
import {Header} from "./components/Header";
import {Provider} from "react-redux";
import {store} from "./store";
import {GeneralList} from "./components/GeneralList";



function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <Header></Header>
              <GeneralList></GeneralList>
          </div>
      </Provider>

  );
}

export default App;
