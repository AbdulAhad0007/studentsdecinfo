import { Analytics } from "@vercel/analytics/react"
import { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Cseiot from './Cseiot';
import Aiml from './Aiml';
import Footer from './Footer';
import MainPage from './entrypage';
import './index.css';

function App() {
    const [isAccessGranted, setIsAccessGranted] = useState(false);

    return (
        <>
            {!isAccessGranted && (
                <div className="one-container">
                    <MainPage onAccessGranted={() => setIsAccessGranted(true)} />
                </div>
            )}
            {isAccessGranted && (
                <div className="second-container">
                    <Header />
                    <Content />
                    <Cseiot />
                    <Aiml />
                    <Footer />
                    <Analytics/>
                </div>
            )}
        </>
    );
}

export default App;
