import React , {useState} from 'react';
import '../App.css';
import DisplayDetails from './DisplayDetails';


function App() {

  const [details, setDetails] = useState({
    name:"Pranil Meherkar",
    age: "22",
    degree: "Bachelor of Technology"
  });
  return (
    <div className="App">
      <DisplayDetails detailsObj = {details} />
    </div>
  );
}

export default App;
