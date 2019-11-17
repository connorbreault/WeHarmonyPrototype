// import React, { useState, useEffect } from "react";
// import Login from "./pages/Login/Login.js";
// import app from "./base.js";

// export const AuthContext = React.createContext();

// export const AuthProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState(null);

//     useEffect(() => {
//         app.auth().onAuthStateChanged(setCurrentUser);
//     }, []);

//     return (
//         <AuthContext.Provider
//             value={{
//                 currentUser
//             }}
//         >
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const AuthConsumer = AuthContext.Consumer;

import React from "react";

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
    state = {
        currentUser: false
    }

    constructor() {
        super()
        this.login = this.login.bind(this)
        this.signOut = this.signOut.bind(this)
    }

    login() {
        this.setState({ currentUser: true })
        // app.auth().signInWithEmailAndPassword();
    }

    signOut() {
        // app.auth().signOut()
        this.setState({ currentUser: false })
    }

    render() {
        return (
            <AuthContext.Provider
                value={{
                    state: this.state
                }}>
                {this.props.children}
            </AuthContext.Provider>

        )
    }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer }