import './App.css';
import CRouter from './pages/Router';
import { ThreadProvider } from './utils/contexts/ThreadContext';
import { UserProvider } from './utils/contexts/UserContext';

function App() {
  return (
    <UserProvider>
      <ThreadProvider>
        <CRouter/>
      </ThreadProvider>
    </UserProvider>
  );
}

export default App;
