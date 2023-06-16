import React from 'react';
import useAuth from './../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
        const navigate = useNavigate();
        // console.log(location.state?.from)
        const navigate_uri = location.state?.from || "/home";

    const handleGoogleLogin =()=>{
        signInUsingGoogle()
        .then(result => {
            navigate(navigate_uri)
        })
    }

    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;




// import React from 'react';
// import useAuth from './../../../hooks/useAuth';

// const Login = () => {
//     const { signInUsingGoogle } = useAuth();
//     return (
//         <div>
//             <h2>Please Login</h2>
//             <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
//         </div>
//     );
// };

// export default Login;