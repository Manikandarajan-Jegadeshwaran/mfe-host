import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// const RemoteButton = React.lazy(() => import("remote/Button"));

const Dummy = React.lazy(() => import("./Dummy"));

function App() {
  const [slow, setSlow] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setSlow(true);
    }, 3000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {slow && (
        <React.Suspense fallback={<div>Loading Dummy</div>}>
          <Dummy />
        </React.Suspense>
      )}

      {/* {slow && (
        <React.Suspense fallback={<div>Loading Remote...</div>}>
          <RemoteButton message="hellow" />
        </React.Suspense>
      )} */}
    </div>
  );
}

export default App;
