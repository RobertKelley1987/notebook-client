import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { UserIdContext } from "./context/UserId.tsx";
import { signUp, signIn, getSession, signOut } from "./services/users.tsx";
import AuthPage from "./pages/AuthPage.tsx";

function App() {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const checkForSession = async () => {
      const { userId } = await getSession();
      if (userId) setUserId(userId);
    };

    checkForSession();
  }, [userId]);

  const handleClick = async () => {
    const { userId } = await signOut();
    setUserId(userId);
  };

  return (
    <div className="App">
      <h1>Notes App</h1>
      <button onClick={handleClick}>Log Out</button>
      <Routes>
        <Route path="/" element={userId ? "secret page" : "not logged in"} />
        <Route
          path="/signup"
          element={
            <UserIdContext.Provider value={{ userId, setUserId }}>
              <AuthPage authFn={signUp} />
            </UserIdContext.Provider>
          }
        />
        <Route
          path="/signin"
          element={
            <UserIdContext.Provider value={{ userId, setUserId }}>
              <AuthPage authFn={signIn} />
            </UserIdContext.Provider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
