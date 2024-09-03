import React from 'react';
import '../../stylesheets/projekte.css';
import '../../stylesheets/mediaqueries2.css';

const Projekte=()=>{
    return(
        <div>
            <h2>Projekte</h2> 
        <table>
      <thead>
        <tr>
          <th>Projekte</th>
          <th>GitHub-Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Data Analytics</td>
          <td>
  <a href="https://github.com/MartinBeuth/Data-Analytics" style={{ textDecoration: 'none', color: 'inherit' }}>
    Analyse von statistischen Daten
  </a>
</td>
        </tr>
        <tr>
          <td>Background Music</td>
          <td>
  <a href="https://github.com/MartinBeuth/Background-Music" style={{ textDecoration: 'none', color: 'inherit' }}>
    Hintergrundmusik, die automatisch erzeugt wird
  </a>
</td>
        </tr>
        <tr>
          <td>Data Scraping</td>
          <td>
  <a href="https://github.com/MartinBeuth/Data-Scraping" style={{ textDecoration: 'none', color: 'inherit' }}>
    gewinnen von Daten aus verschieden Quellen
  </a>
</td>
        </tr>
      </tbody>
    </table>
    </div>
    );
};

export default Projekte;