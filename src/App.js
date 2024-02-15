import "./app.css"
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path= "/" element = { <Login/> }/>
      <Route path= "/profile" element = { <Profile/> } /> 
    </Routes>
  )
}

export default App;
