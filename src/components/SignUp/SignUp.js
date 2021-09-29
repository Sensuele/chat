import React from "react";
import useForm from "../../customHooks/useForm";
import validateInfo from "../validateInfo";

const SignUp = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validateInfo
  );
  return (
    <div className="form-wrap">
      <form className="form" action="" onSubmit={handleSubmit}>
        <h1>Create your account</h1>

        <div className="form__inputs">
          <label htmlFor="username" className="form__label">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            className="form__input"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form__inputs">
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="form__input"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form__inputs">
          <label htmlFor="password" className="form__label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="form__input"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form__inputs">
          <label htmlFor="password2" className="form__label">
            Confirm password
          </label>
          <input
            type="password"
            id="password2"
            name="password2"
            placeholder="Confirm your password"
            className="form__input"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form__btn" type="submit">
          Sign up
        </button>
        <span className="form__login">
          Already have an account? Login <a href="/">here</a>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
