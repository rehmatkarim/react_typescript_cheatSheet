import React, { useRef, useState, useEffect } from "react";
const users = [
  { name: "rehmat", age: 26 },
  { name: "zubair", age: 25 },
  { name: "amjad", age: 27 },
  { name: "huzaifa", age: 27 },
];
const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);
  const searchUser = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setName("");
    setUser(foundUser);
  };
  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={searchUser}>Search User</button>
      <div>
        <h1>{user && user.name}</h1>
        <p>{user && user.age}</p>
      </div>
    </div>
  );
};

export default UserSearch;
