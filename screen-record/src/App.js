import logo from './logo.svg';
import './App.css';
import RecorderVideo from './components/RecorderVideo';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Screen Recorder</h1>
        <div class='RecordedVideo'>
          <RecorderVideo />
        </div>
      </header>
    </div>
  );
}

export default App;
