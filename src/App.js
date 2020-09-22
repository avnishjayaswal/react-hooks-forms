import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css' ;

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <section class="login-block">
    <div className="container-fluid auth-box card">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="md-col-6 offset-4 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              name="First name"
              ref={register({ required: true, maxLength: 80 })}
            />
          </div>
        </div>

        <div className="row">
          <div className="md-col-6 offset-4 mt-3">
            <input
              className="form-control"
              type="text"
              placeholder="Last name"
              name="Last name"
              ref={register({ required: true, maxLength: 100 })}
            />
          </div>
        </div>

        <div className="row">
          <div className="md-col-6 offset-4 mt-3">
            <input
              className="form-control"
              type="text"
              placeholder="Email"
              name="Email"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
          </div>
        </div>

        <div className="row">
          <div className="md-col-6 offset-4 mt-3 mb-3">
            <input type="submit" />
          </div>
        </div>
      </form>
    </div>
    </section>
  );
}
