import React, { useState } from 'react';
function App() {
  const [count, setCount] = useState("Hello");
  return ( 
    <>
   <div>
      <p>You : {count} </p>
      <button onClick={() => setCount("Hi there!")}>
        Click me
      </button>
    </div>
    </>
  );
}

export default App;
