import "./validForm.css"




const ValidForm = () => {
    return (
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
    )
}
export default ValidForm;