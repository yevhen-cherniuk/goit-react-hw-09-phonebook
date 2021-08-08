import { Formik, Form, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
import authOpetations from "../redux/auth/authOpetations";
import loaderSelectors from "../redux/loader/loaderSelectors";
import Loader from "../shared/Loader/Loader";


const LoginPage = () => {
const loader = useSelector(loaderSelectors.getLoader);
  const dispatch = useDispatch();

  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { resetForm }) => {
            dispatch(authOpetations.login(values));
            resetForm({});
          }}
        >
          <Form className="form">
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
//   login: authOpetations.login,
// };

export default LoginPage;