import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/ConfigureStore';
import Main from './components/Main';
import { getCountries } from './redux/countries/Countries';
import CountryDetails from './components/CountryDetails';

function App() {
  useEffect(() => {
    store.dispatch(getCountries());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/:id">
            <CountryDetails />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
