import { useOutletContext } from "react-router-dom";
import UserCard from "../components/UserCard";

function Home() {
  const users = useOutletContext(); // Get users from context passed by App.js

  return (
    <main>
      <h1>Home!</h1>
      {users.length > 0 ? (
        users.map(user => <UserCard key={user.id} user={user} />)
      ) : (
        <p>Loading users...</p>
      )}
    </main>
  );
}

export default Home;
