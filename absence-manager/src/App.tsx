import React, {useEffect} from 'react';

function App() {

  useEffect(() => {
    fetch("http://localhost:3000/absences")
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div className="App">
      hallo
    </div>
  );
}

export default App;
