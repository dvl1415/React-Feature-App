// import Greeting from './components/Greet';
// import {Named} from './components/Named';
// import Welcome from './components/Welcome';
// import FunctionOne from './components/FunctionOne';
// import ClassOne from './components/ClassOne';
// import Hello from './components/Hello';
// import Sample from './components/JSX/Sample';
// import FunctionBinding from './components/EventBinding/FunctionBinding';
// import ClassBinding from './components/EventBinding/ClassBinding';
import Student from './components/api/Student';


function App() {
  return (
    <div className="container">
      <Student />
      {/* <FunctionBinding />  */}
      {/* <ClassBinding /> */}
      {/* <Sample /> */}
      {/* <Hello  name="Uma"/> */}
      {/* <Greeting name="Gowtham" skill="Java"/>
      <Greeting name="Madhu" skill="C#"/>
      <Greeting name="Alam" skill="PHP"/> */}

      {/* <Welcome name="Scott" skill="Java">
        This is first welcome component
      </Welcome>
      <Welcome name="Adam" skill="C#">
      This is second welcome component
      </Welcome>
      <Welcome name="Tuan" skill="PHP">
      This is third welcome component
      </Welcome> */}
      {/* <Named />
      <Welcome />
      <FunctionOne />
      <ClassOne /> */}
    </div>
  );
}

export default App;