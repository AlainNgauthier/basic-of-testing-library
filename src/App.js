import './App.css';
import * as React from 'react';

function App() {
  const [active, setActive] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  return (
    <div>
      <button 
        disabled={disabled}
        onClick={() => setActive(active => !active)} 
        style={{ background: `${active ? 'blue' : 'red'}`}} 
      >
        {active ? 'Change to red' : 'Change to blue'}
      </button>
      <input type="checkbox" onChange={e => setDisabled(e.target.checked)} name="checkboxTest" />
    </div>
  );
}

export default App;
