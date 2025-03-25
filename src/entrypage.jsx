import './index.css';
import { useState } from 'react';

function MainPage({ onAccessGranted }) {
    const [inputPassword, setInputPassword] = useState('');
    const correctPassword = '230240';

    const handleSubmit = () => {
        if (inputPassword === correctPassword) {
            onAccessGranted();
        } else {
            alert('Incorrect password! Please try again.');
        }
    };

    return (
        <div className="mainpage">
            <h1 className="welcome">WELCOME</h1>
            <p className="welmess">This data is confidential. Enter first 6 digits of your Roll No to enter!</p>
            <input
                type="password"
                name="password"
                id="password"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
            />
            <button className="btn" onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default MainPage;
