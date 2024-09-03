import React from 'react';
import '../../stylesheets/kontakt.css';
import '../../stylesheets/mediaqueries2.css';

const Kontakt=()=>{
    return(
        <div>
            <h2>Kontakt</h2> 
        <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>E-Mail</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Martin Schilling</td>
          <td>
          <a href="mailto:martinbeuth@tutanota.com"  style={{ color: 'inherit', textDecoration: 'none' }}>martinbeuth@tutanota.com</a>
</td>
        </tr>
        
      </tbody>
    </table>
    </div>
    );
};

export default Kontakt;