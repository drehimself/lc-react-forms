import { useFormik } from 'formik';
import * as Yup from 'yup';
import './App.css';

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Name must be at least 3 characters')
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(5, 'Password must be at least 5 characters')
        .required('Password is required'),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password')], 'Your passwords do not match')
        .required('Password Confirm is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  // console.log(formik.touched);

  return (
    <div className="container">
      <div className="form-container shadow">
        <h2>Register</h2>
        <form action="#" onSubmit={formik.handleSubmit} autoComplete="off">
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              {...formik.getFieldProps('name')}
              // value={formik.values.name}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your email"
              {...formik.getFieldProps('email')}
              // value={formik.values.email}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              {...formik.getFieldProps('password')}
              // value={formik.values.password}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="form-field">
            <label htmlFor="passwordConfirm">Password Confirm</label>
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              placeholder="Confirm password"
              {...formik.getFieldProps('passwordConfirm')}
              // value={formik.values.passwordConfirm}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
            />
            {formik.errors.passwordConfirm && formik.touched.passwordConfirm ? (
              <div className="error">{formik.errors.passwordConfirm}</div>
            ) : null}
          </div>
          <div className="button-container">
            <button type="submit" className="button">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
