import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const AuthState = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({ name: "Joey", email: "joey@abc.com" });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {user && (
        <>
          <p>Username {user.name}</p>
          <p>Email {user.email}</p>
        </>
      )}
    </div>
  );
};
