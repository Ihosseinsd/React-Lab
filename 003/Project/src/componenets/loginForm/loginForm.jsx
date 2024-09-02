import { useState } from "react";
import "./loginForm.css";
import { useRef } from "react";

const LoginForm = () => {
  const inputRef = useRef();
  const [hasError, setHasError] = useState(false);
  const handleValid = (event) => {
    event.preventDefault();
    const value = inputRef.current.value;
    const pattern = /^09[0|1|2|3][0-9]{8}$/;
    setHasError(!pattern.test(value));
  };

  return (
    <>
      <div className="login-box">
        <p>Login</p>
        <form>
          <div className="user-box">
            <input
              ref={inputRef}
              className={`${"input"} ${hasError ? "error" : ""}`}
              placeholder="Starts With 09..."
              required=""
              name=""
              type="text"
            />
            {hasError && (
              <span id="spn">Please Enter a Valid Phone Number</span>
            )}
            <label id="lab">Phone Number</label>
          </div>
          <a onClick={handleValid} href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
