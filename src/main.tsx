import React from "react";
import ReactDOM from "react-dom/client";
//import App from './App.tsx'
//import './index.css'

//ReactDOM.createRoot(document.getElementById('root')!).render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//)

const root = ReactDOM.createRoot(document.getElementById("root")!);

function Saluditos() {
  return <h1>Holis bolis</h1>;
}

root.render(<Saluditos />);
