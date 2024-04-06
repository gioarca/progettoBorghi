import React from "react";
import Presentazione from "../components/Presentazione";
import { motion } from "framer-motion";
import Buttons from "../components/Buttons";
import Profile from "../components/Profile";
// import { useAuth0 } from "@auth0/auth0-react/src/";
// import Loader from "../components/Loader";

function Home() {
  // const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
  //   useAuth0();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  // if (error) {
  //   return <div>Oops... {error.message}</div>;
  // }

  // if (isAuthenticated) {
  //   return (
  //     <div>
  //       Hello {user.name}{" "}
  //       <button
  //         onClick={() =>
  //           logout({ logoutParams: { returnTo: window.location.origin } })
  //         }
  //       >
  //         Log out
  //       </button>
  //     </div>
  //   );
  // } else {
  //   return <button onClick={() => loginWithRedirect()}>Log in</button>;
  // }

  return (
    <motion.div>
      {/* {error && <p>Authentication Error</p>}
      {!error && isLoading && <Loader />}
      {!error && !isLoading && (
        <> */}
      <Presentazione />
      <Buttons />
      {/* <Profile /> */}
      {/* </> */}
      {/* )} */}
    </motion.div>
  );
}

export default Home;
