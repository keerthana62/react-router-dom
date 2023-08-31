import { Link,Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import './App.css';
import Login from './Protected-route/Login';
import Admin from './Protected-route/Admin';
import Dashboard from './Protected-route/Dashboard';
import Help from './Protected-route/Help';
import Notfound from './Protected-route/Notfound';
import useAuth from'./Protected-route/useAuth';
import ProtectedRoute1 from './Protected-route/ProtectedRoute1';
//import Adminlogin from './Protected-route/Adminlogin';
import UseAuth1 from './Protected-route/useAuth1';
import ProtectedRoute2 from './Protected-route/ProtectedRoute2';
import Adminlogin from './Protected-route/Adminlogin';


function App(){
  let[isAuth,login,logout]=useAuth(false);
  let[isAuth1,adminlogin,adminlogout]=  UseAuth1(false);
  return(
      <Router>
      <Link to="/">Login</Link><br/>
      <Link to="/admin">Admin</Link><br/>
      <Link to="/dashboard">Dashboard</Link><br/>
      <Link to="/help">Help</Link><br/>

      {
        isAuth?(
          <>
          <div>You Logged in</div>
          <button onClick={logout}>Logout</button>
          </>)
          :(
            <>
            <button onClick={login}>Login</button></>
        )
      }

{
        isAuth1?(
          <>
          <div>Admin Logged in</div>
          <button onClick={adminlogout}>Admin Logout</button>
          </>)
          :(
            <>
            <button onClick={adminlogin}>Admin Login</button></>
        )
      }
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/adminlogin' element={<Adminlogin/>}/>
        <Route path='/admin' element={<ProtectedRoute2 auth={isAuth1}><Admin/></ProtectedRoute2>}/>
        <Route path='/dashboard' element={<ProtectedRoute1 auth={isAuth}><Dashboard/></ProtectedRoute1>}></Route>
        <Route path='/help' element={<ProtectedRoute1 auth={isAuth}><Help/></ProtectedRoute1>}></Route>
        <Route path='/*' element={<Notfound/>}/>

      </Routes>
    </Router>
  );
}
    export default App;
