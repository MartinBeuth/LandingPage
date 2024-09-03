import React from 'react';
import '../../stylesheets/vita.css';
import '../../stylesheets/mediaqueries2.css';

const Vita = () => {
    return (
        <div>
        <h2>Vita</h2>  
      <table>
        <thead>
          <tr>
            <th>Kategorie</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Berufserfahrung</td>
            <td>
              <ul>
                
                  <li>Webanwendungen, technische Konzepte, Landingpages</li>
                
                </ul>
              
            </td>
          </tr>
          <tr>
            <td>Ausbildung</td>
            <td>Bachelor of Science in Medien-Informatik</td>
          </tr>
        </tbody>
      </table>
      </div>
    );
  };
  

export default Vita;
