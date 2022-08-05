import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Join from "./components/Join";
import Chat from "./components/Chat";

const App = () => {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<Join></Join>}></Route>
        <Route path='/chat' element={<Chat></Chat>}></Route>
       </Routes>
    </Router>
  )
}

export default App