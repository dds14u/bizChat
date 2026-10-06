import './App.css';
import Chat from './Chat';

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <span className="brand-name">TD Business English</span>
      </header>

      <main className="chat-area">
        <div id="chat-slot" className="chat-slot">
          <Chat />
        </div>
      </main>
    </div>
  );
}

export default App;
