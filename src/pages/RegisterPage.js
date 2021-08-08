import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import authOpetations from "../redux/auth/authOpetations";
import loaderSelectors from "../redux/loader/loaderSelectors";
import { useSelector, useDispatch } from "react-redux";

import Loader from "../shared/Loader/Loader";

const RegisterPage = () => {
  const loader = useSelector(loaderSelectors.getLoader);
  const dispatch = useDispatch();
  
  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values, { resetForm }) => {
            dispatch (authOpetations.register(values));

            // login(values);
            resetForm({});
          }}
        >
          <Form className="form">
            <label>Name</label>
            <Field type="text" name="name" />
            <label>Email</label>
            <Field type="email" name="email" />
            <label>Password</label>
            <Field type="password" name="password" />
            <button type="submit">Login</button>
          </Form>
        </Formik>
      )}
    </>
  );
};

// const mapStateToProps = (state) => ({
//   loader: loaderSelectors.getLoader(state),
// });

// const mapDispatchToProps = {
//   registration: authOpetations.register,
// };

export default RegisterPage;