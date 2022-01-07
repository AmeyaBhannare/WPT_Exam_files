//import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <div className="name">
        <header>
          <strong>MYChatApp</strong> <sub>BY (Ameya_Bhannare)/(210940320015)</sub>
        </header>
      </div>
      <div className="chat">
        <input placeholder="Lets chat here...." className="textbox"></input>
        <button className="send">Send</button>
      </div>
      <br></br>
      <div><button className="first">hiiii</button></div>
      <br></br>
      <div><button className="second">heloooo</button></div>
      <br></br>
      <div><button className="first">Whats App</button></div>
      <br></br>
      <div><button className="second">All good</button></div>
      {/* <ul>
        <tr>
          <td><input placeholder="Lets chat here...."></input></td>
          <td><button className="send">Send</button></td>
        </tr>
        <tr>
          <colspan>
          <td><button className="first">hiiii</button></td>
          </colspan>
        </tr>
        <tr>
          <td><button className="second">heloooo</button></td>
        </tr>
        <tr>
          <td><button className="first">Whats App,</button></td>
        </tr>
        <tr>
          <td><button className="second">All Good</button></td>
        </tr>
      </ul> */}
      
    </div>
  );
}


export default App;
