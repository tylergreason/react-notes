import './App.css';
import Notes from './Components/Notes/Notes';
import styled from 'styled-components'

const Main = styled.main`
  background-color: paleturquoise;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
`

function App() {

  return (
    <Main>
      <Notes></Notes>
    </Main>
  );
}

export default App;
