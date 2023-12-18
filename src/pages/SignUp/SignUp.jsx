/* eslint-disable react/no-unescaped-entities */
import "./SignUp.css";

export const SignUp = () => {
  return (
    <div className="signUp">
      <div className="signUp__heading">
        <h1>facebook</h1>
      </div>
      <form className="signUp__form">
        <div className="signUp__form--text">
          <h4>Create a new account</h4>
          <p>It's quick and easy</p>
        </div>
        <div className="flex user">
          <input type="text" name="firstName" placeholder="First name" />
          <input type="text" name="surname" placeholder="Surname" />
        </div>
        <div>
          <input
            type="email"
            placeholder="Mobile number or email address"
            className="w-100"
          />
        </div>
        <div>
          <input type="password" placeholder="New password" className="w-100" />
        </div>
        <div className="birthdate">
          <label>Date of Birth</label>
          <div className="flex">
            <select name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
            <select name="" id="">
              <option value="">January</option>
              <option value="">February</option>
              <option value="">March</option>
              <option value="">April</option>
              <option value="">May</option>
              <option value="">June</option>
              <option value="">July</option>
              <option value="">August</option>
              <option value="">September</option>
              <option value="">October</option>
              <option value="">November</option>
              <option value="">December</option>
            </select>
            <select name="" id="">
              <option value="">1990</option>
              <option value="">1991</option>
              <option value="">1992</option>
              <option value="">1993</option>
              <option value="">1994</option>
              <option value="">1995</option>
              <option value="">1996</option>
              <option value="">1997</option>
              <option value="">1998</option>
              <option value="">1999</option>
              <option value="">2000</option>
              <option value="">2001</option>
              <option value="">2002</option>
              <option value="">2003</option>
              <option value="">2004</option>
              <option value="">2005</option>
              <option value="">2006</option>
              <option value="">2007</option>
              <option value="">2008</option>
              <option value="">2009</option>
              <option value="">2010</option>
              <option value="">2011</option>
              <option value="">2012</option>
              <option value="">2013</option>
              <option value="">2014</option>
              <option value="">2015</option>
              <option value="">2016</option>
              <option value="">2017</option>
              <option value="">2018</option>
              <option value="">2019</option>
              <option value="">2020</option>
              <option value="">2021</option>
              <option value="">2022</option>
              <option value="">2023</option>
            </select>
          </div>
        </div>
        <div className="gender">
          <label>Gender</label>
          <div className="flex">
            <label className="flex">
              <span>Female</span>
              <input type="radio" name="gender" />
            </label>
            <label className="flex">
              <span>Male</span>
              <input type="radio" name="gender" />
            </label>
            <label className="flex">
              <span>Custom</span>
              <input type="radio" name="gender" />
            </label>
          </div>
        </div>
        <div className="terms">
          <p>
            By clicking Sign Up, you agree to our <a href="">Terms</a> ,
            <a href="">Privacy Policy</a> and <a href="">Cookies Policy</a>. You
            may receive SMS notifications from us and can opt out at any time.
          </p>
        </div>
        <div className="signUp__btn">
          <button>Sign Up</button>
          <p>Already have an account?</p>
        </div>
      </form>
    </div>
  );
};
