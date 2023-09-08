import './App.css';
import CRouter from './pages/Router';
import { ThreadProvider } from './utils/contexts/ThreadContext';

function App() {
  return (
    <ThreadProvider>
      <CRouter/>
    </ThreadProvider>
  );
}

export default App;
