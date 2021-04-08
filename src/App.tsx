import './App.css';
import Notes from './Components/Notes/Notes';
import styled from 'styled-components'

function App() {
  const Main = styled.main`
    background-color: paleturquoise;
    width: 100vw;
    height: 100vh;
    padding: 2rem;
  `

  return (
    <Main>
      <Notes></Notes>
    </Main>
  );
}

export default App;
