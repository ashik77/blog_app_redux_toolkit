import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "./userSlice";

const EditUser = () => {
  const params = useParams();
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getExistingUser = users.filter((user) => user.id === params.id);
  const { name, email } = getExistingUser[0];

  const [values, setValues] = useState({
    name,
    email,
  });

  const handleEditUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      editUser({
        id: params.id,
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "Enter Your Name" }}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "Enter Your Email" }}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};

export default EditUser;
