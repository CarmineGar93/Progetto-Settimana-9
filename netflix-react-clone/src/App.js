import {Container} from 'react-bootstrap'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbarflix from './components/Navbarflix';
import Titleflix from './components/Titleflix';
import Footerflix from './components/Footerflix';

function App() {
  return (
    <Container fluid data-bs-theme="dark" className="bg-dark-subtle p-0">
      <header>
        <Navbarflix />
      </header>
      <main>
        <Container fluid className='mb-4'>
        <Titleflix />

        </Container>
      </main>
      <footer className='pt-5'>
        <Footerflix />
      </footer>
    </Container>
  );
}

export default App;
