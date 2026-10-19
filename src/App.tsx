import './App.css';
import Chat from './Chat';

// The header lives inside Chat so the mode switcher can sit at its top right.
function App() {
  return (
    <div className="app">
      <Chat
        brand={
          <span className="brand-name">
            <span className="brand-emoji">🙋🏻‍♀️</span>
            <span className="brand-text">
              Real <span className="hl">Business</span>
              <span className="brand-by">by Donald</span>
            </span>
          </span>
        }
      />
    </div>
  );
}

export default App;
