import { useEffect, useState } from "react";
import type { User } from "./models/User";

function Users() {
  console.log("Component Rendering");
  const [users, addUser] = useState<User[]>([]);

  useEffect(() => {
    console.log("API Calling Started");
    fetch("https://jsonplaceholder.typicode.com/todos/10")
      .then((response) => {
        console.log("Response:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Data:", data);

        addUser([data]);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  const setUser = () => {
    addUser((prevState) => [
      ...users,
      {
        userId: 1,
        id: prevState.length + 1,
        title: "New User " + (prevState.length + 1),
        completed: false,
      },
    ]);
  };
  return (
    <div>
      <h1>Users Component</h1>
      <label>Name</label>
      <input id="Name"></input>
      <ul>
        {users.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
      <button onClick={setUser}>Add</button>
    </div>
  );
}

export default Users;
