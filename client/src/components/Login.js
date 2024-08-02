import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function Login({onLogin}) {
  const [username, setUsername] = useState("");

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch("/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ username }),
  //   }).then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => onLogin(user));
  //     }
  //   });
  // }
  const formSchema= yup.object().shape(
    {
      email: yup.string().email("Invalid email").required("Must enter email")
    })

  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log(values)
    //   fetch("/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(values.username ),
    // }).then((r) => {
    //   if (r.ok) {
    //     r.json().then((user) => onLogin(user));
    //   }
    // });
  },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h3>Login With Email</h3>
      <label htmlFor="username">Username: </label>
      <input
            type="text"
            id="username"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
          /><br/><br/>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;