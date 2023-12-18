import "./Login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="login__text">
        <h1>facebook</h1>
        <p>
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <form className="login__form">
        <div>
          <input type="text" placeholder="Email address or phone number" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
        <div className="login__btn">
          <button>Log In</button>
          <a href="">Forgotten password</a>
        </div>

        <div className="registration">
          <button className="registration__btn">Create new account</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
