import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserIdContext } from "./context/UserId.tsx";
import { signUp, signIn, getSession } from "./services/users.tsx";
import Header from "./components/Header.tsx";
import AuthPage from "./pages/AuthPage.tsx";
import HomePage from "./pages/HomePage/index.tsx";
import NewNotePage from "./pages/NewNoteForm.tsx";
import { NotesContext } from "./context/Notes.tsx";
import { Note } from "./types.tsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const checkForSession = async () => {
      setIsLoading(true);
      const { userId } = await getSession();
      if (userId) setUserId(userId);
      setIsLoading(false);
    };

    checkForSession();
  }, [userId]);

  const renderApp = () => {
    return (
      <div className="flex flex-col w-full min-h-screen">
        <UserIdContext.Provider value={{ userId, setUserId }}>
          <NotesContext.Provider value={{ notes, setNotes }}>
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  userId ? (
                    <Navigate replace to="/notes" />
                  ) : (
                    <Navigate replace to="/signin" />
                  )
                }
              />
              <Route path="/notes" element={<HomePage />}>
                <Route path="new" element={<NewNotePage />} />
                <Route path=":noteId/edit" element={<NewNotePage />} />
              </Route>
              <Route
                path="/signup"
                element={<AuthPage heading="Sign Up" authFn={signUp} />}
              />
              <Route
                path="/signin"
                element={<AuthPage heading="Sign In" authFn={signIn} />}
              />
              <Route
                path="*"
                element={
                  <p>
                    404 Error: A page with this address could not be found{" "}
                    {":("}
                  </p>
                }
              />
            </Routes>
          </NotesContext.Provider>
        </UserIdContext.Provider>
      </div>
    );
  };

  return !isLoading ? renderApp() : "Loading...";
}

export default App;
