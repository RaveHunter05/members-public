import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { FormInput } from "../../forms/SimpleFieldForm";

import { loginService } from "../../services/auth";

import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/slices/authSlice";
import { getToken } from "../../store/selectors/auth";

import { Navigate, useLocation, useNavigate } from "react-router";

export const Auth = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const resultLogin = await loginService({
      username: values.username,
      password: values.password,
    });

    if (resultLogin?.data?.token) {
      dispatch(signIn(resultLogin.data.token));

      alert("Successfully logged in!");
      setTimeout(navigate("/"), 100000);
    } else {
      alert(resultLogin.message);
    }
  };
  return (
    <div>
      <h2>Please Sign In</h2>
      <Formik
        initialValues={{
          username: "sarah",
          password: "connor",
        }}
        onSubmit={handleSubmit}
        validationSchema={Yup.object({
          username: Yup.string().required(),
          password: Yup.string().required(),
        })}
      >
        {() => (
          <Form>
            <FormInput label="username" type="text" name="username" />

            <FormInput label="password" type="password" name="password" />

            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
