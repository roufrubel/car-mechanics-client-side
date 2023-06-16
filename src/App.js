import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>

            <Route exact path="/" element={<Home />} />
            <Route  path="/home" element={<Home />} />
            <Route  path="/login" element={<Login />} />
            <Route  path="/addservice" element={<AddService />} />
            <Route  path="/manageservices" element={<ManageServices />} />

            <Route element={<PrivateRoute />}>
              <Route path="/booking/:serviceId" element={<Booking />} />
            </Route>

            {/* <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute> */}

            <Route  path="*" element={<NotFound />} />
            </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
