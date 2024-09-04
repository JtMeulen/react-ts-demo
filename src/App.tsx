import { Greet } from "./components/Greet";

import "./App.css";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import { AuthState } from "./components/AuthState";
import { Counter } from "./components/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { UseRefMutable } from "./components/UseRefMutable";

function App() {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <Container styles={{ border: "1px solid red", padding: "1rem" }}>
          <Greet name={"Joey"} messageCount={20} isLoggedIn={true} />
          <Person name={{ first: "Bruce", last: "Wayne" }} />
          <PersonList
            names={[
              { first: "Bruce", last: "Wayne" },
              { first: "Clark", last: "Kent" },
              { first: "Tony", last: "Stark" },
            ]}
          />
          <Status status={"success"} />
          <Heading name="Joey">
            <span>Wrapped in a JSX element</span>
          </Heading>
          <Heading name="Joey">Direct string children</Heading>
          <Button
            handleClick={(event, id) =>
              console.log("Button clicked", event, id)
            }
            text="Click me"
          />
          <Input
            value=""
            handleChange={(event) => console.log(event.target.value)}
          />
          <AuthState />
          <Counter />
        </Container>
        <Box />
        <User />
        <UseRefMutable />
      </UserContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
