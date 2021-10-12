import { Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import store from './redux/ConfigureStore';
import Main from './components/Main';
import { getCountries } from './redux/countries/Countries';

function App() {
  useEffect(() => {
    store.dispatch(getCountries());
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
