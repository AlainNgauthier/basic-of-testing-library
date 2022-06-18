import './App.css';
import * as React from 'react';

function App() {
  const [active, setActive] = React.useState(false);

  return (
    <div>
      <button onClick={() => setActive(active => !active)} style={{ background: `${active ? 'blue' : 'red'}`}}>
        {active ? 'Change to red' : 'Change to blue'}
      </button>
    </div>
  );
}

export default App;
