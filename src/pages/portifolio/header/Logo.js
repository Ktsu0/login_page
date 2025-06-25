import './css/ghost.css';
import './css/animation_ghost.css';
import './css/text_header.css';
import { useEffect } from 'react';
import { textHeader } from './../../../components/container/textEfect/text';
import { ghost, ghostShadow } from '../js/seusModulos';

function Logo() {
  useEffect(() => {
    textHeader();
    ghostShadow();
    ghost();
  }, []);

  return (
    <div id="logo_profession" className="start">
      <div id="ghost" className="loader">
        <div className="head"></div>
        <div className="flames">
          <div className="particle"></div>
        </div>
        <div className="eye">
          <div className="pupil"></div>
        </div>
      </div>
      <div className="ghost_fog"></div>
      <h1 id="programming-title" className="center_alignment"></h1>
    </div>
  );
}

export default Logo;
