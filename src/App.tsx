import './App.css';
import Chat from './Chat';

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <span className="brand-name">🙋🏻‍♀️ Real Business </span>
        <span className="sub-name">-by Donald</span>
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
