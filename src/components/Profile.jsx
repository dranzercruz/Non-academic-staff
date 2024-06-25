import '../css/profile.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Profile = () => {
    return(
        <div>
            <Navbar />
            <div id='profile-contaner'>
                <div>
                    <div className='profile-heading'>
                        <h3>Personal</h3>
                    </div>
                    <div className='profile-attributes'>
                        <img src="https://cdn-icons-png.flaticon.com/128/3602/3602123.png" alt="" />
                        <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="" />
                    </div>
                </div>
                
                <div className='small-navbar'>
                    <p><img src="https://cdn-icons-png.flaticon.com/128/8188/8188360.png" alt="" /><a href="#">Edit Profile</a></p>
                    <p><a href="#">Security Settings</a></p>
                    <p><a href="#">Notification</a></p>
                    <p><a href="#">Subscriptions</a></p>

                </div>

                <div className='profile-img'>
                    <img src="" alt="" />
                </div>

                <div className='profile-namebox'>
                    <label htmlFor="firstname">First Name Change
                        <input type="text" name="firstname" id="firstname" required placeholder=''/>
                    </label>
                    <label htmlFor="lastname">Last Name Change
                        <input type="text" name="lastname" id="lastname" required placeholder=''/>
                    </label>
                </div>

                <div className='profile-emailbox'>
                    <label htmlFor="emailAddress">Email Address
                        <input type="text" name="emailAddress" id="emailAddress" required placeholder=''/>
                    </label>
                </div>

                <div className='profile-phoneNumber'>
                    <label htmlFor="phoneNumber">Email Address
                        <input type="number" name="phoneNumber" id="phoneNumber" required placeholder=''/>
                    </label>
                </div>

                <div className='profile-streetAddress'>
                    <label htmlFor="streetAddress">Email Address
                        <input type="text" name="streetAddress" id="streetAddress" required placeholder=''/>
                    </label>
                </div>

                <div className='profile-city'>
                    <label htmlFor="zipCode">Zip Code Update
                        <input type="number" name="zipCode" id="zipCode" required placeholder=''/>
                    </label>
                    <label htmlFor="city">City Change
                        <input type="text" name="city" id="city" required placeholder=''/>
                    </label>
                </div>

                <div className='profile-state'>
                    <label htmlFor="state_update">State Update
                        <input type="text" name="state_update" id="state_update" required placeholder=''/>
                    </label>
                    <label htmlFor="country_update">Country Update
                        <input type="text" name="country_update" id="country_update" required placeholder=''/>
                    </label>
                </div>

                <div className='submit_btn'>
                    <input type="button"  value="Submit"/>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Profile;
