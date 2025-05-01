import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <article className="p-4 rounded-xl shadow-md border border-gray-200 mb-4">
      <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
      <Link
        to={`/profile/${user.id}`}
        className="text-blue-600 hover:underline"
      >
        View profile
      </Link>
    </article>
  );
}

export default UserCard;
