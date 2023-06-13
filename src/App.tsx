import './App.css';
import {Header} from "./components/Header";
import {Provider} from "react-redux";
import {store} from "./store";
import {List} from "./components/List";



function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <Header></Header>
              <List></List>
          </div>
      </Provider>

  );
}

export default App;
