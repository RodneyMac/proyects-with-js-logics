import './App.css';
import Chat from './components/Chat/Chat';
import Crud from './components/Crud/Crud';
import LogicButtons from './components/Logic Buttons/LogicButtons';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/data-picker" element={<LogicButtons/>}/>
        <Route path="/crud" element={<Crud/>}/>
      </Routes>
    </>
  );
}

export default App;
