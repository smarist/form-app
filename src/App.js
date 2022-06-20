import React from "react"
import Types from "./Pages/Types";
import General from "./Pages/General";
import Teams from "./Pages/Teams";
import Data from "./Pages/Data";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="app">
      <form>
        <Routes>
          <Route path="/"  exact element={<Types/>}/>  
          <Route path="/general" element={<General/>}/>
          <Route path="/teams" element={<Teams/>}/>
          <Route path="/data" element={<Data/>}/>   
        </Routes>   
        </form>   
    </div>
  );
}

export default App;


/*
<Routes>
     <Route path="/"  exact element={<Main/>}/>
            <Route exact path="/:name" element={<CountryDetails/>}/>       
        </Routes> 

            */