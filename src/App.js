import { Switch, Route } from 'react-router-dom';
import Main from './components/Main';

function App() {
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
