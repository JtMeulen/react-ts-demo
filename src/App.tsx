import { Greet } from "./components/Greet";

import "./App.css";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";

function App() {
  return (
    <>
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
        <h3>Wrapped in a JSX element</h3>
      </Heading>
      <Heading name="joey">Direct string children</Heading>
    </>
  );
}

export default App;
