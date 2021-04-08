import './App.css';
import Notes from './Components/Notes/Notes';
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Link,  Route } from 'react-router-dom';

const Main = styled.main`
  background-color: paleturquoise;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
`

function App() {

  return (
    <Main>
      <Router>
        <Link to="/">Home</Link>
        <Switch>
          <Route path="/">
            <Notes></Notes>
          </Route>
        </Switch>
      </Router>
    </Main>
  );
}

export default App;
