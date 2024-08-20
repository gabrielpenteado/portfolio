import "./Contacts.scss";
import resume from "../../assets/gabrielpenteado.pdf";

const Contacts = () => {
  return (
    <div className="contacts">
      <a
        href="https://github.com/gabrielpenteado"
        target="_blank"
        title="GitHub"
        rel="noreferrer"
      >
        <button className="contactsButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1.3em"
            height="1.3em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </a>

      <a
        href="https://linkedin.com/in/gabriel-penteado"
        target="_blank"
        title="LinkedIn"
        rel="noreferrer"
      >
        <button className="contactsButton">
          <svg
            stroke="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1.3em"
            width="1.3em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
          </svg>
        </button>
      </a>

      <a
        href="mailto:gabripenteado@gmail.com"
        title="gabripenteado@gmail.com"
        rel="noreferrer"
        target="_blank"
      >
        <button className="contactsButton">
          <svg
            stroke="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1.3em"
            width="1.3em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"></path>
          </svg>
        </button>
      </a>

      <a href={resume} title="Resume" target="_blank" rel="noreferrer">
        <button className="contactsButton cvBox">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 512 512"
            version="1.1"
            id="svg8"
          >
            {" "}
            <path
              d="m 249.17973,328.32402 c -9.78758,15.38441 -19.17851,30.4337 -40.22128,45.05521 -11.25687,7.89055 -37.16464,23.30604 -73.9908,23.30604 -70.258325,0 -126.9676516,-51.07979 -126.9676516,-140.88446 0,-78.48565 53.3447156,-140.48607 128.4662816,-140.48607 30.4337,0 57.47396,10.52167 77.38654,26.30447 18.41392,14.65033 27.03796,29.30348 34.56291,42.45573 l -52.58013,26.27338 c -3.76134,-8.62631 -8.28954,-17.64933 -19.91259,-27.40585 -12.78437,-10.15549 -25.53991,-13.15224 -36.45998,-13.15224 -42.821335,0 -65.364452,39.82459 -65.364452,84.14459 0,58.23852 29.700162,87.14305 65.364452,87.14305 34.5629,0 48.47976,-24.0418 57.47396,-39.42563 l 52.24332,26.67235 z M 433.37382,123.57317 H 504 L 411.96314,388.7947 H 344.36647 L 253.46212,123.57317 h 70.62446 l 54.84337,188.60017 z"
              id="path2"
            />
          </svg>
        </button>
      </a>
    </div>
  );
};

export default Contacts;
