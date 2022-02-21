export const Icons = [
  {
    name: "Finder",
    icon: (
      <img
        alt=""
        src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853981255cc36b3a37af_finder.png"
      />
    ),
    window: { width: 800, height: 600, resize: true },
  },

  {
    name: "Launchpad",
    icon: (
      <img
        alt=""
        src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853943597517f128b9b4_launchpad.png"
      />
    ),
    window: { width: 800, height: 600, resize: true },
  },

  {
    name: "Notes",
    icon: (
      <img
        alt=""
        src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c849ec3735b52cef9_notes.png"
      />
    ),
    window: { width: 800, height: 600, resize: true },
  },
  {
    name: "Calendar",
    icon: (
      <div className="mb-1 ml-1 cursor-default">
        <svg
          width="90%"
          height="90%"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x={0}
          y={0}
          viewBox="0 0 294.8 294.8"
          style={{
            enableBackground: "new 0 0 294.8 294.8",
          }}
          xmlSpace="preserve"
        >
          <style>
            {".st0{fill:#fff}.st2{font-family:'MyriadPro-Regular'}"}
          </style>
          <path
            className="st0"
            d="M230 294.8H64.8C29 294.8 0 265.8 0 230V64.8C0 29 29 0 64.8 0H230c35.8 0 64.8 29 64.8 64.8V230c0 35.8-29 64.8-64.8 64.8z"
          />
          <path
            d="M229.3 0H65.4C29.3 0 0 29.3 0 65.4V109h294.8V65.4c0-36.1-29.3-65.4-65.5-65.4z"
            style={{
              fill: "#ed6c66",
            }}
          />
          <text
            transform="translate(93.735 81.442)"
            className="st0 st2"
            style={{
              fontFamily: "Charcoal,sans-serif",
              fontSize: "64.0738px",
            }}
          >
            {Date().substring(4, 7).toUpperCase()}
          </text>
          <text
            transform="translate(70.41 244.573)"
            className="st2"
            style={{
              fontFamily: "Charcoal,sans-serif",
              fontSize: "150.0738px",
            }}
          >
            {Date().substring(8, 10)}
          </text>
        </svg>
      </div>
    ),
    window: { width: 800, height: 600, resize: true },
  },
  {
    name: "Maps",
    icon: (
      <img
        className="pb-0.5"
        width="90%"
        height="90%"
        alt=""
        src="https://help.apple.com/assets/615272211494760B754BD339/615272221494760B754BD340/en_GB/ebefa50b854ad64af642633738b93d75.png"
      />
    ),
    window: { width: 800, height: 600, resize: true },
  },

  {
    name: "Facetime",
    icon: (
      <img
        alt=""
        src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f708537f18e2cb27247c904_facetime.png"
      />
    ),
    window: { width: 800, height: 600, resize: true },
  },
  {
    name: "Safari",
    icon: (
      <img
        alt=""
        src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ddd826358438eda6d_safari.png"
      />
    ),
    window: { width: 800, height: 600, resize: true },
  },
  {
    name: "Calculator",
    icon: (
      <img
        className="pb-0.5"
        width="90%"
        height="90%"
        alt=""
        src="https://help.apple.com/assets/5FF90A5FC596485AAD3C37A4/5FF90A60C596485AAD3C37AB/en_US/f19c7e914f0adb59c0833d00d09f1ea7.png"
      />
    ),
    window: { width: 240, height: 310, resize: false },
  },
];
