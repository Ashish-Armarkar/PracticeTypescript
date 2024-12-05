import { useState } from "react";

interface PROPSTYPE {
  handleSubmit: (user: { name: string; email: string }) => void;
}

interface USERDATA {
  name: string;
  email: string;
}
const UserForm: React.FC<PROPSTYPE> = ({ handleSubmit }) => {
  const [user, setUser] = useState<USERDATA>({
    name: "",
    email: "",
  });

  return (
    <>
      <form
        action=""
        onSubmit={(event: React.SyntheticEvent) => {
          event.preventDefault();
          handleSubmit(user);
          setUser({
            name: "",
            email: "",
          });
        }}
      >
        <input
          type="text"
          placeholder="Name"
          name="Name"
          value={user.name}
          required
          onChange={(e) => {
            let newUserName: string = e.target.value;
            setUser({
              name: newUserName,
              email: user.email,
            });
          }}
        />
        <input
          type="email"
          placeholder="Email"
          name="Email"
          value={user.email}
          required
          onChange={(e) => {
            let newUserEmail: string = e.target.value;
            setUser({
              name: user.name,
              email: newUserEmail,
            });
          }}
        />
        <button type="submit">Click</button>
      </form>
    </>
  );
};
export default UserForm;
