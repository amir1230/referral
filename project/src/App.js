// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from "react-router-dom";
// import Register from "./components/Register";
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";
// import Admin from "./components/Admin";
// import Sidebar from "./components/Sidebar";
// import ForgetPassword from "./components/ForgetPassword";
// import ResetPassword from "./components/ResetPassword";
// import "./App.css";
// import AdminForgotPassword from "./components/AdminForgotPassword";
// import AdminResetPassword from "./components/AdminResetPassword";
// import SimpleLayout from "./SimpleLayout";
// import MainLayout from "./MainLayout";
// import ShareIssue from "./components/ShareIssue";

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <div className="content">
//           <Switch>
//           <Route path="/share-issue">
//               <SimpleLayout>
//                 <ShareIssue />
//               </SimpleLayout>
//             </Route>
//             <Route exact path="/">
//               <Redirect to="/login" />
//             </Route>
//             <Route path="/register">
//               <MainLayout>
//                 <Register />
//               </MainLayout>
//             </Route>
//             <Route path="/login">
//               <MainLayout>
//                 <Login/>
//               </MainLayout>
//             </Route>
//             <Route path="/dashboard">
//               <MainLayout>
//                 <Dashboard/>
//               </MainLayout>
//             </Route>
//             <Route path="/admin">
//               <MainLayout>
//                 <Admin />
//               </MainLayout>
//             </Route>

//             <Route path="/forget-password">
//               <MainLayout>
//                 <ForgetPassword />
//               </MainLayout>
//             </Route>
//             <Route path="/reset-password/:resetToken">
//               <MainLayout>
//                 <ResetPassword />
//               </MainLayout>
//             </Route>
//             <Route path="/admin-forgot-password">
//             <MainLayout>
//               <AdminForgotPassword />
//               </MainLayout>
//             </Route>
//             <Route path="/admin-reset-password/:resetToken">
//               <MainLayout>
//                 <AdminResetPassword />
//               </MainLayout>
//             </Route>
//           </Switch>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Admin from "./components/Admin";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";
import "./App.css";
import AdminForgotPassword from "./components/AdminForgotPassword";
import AdminResetPassword from "./components/AdminResetPassword";
import SimpleLayout from "./SimpleLayout";
import MainLayout from "./MainLayout";
import ShareIssue from "./components/ShareIssue";
import SendMessage from "./components/SendMessage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/share-issue">
          <SimpleLayout>
            <ShareIssue />
          </SimpleLayout>
        </Route>

        <Route path="/send-message">
          <SimpleLayout>
            <SendMessage />
          </SimpleLayout>
        </Route>

        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route>
          <div className="app">
            <div className="content">
              <Switch>
                <Route path="/register">
                  <MainLayout>
                    <Register />
                  </MainLayout>
                </Route>
                <Route path="/login">
                  <MainLayout>
                    <Login />
                  </MainLayout>
                </Route>
                <Route path="/dashboard">
                  <MainLayout>
                    <Dashboard />
                  </MainLayout>
                </Route>
                <Route path="/admin">
                  <MainLayout>
                    <Admin />
                  </MainLayout>
                </Route>
                <Route path="/forget-password">
                  <MainLayout>
                    <ForgetPassword />
                  </MainLayout>
                </Route>
                <Route path="/reset-password/:resetToken">
                  <MainLayout>
                    <ResetPassword />
                  </MainLayout>
                </Route>
                <Route path="/admin-forgot-password">
                  <MainLayout>
                    <AdminForgotPassword />
                  </MainLayout>
                </Route>
                <Route path="/admin-reset-password/:resetToken">
                  <MainLayout>
                    <AdminResetPassword />
                  </MainLayout>
                </Route>
              </Switch>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
