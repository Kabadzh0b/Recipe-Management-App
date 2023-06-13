import './App.css';
import {Header} from "./components/Header";
import {Provider} from "react-redux";
import {persistor, store} from "./store";
import {List} from "./components/List";
import {PersistGate} from "redux-persist/integration/react";


function App() {

  return (
      <Provider store={store}>
          <PersistGate persistor={persistor}>
              <div className="App">
                  <Header></Header>
                  <List></List>
              </div>
          </PersistGate>

      </Provider>

  );
}

export default App;
