import './index.css';

function Footer() {
    return (
        <footer>
            <p className="warning">
                <span className="note">NOTE: &nbsp;</span>
                We are unable to fetch the Date of Birth of persons with 00-00-0000. <br />
                If you know someone's D.O.B, email us, and we will update it ASAP.
            </p>
            
            <div className="form-container">
                <form 
                    action="mailto:noreply.noperson@gmail.com" 
                    method="post" 
                    encType="text/plain"
                >
                    <input 
                        type="text" 
                        id="text" 
                        name="name" 
                        placeholder="Enter your name" 
                        required 
                    />
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Enter your email" 
                        required 
                    />
                    <textarea 
                        id="course" 
                        name="course" 
                        placeholder="Enter detail of that person.." 
                        required
                    ></textarea>
                    <button id='button' type="submit">Submit</button>
                </form>
            </div>

            <p className="footer">&copy; Made with ❤ by SDEC</p>
        </footer>
    );
}

export default Footer;
