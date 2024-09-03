import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({ name: "John Doe", email: "abc@.abc.com" });
  };

  const handleLogout = () => {
    userContext.setUser(null);
  };

  return (
    <>
      <button onClick={handleLogin}>Log in</button>
      <button onClick={handleLogout}>Log out</button>
      {userContext.user && (
        <>
          <div>Username is {userContext.user.name}</div>
          <div>Email is {userContext.user.email}</div>
        </>
      )}
    </>
  );
};
