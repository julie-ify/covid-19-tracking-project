import { Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import store from './redux/ConfigureStore';
import Main from './components/Main';
import { getCountries } from './redux/countries/Countries';
import CountryDetails from './components/CountryDetails';

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
        <Route path="/:id" exact component={CountryDetails} />
      </Switch>
    </div>
  );
}

export default App;
