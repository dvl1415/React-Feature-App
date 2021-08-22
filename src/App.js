import Greet from './components/Greet';
import {Named} from './components/Named';
import Welcome from './components/Welcome';
import FunctionOne from './components/FunctionOne';
import ClassOne from './components/ClassOne';

function App() {
  return (
    <div className="App">
      <h1>Welcome to ReactJS</h1>
      {/* <Greet name = "Dhaval" skill = "JavaScript"/>
      <Greet name = "Krina" skill = "ReactJS"/>
      <Greet name = "Rushi" skill = "NodeJS"/> */}

      <Welcome name = "Dhaval" skill = "JavaScript"/>
      <Welcome name = "Krina" skill = "ReactJS"/>
      <Welcome name = "Rushi" skill = "NodeJS"/>
      {/* <Named />
      <Welcome />
      <FunctionOne />
      <ClassOne /> */}
    </div>
  );
}

export default App;
//Remaining Git Upload
