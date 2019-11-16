import React, { useState, useEffect } from "react";
import app from "./base.js";

// const AuthContext = React.createContext();

// class AuthProvider extends React.Component {
//     state = {
//         isAuth: false
//     }

//     // constructor() {
//     //     super()
//     //     this.login = this.login.bind(this)
//     //     this.signOut = this.logout.bind(this)
//     // }

//     login() {
//         this.setState({ isAuth: true })
//     }

//     signOut() {
//         this.setState({ isAuth: false })
//     }

//     render() {
//         return (
//             <AuthContext.Provider
//                 value={{
//                     state: this.state
//                 }}>
//                 {this.props.children}
//             </AuthContext.Provider>

//         )
//     }
// }

// const AuthConsumer = AuthContext.Consumer;

// export { AuthProvider, AuthConsumer }
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};