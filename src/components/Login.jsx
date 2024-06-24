import '../css/login.css'

const Login = () => {
  return (
    <div className='main'>
        <div className="login-container">
            <form action="">

                <div className="logo">
                    <img src="https://w1.pngwing.com/pngs/659/960/png-transparent-gold-badge-university-of-ceylon-university-of-sri-lanka-higher-education-college-faculty-university-of-peradeniya-logo-thumbnail.png" alt="Uni-logo" />
                </div>

                <h1>UOP</h1>

                <div className="email-box">
                    <label htmlFor="email">Email Address
                        <input type="email" name="Email" id="email" required placeholder='Email Address' autoFocus/>
                    </label>
                </div>

                <div className="passwd-box">
                    <label htmlFor="password">Password
                        <input type="password" name="Password" id="password" required placeholder='*****************'/>
                    </label>
                </div>

                <div className="login-btn">
                    <input type="submit" value="Log in"/>
                </div>

                <div className="signup-opt">
                    <p>Do you need new account?</p>
                    <input type="button"  value="Sign up"/>
                </div>

                <div className="others">
                    <a href="">Forget Password?</a>
                    {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
                         in fug.</p> */}
                </div>

            </form>

        </div>
    </div>
  )
}

export default Login