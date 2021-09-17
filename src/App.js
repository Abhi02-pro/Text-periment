
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import React, {useState} from 'react'
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      message:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = "#001326";
      showAlert("Dark Mode has been Enabled", "success");
    }else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode has been Disabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Text-periment" aboutText="About us" mode={mode} toggleMode={toggleMode} />
        <div style={{height: "30px"}}>
          <Alert alert={alert} />
        </div>

        <Switch>
          
          <Route exact path="/">
            <Textform heading="Enter the text to analyse :" mode={mode} alert={showAlert} />
          </Route>
          <Route exact path="/about">            
            <About mode={mode} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
