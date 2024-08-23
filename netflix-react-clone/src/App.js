import {Container} from 'react-bootstrap'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbarflix from './components/Navbarflix';

function App() {
  return (
    <Container fluid data-bs-theme="dark" className='p-0'>
      <header>
        <Navbarflix />
      </header>
    </Container>
  );
}

export default App;
