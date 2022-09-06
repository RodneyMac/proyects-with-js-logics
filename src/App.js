import './App.css';
import Nav from './components/Nav/Nav';
import Chat from './components/Chat/Chat';
import Crud from './components/Crud/Crud';
import LogicButtons from './components/Logic Buttons/LogicButtons';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/logic-buttons" element={<LogicButtons/>}/>
        <Route path="/crud" element={<Crud/>}/>
      </Routes>
    </>
  );
}

export default App;
