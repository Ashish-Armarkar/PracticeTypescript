import { useEffect, useState } from "react";
import { UsersType } from "./Modals/UsersTypes";
import { fetchUser } from "../Services/ApiCall";
const Users: React.FC = () => {
  const [usersData, setUsersData] = useState<UsersType[] | null>(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let res = await fetchUser();
        if (!res) {
          throw new Error("URL Problem");
        }
        setUsersData(res);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      {usersData !== null
        ? usersData.map((i) => <h1 key={i.id}>{i.name.firstname}</h1>)
        : null}
      <h1></h1>
    </>
  );
};

export default Users;
