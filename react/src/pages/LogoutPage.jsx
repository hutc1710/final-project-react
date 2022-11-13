// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { authActions } from "../store/auth.redux";

// import { adminActions } from "../store/admin.redux";

// const Logout = () => {
//   const [userName, setUserName] = useState("");
//   const loggedIn = useSelector((state) => state.auth.loggedIn);
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     localStorage.removeItem("tokenKey");
//     dispatch(authActions.logout());
//     dispatch(adminActions.noAdmin());
//   };
//   return (
//     <>
//       {loggedIn ? (
//         <div className="mb-3">
//           <h4>Hey {userName} :)</h4>
//           <p> Do you want to log out?</p>
//           <button
//             onClick={handleLogout}
//             type="button"
//             className="btn btn-danger"
//           >
//             Logout
//           </button>
//         </div>
//       ) : (
//         <div className="mb-3">
//           <p>
//             You logged out successfully !
//             <br />
//             Hope to see you here again :)
//           </p>
//         </div>
//       )}
//     </>
//   );
// };

// export default Logout;
