import logo from './logo.svg';
import './App.css';
import SubmitJob from "./components/submitJobs"
import ViewJobs from './components/viewjobs';
import { BrowserRouter, Routes, Route,Router} from "react-router-dom";
import { Link } from 'react-router-dom';


  import ReactUploadImage  from "./components/applyform";
function App() {
  return (
    <>
   <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />      
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<ViewJobs/>}></Route>
      <Route path="/add" element={<SubmitJob/>}></Route>
      <Route exact path="add" element={<SubmitJob/>}></Route>
        <Route path="/apply/:id" element={<ReactUploadImage />}>       
        </Route>
      </Routes>
    </BrowserRouter>
     
      
      </header>
    </div>
    </>
 
  );
}

export default App;
