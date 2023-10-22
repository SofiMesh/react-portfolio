import { useEffect, useRef } from 'react';
// import LogoS from '../../../assets/images/logo-s.png';
import LogoGif from '../../../assets/images/logo-s.gif'
import './index.scss';

const Logo = () => {
  const solidLogoRef = useRef();
  const outlineLogoRef = useRef();

  useEffect(() => {
    // Animation for the solid logo
    const solidLogo = solidLogoRef.current;
    solidLogo.style.opacity = 0;
    setTimeout(() => {
      solidLogo.style.opacity = 1;
    }, 4000);
  }, []);

  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoGif}
        alt="JavaScript Developer"
      />

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M150 0 l-150 260 l300 0 l-150 -260z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo