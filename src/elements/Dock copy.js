import React from "react";
function Dock() {
  const Icons = [
    {
      name: "Finder",
      icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853981255cc36b3a37af_finder.png",
    },
    {
      name: "Siri",
      icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ff3bafbac60495771_siri.png",
    },
    {
      name: "Launchpad",
      icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853943597517f128b9b4_launchpad.png",
    },
    {
      name: "",
      icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853743597518c528b9b3_contacts.png",
    },
    {
      name: "",
      icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c849ec3735b52cef9_notes.png",
    },
    {
      name: "",
      icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853d44d99641ce69afeb_reminders.png",
    },
    {
      name: "",
      icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c55558a2e1192ee09_photos.png",
    },
    {
      name: "",
      icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f708537f18e2cb27247c904_facetime.png",
    },
  ];
  const _onMouseLeave = (i) => {
    document.getElementById(`dock.icon.${i}`).style.height = "56px";
    i + 1 !== Icons.length &&
      (document.getElementById(`dock.icon.${i + 1}`).style.height = "56px");
    i !== 0 &&
      (document.getElementById(`dock.icon.${i - 1}`).style.height = "56px");
    i + 2 !== Icons.length &&
      (document.getElementById(`dock.icon.${i + 2}`).style.height = "56px");
    i - 1 !== 0 &&
      (document.getElementById(`dock.icon.${i - 2}`).style.height = "56px");
  };
  const _onMouseMove = (i, e) => {
    const el = document.getElementById(`dock.icon.${i}`);

    const w = el.clientWidth;
    var posl, posr;
    if (w / 2 - e.nativeEvent.offsetX < 0) {
      //movingright
      posl = 1 - (2 * (e.nativeEvent.offsetX - w / 2)) / w;
      posr = (2 * (e.nativeEvent.offsetX - w / 2)) / w;
    } else {
      //movingleft
      posr = 1 - (2 * (w / 2 - e.nativeEvent.offsetX)) / w;
      posl = (2 * (w / 2 - e.nativeEvent.offsetX)) / w;
    }
    el.style.height = `${2 * 3.5}rem`;
    i + 1 !== Icons.length &&
      (document.getElementById(`dock.icon.${i + 1}`).style.height = `${
        (posr + 0.8) * 3.5
      }rem`);
    i !== 0 &&
      (document.getElementById(`dock.icon.${i - 1}`).style.height = `${
        (posl + 0.8) * 3.5
      }rem`);
    i + 2 !== Icons.length &&
      (document.getElementById(`dock.icon.${i + 2}`).style.height = `${
        (posr + 0.6) * 3.5
      }rem`);
    i - 1 !== 0 &&
      (document.getElementById(`dock.icon.${i - 2}`).style.height = `${
        (posl + 0.6) * 3.5
      }rem`);
  };
  return (
    <div
      className="absolute bottom-2 backdrop-blur-xl
  bg-white/30 max-h-16 flex flex-row p-1 rounded-2xl items-end justify-center"
    >
      {" "}
      {Icons.map((items, index) => {
        return (
          <img
            onMouseMove={_onMouseMove.bind(this, index)}
            onMouseLeave={() => _onMouseLeave(index)}
            id={`dock.icon.${index}`}
            src={items.icon}
            className="relative h-14 transition-all"
            alt=""
          />
        );
      })}
    </div>
  );
}

export default Dock;
