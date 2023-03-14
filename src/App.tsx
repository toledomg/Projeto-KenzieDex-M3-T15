<<<<<<< HEAD
=======
import { UserProvider } from './providers/UserContext';
>>>>>>> 93372ea9064e112fdf47a1ae7347caf880d9a135
import { Router } from './routes';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <UserProvider>
      <GlobalStyles />
      <Router />
    </UserProvider>
  );
}

export default App;
