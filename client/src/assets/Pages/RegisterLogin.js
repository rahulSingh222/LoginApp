import Wrapper from "../Register";
import FormRow from "../FormRow";
import axios from "axios";
import { useState, useEffect } from "react";
import { loginUser, registerUser } from "../Routes";
// import { useNavigate } from "react-router-dom";

const intitalState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

function RegisterLogin() {

  const [values, setValues] = useState(intitalState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };


  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
        // toast.error("Please fill all val");
    }

    //if ismember true login user
    if (isMember) {
      loginUser(setIsLoading, values);
      return;
    }
    // if isMember is false than register user
    registerUser(setIsLoading, values);
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  //   useEffect(() => {
  //     if(user) {
  //       setTimeout(() => {
  //         navigate('/');
  //       }, 2000)
  //     }
  //   }, [user]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* name field */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email field */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button
          style={{ backgroundColor: "#A0A" }}
          type="submit"
          className="btn btn-block"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "submit"}
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button
            type="button"
            className="member-btn"
            onClick={toggleMember}
            style={{ color: "#A0A" }}
          >
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}

export default RegisterLogin;
