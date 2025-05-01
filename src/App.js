import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar"; // Optional if you have one

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((r) => r.json())
      .then(setUsers)
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet context={users} />
      </main>
    </>
  );
}

export default App;
