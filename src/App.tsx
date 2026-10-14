import './App.css';
import Chat from './Chat';

// The header lives inside Chat so the mode switcher can sit at its top right.
function App() {
  return (
    <div className="app">
      <Chat
        brand={
          <span className="brand-name">
            🙋🏻‍♀️ Real Business<span className="brand-by">by Donald</span>
          </span>
        }
      />
    </div>
  );
}

export default App;
