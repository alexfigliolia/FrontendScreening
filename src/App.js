import { Container } from '@material-ui/core';
import Form from './Form';

function App() {
  return (
    <Container maxWidth="sm">
      <header>
        <h1>Carta Healthcare</h1>
      </header>

      <main>
        <Form />
      </main>
    </Container>
  );
}

export default App;
