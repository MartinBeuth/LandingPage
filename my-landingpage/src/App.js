
//general
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import React, { useState } from 'react';
////////////////////////////////////////////////////////////////////////
//hooks
import useLoading from './hooks/useLoading';
////////////////////////////////////////////////////////////////////////

//stylesheets
import './stylesheets/App.css';
import './stylesheets/picture.css';
import './stylesheets/top.css';
import './stylesheets/middle.css';
import './stylesheets/mediaqueries.css';
import './stylesheets/loadingspinner.css';
////////////////////////////////////////////////////////////////////////


//components
//Top_Pages
import Ueberschrift from './components/Top_Pages/Ueberschrift';
import Background from './components/Top_Pages/Background';
////////////////////////////////////////////////////////////////////////
//NavBar
import NavBar from './components/NavBar/NavBar';
////////////////////////////////////////////////////////////////////////
//Middle_pages
import Vita from './components/Middle_Pages/Vita';
import Projekte from './components/Middle_Pages/Projekte';
import Kontakt from './components/Middle_Pages/Kontakt';
////////////////////////////////////////////////////////////////////////

//cards
import MusicForCoding from './cards/MusicForCoding';
////////////////////////////////////////////////////////////////////////



function App() {
  const [isMiddleVisible, setMiddleVisible] = useState(false);
  const [isLoading, startLoading, stopLoading] = useLoading();

  const handleNavClick = (component) => {
    setMiddleVisible(true);
    startLoading();

    // simulieren eines Datenabrufs
    setTimeout(() => {
      stopLoading();
    }, 2000);
  };

  return (
    <Router>
        <div className="App">
            <div className="Picture">
                <header className="Top">
                    <NavBar onNavClick={handleNavClick} />
                    <Ueberschrift />
                    <Background />
                </header>

                {isMiddleVisible && (
                    <main className="Middle">
                        {isLoading ? (
                            <div className="loading-container">
                                <div className="loading-spinner"></div>
                                <p>Ladevorgang...</p>
                            </div>
                        ) : (
                            <Routes>
                                <Route path="/Vita" element={<Vita />} />
                                <Route path="/Projekte" element={<Projekte />} />
                                <Route path="/Kontakt" element={<Kontakt />} />
                                <Route path="/CodingMusic" element={<MusicForCoding />} />
                            </Routes>
                        )}
                    </main>
                )}
            </div>
        </div>
    </Router>
);
}

export default App;