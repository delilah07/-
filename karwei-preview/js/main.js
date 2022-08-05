"use strict";

const page = document.querySelector(".full-screen");
const screen = document.querySelector(".screen");
const arrowFull = document.querySelectorAll(".fullPage");
const adWrapper = document.querySelector(".ad-wrapper");
adWrapper.innerHTML = "";

// HEADING
const bannerWayAd = document.querySelector(".banner-way .ad");
const bannerWaySize = document.querySelector(".banner-way .size");

// 4 buttons
const refresh = document.querySelector(".refresh");
const qr = document.querySelector(".action-qr");
const qrDropdown = document.querySelector(".action-qr .dropdown");
const share = document.querySelector(".action-share");

const tooltip = document.querySelector(".tooltip");
const inputWrapper = document.querySelector(".input-wrapper");

share.classList.remove("active");
qr.classList.remove("active");
tooltip.classList.remove("active");

// SIDEBAR
const asideItem = document.querySelector(".aside-menu ul");
const sidebar = document.querySelector(".sidebar");
const select = document.querySelector("select");
const types = document.querySelectorAll("option");
const selectOfferHolder = document.querySelector(".select-offer-holder");
const selectCampaign = document.querySelector(".select-campaign");

sidebar.insertAdjacentHTML(
  "beforeend",
  '<div class="dimension-selector-wrapper"></div>'
);
const dimensionSelectorWrapper = document.querySelector(
  ".dimension-selector-wrapper"
);
let bannerSizesPerDevice = [];
let bannerOptions = [];

let currentLocation = new URL(window.location.href);

// Functions
const setUrlParams = (name, param) => {
  currentLocation.searchParams.set(name, param);
};

const toggleActiveClass = (element) => {
  element.classList.toggle("active");
};

function changeUrl(url) {
  const inputLink = inputWrapper.querySelector(".copy-link");
  if (inputLink) {
    inputLink.remove();
  }
  inputWrapper.insertAdjacentHTML(
    "afterbegin",
    `<input class="copy-link" value=${url}>`
  );
}

changeUrl(currentLocation);

function copyLink() {
  var copyText = document.querySelector(".copy-link");
  copyText.select();
  document.execCommand("copy");
}

const initAsideItem = () => {
  asideItem.innerHTML = "";
};
initAsideItem();

const changeSelected = (currentSelect) => {
  let allOptionsInSelect = currentSelect.querySelectorAll("option");
  allOptionsInSelect.forEach((option) => {
    option.removeAttribute("selected");
  });
  const currentSelected = currentSelect.querySelector(
    `[value="${currentSelect.value}"]`
  );
  currentSelected.setAttribute("selected", true);
};

//Select campaign Markplaats, Desktop, Mobile
const onChangeCampaign = (e) => {
  selectOfferHolder.innerHTML = "";
  adWrapper.innerHTML = "";
  changeSelected(e.target);
  const currentSelected = e.target.querySelector("option[selected]");

  dimensionSelectorWrapper.innerHTML = "";

  if (currentSelected.className === "tell") {
    selectOfferHolder.insertAdjacentHTML(
      "beforeend",
      `
            <div class="banner-select">
                <select class="select-offer">
                    <option value="default" data-campaign="default">Select offer</option>
                    <option value="1" data-campaign="${currentSelected.value}">1</option>
                    <option value="2" data-campaign="${currentSelected.value}">2</option>
                    <option value="3" data-campaign="${currentSelected.value}">3</option>
                    <option value="4" data-campaign="${currentSelected.value}">4</option>
                    <option value="5" data-campaign="${currentSelected.value}">5</option>
                    <option value="6" data-campaign="${currentSelected.value}">6</option>
                    <option value="7" data-campaign="${currentSelected.value}">7</option>
                    <option value="8" data-campaign="${currentSelected.value}">8</option>
                    <option value="9" data-campaign="${currentSelected.value}">9</option>
                    <option value="10" data-campaign="${currentSelected.value}">10</option>
                    <option value="11" data-campaign="${currentSelected.value}">11</option>
                    <option value="12" data-campaign="${currentSelected.value}">12</option>
                    <option value="13" data-campaign="${currentSelected.value}">13</option>
                    <option value="14" data-campaign="${currentSelected.value}">14</option>
                    <option value="15" data-campaign="${currentSelected.value}">15</option>
                    <option value="16" data-campaign="${currentSelected.value}">16</option>
                </select>
            </div>
        `
    );

    const selectOffer = document.querySelector(".select-offer");
    const currentOffer = currentSelected.value;
    console.log(currentOffer);

    if (selectOffer) {
      selectOffer.addEventListener("change", changeSelectOffer);
    }
  } else if (currentSelected.className === "karwei") {
    selectOfferHolder.insertAdjacentHTML(
      "beforeend",
      `
            <div class="banner-select">
                <select class="select-offer">
                    <option value="default" data-device="default">Select offer</option>
                    <option value="karwei" data-campaign="${currentSelected.value}">karwei</option>
                </select>
            </div>
        `
    );

    const selectOffer = document.querySelector(".select-offer");
    const currentOffer = currentSelected.value;
    console.log(currentOffer);

    if (selectOffer) {
      selectOffer.addEventListener("change", changeSelectOffer);
    }
  } else if (currentSelected.className === "sell-d") {
    selectOfferHolder.insertAdjacentHTML(
      "beforeend",
      `
            <div class="banner-select">
                <select class="select-offer">
                    <option value="default" data-device="default">Select offer</option>
                    <option value="sell-d" data-campaign="${currentSelected.value}">sell-D</option>
                </select>
            </div>
        `
    );

    const selectOffer = document.querySelector(".select-offer");
    const currentOffer = currentSelected.value;
    console.log(currentOffer);

    if (selectOffer) {
      selectOffer.addEventListener("change", changeSelectOffer);
    }
  } else if (currentSelected.className === "inspireren") {
    selectOfferHolder.insertAdjacentHTML(
      "beforeend",
      `
            <div class="banner-select">
                <select class="select-offer">
                    <option value="default" data-device="default">Select offer</option>
                    <option value="1" data-campaign="${currentSelected.value}">1</option>
                    <option value="2" data-campaign="${currentSelected.value}">2</option>
                </select>
            </div>
        `
    );

    const selectOffer = document.querySelector(".select-offer");
    const currentOffer = currentSelected.value;
    console.log(currentOffer);

    if (selectOffer) {
      selectOffer.addEventListener("change", changeSelectOffer);
    }
  } else if (currentSelected.value === "swipe-cube") {
    selectOfferHolder.insertAdjacentHTML(
      "beforeend",
      `

            <div class="just-links">
<!--                <a href="https://clients.weborama.nl/files/campaigns2/7057231972/212301/default.htm" target="_blank">swipe cube all phones</a>-->
<!--                <a href="https://clients.weborama.nl/files/campaigns2/1078177294/212302/default.htm" target="_blank">swipe cube Only Sim</a>-->
                
            </div>
        `
    );
  } else if (currentSelected.value === "hpto") {
    selectOfferHolder.insertAdjacentHTML(
      "beforeend",
      `

            <div class="just-links">
                <a href="https://clients.weborama.nl/files/campaigns2/2974270375/213683/NL_nu.nl_202011_index.html" target="_blank">Thuis Cross Device 1 Street</a>
                <a href="https://clients.weborama.nl/files/campaigns2/4176991594/213962/NL_nu.nl_202011_index.html" target="_blank">Thuis Cross Device 2 Family</a>
            </div>
        `
    );
  } else if (currentSelected.value === "billboard") {
    selectOfferHolder.insertAdjacentHTML(
      "beforeend",
      `

            <div class="just-links">
<!--                <a href="https://clients.weborama.nl/files/campaigns2/7964637414/212440/default.htm" target="_blank">Billboard Queen</a>-->
<!--                <a href="https://clients.weborama.nl/files/campaigns2/6245068328/212441/default.htm" target="_blank">Billboard Cocoon</a>-->
<!--                <a href="https://clients.weborama.nl/files/campaigns2/2967419364/212442/default.htm" target="_blank">Billboard Robot</a>-->
            </div>
        `
    );
  } else if (currentSelected.value === "superheader") {
    selectOfferHolder.insertAdjacentHTML(
      "beforeend",
      `

            <div class="just-links">
<!--                <a href="https://clients.weborama.nl/files/campaigns2/8773601137/212455/default.htm" target="_blank">SuperHeader Cocoon</a>-->
<!--                <a href="https://clients.weborama.nl/files/campaigns2/1471205827/212478/default.htm" target="_blank">SuperHeader Robot</a>-->
<!--                <a href="https://clients.weborama.nl/files/campaigns2/9440877839/212479/default.htm" target="_blank">SuperHeader Queen</a>-->
            </div>
        `
    );
  }
};

if (selectCampaign) {
  selectCampaign.addEventListener("change", onChangeCampaign);
}

//Choice ad ad - iphone, samsung, sim
const changeSelectOffer = (e) => {
  changeSelected(e.target);
  const currentSelected = e.target.querySelector("option[selected]");

  dimensionSelectorWrapper.innerHTML = "";
  dimensionSelectorWrapper.insertAdjacentHTML(
    "beforeend",
    `
            <div class="select-dimension"></div>
        `
  );
  const selectDimension = document.querySelector(".select-dimension");

  if (currentSelected.dataset.campaign) {
    bannerFeatures(currentSelected.dataset.campaign, currentSelected.value);
  }

  bannerWayAd.innerHTML = currentSelected.label;
  setUrlParams("Ad", bannerWayAd.innerHTML);
  changeUrl(currentLocation.href);

  bannerOptions = createOptions(bannerSizesPerDevice);
  selectDimension.insertAdjacentHTML("beforeend", `${bannerOptions}`);
  selectDimension.addEventListener("click", choseDimension);
};

//Choise dimensions - 320x250, 320x100 ...
const choseDimension = (e) => {
  let allDimensions = e.target.parentNode.querySelectorAll("button");
  allDimensions.forEach((btn) => {
    btn.removeAttribute("selected");
  });

  const currentSelectedDimension = e.target.parentNode.querySelector(
    `[value="${e.target.value}"]`
  );
  currentSelectedDimension.setAttribute("selected", true);

  showBanner(currentSelectedDimension);
  bannerWaySize.innerHTML = currentSelectedDimension.value;
  setUrlParams("size", bannerWaySize.innerHTML);
  changeUrl(currentLocation.href);
};

const createOptions = (bannerSizesPerDevice) => {
  return bannerSizesPerDevice
    .map((obj) => {
      return `<button data-link="${obj.link}" value="${obj.width}x${obj.height}">${obj.width}x${obj.height}</button>`;
    })
    .join("");
};

//Characteristics of banners
const bannerFeatures = (currentCampaign, currentOffer) => {
  console.log(currentCampaign);
  console.log(currentOffer);

  if (currentCampaign === "karwei") {
    bannerSizesPerDevice = [
      {
        width: 120,
        height: 600,
        link: `../${currentCampaign}/${currentOffer}/120x600/index.html`,
      },

      {
        width: 160,
        height: 600,
        link: `../${currentCampaign}/${currentOffer}/160x600/index.html`,
      },

      {
        width: 300,
        height: 250,
        link: `../${currentCampaign}/${currentOffer}/300x250/index.html`,
      },

      {
        width: 300,
        height: 600,
        link: `../${currentCampaign}/${currentOffer}/300x600/index.html`,
      },

      {
        width: 336,
        height: 280,
        link: `../${currentCampaign}/${currentOffer}/336x280/index.html`,
      },
    ];
  } else if (currentCampaign === "sell-informeren") {
    bannerSizesPerDevice = [
      {
        width: 120,
        height: 600,
        link: `../${currentCampaign}/${currentOffer}/120x600/index.html`,
      },

      {
        width: 160,
        height: 600,
        link: `../${currentCampaign}/${currentOffer}/160x600/index.html`,
      },

      {
        width: 320,
        height: 50,
        link: `../${currentCampaign}/${currentOffer}/320x50/index.html`,
      },

      {
        width: 320,
        height: 100,
        link: `../${currentCampaign}/${currentOffer}/320x100/index.html`,
      },

      {
        width: 300,
        height: 250,
        link: `../${currentCampaign}/${currentOffer}/300x250/index.html`,
      },

      {
        width: 320,
        height: 240,
        link: `../${currentCampaign}/${currentOffer}/320x240/index.html`,
      },

      {
        width: 336,
        height: 280,
        link: `../${currentCampaign}/${currentOffer}/336x280/index.html`,
      },

      {
        width: 728,
        height: 90,
        link: `../${currentCampaign}/${currentOffer}/728x90/index.html`,
      },
    ];
  } else if (currentCampaign === "sell-d") {
    bannerSizesPerDevice = [
      {
        width: 300,
        height: 600,
        link: `../${currentCampaign}/${currentOffer}/300x600/index.html`,
      },
      {
        width: 300,
        height: 100,
        link: `../${currentCampaign}/${currentOffer}/300x100/index.html`,
      },

      {
        width: 970,
        height: 250,
        link: `../${currentCampaign}/${currentOffer}/970x250/index.html`,
      },
    ];
  } else if (currentCampaign.includes("tell-inspireren")) {
    bannerSizesPerDevice = [
      {
        width: 970,
        height: 250,
        link: `../${currentCampaign}/${currentOffer}/970x250/index.html`,
      },
    ];
  }
};

//IFRAME to show banner
let iframe = document.createElement("iframe");
iframe.frameBorder = 0;

const showBanner = (currentDimension) => {
  adWrapper.innerHTML = "";
  const [width, height] = currentDimension.getAttribute("value").split("x");
  const link = currentDimension.dataset.link;

  iframe.width = width;
  iframe.height = height;
  iframe.setAttribute("name", "bannerFrame");
  iframe.setAttribute("src", link);

  adWrapper.appendChild(iframe);
};

function refreshIframe() {
  let ifr = document.getElementsByName("bannerFrame")[0];
  ifr.src = ifr.src;
}

// FOR 4 BUTTONS
const clickHandlerBtns = (e) => {
  if (
    e.target.closest("button") &&
    e.target.closest("button").dataset.name === "share"
  ) {
    toggleActiveClass(share);
    tooltip.classList.remove("active");
  } else if (
    (e.target.closest("button") &&
      e.target.closest("button").dataset.name === "copy") ||
    e.target.parentElement.className === "tooltip"
  ) {
    toggleActiveClass(tooltip);
    copyLink();
  } else {
    share.classList.remove("active");
  }

  if (
    e.target.closest("button") &&
    e.target.closest("button").dataset.name === "qr"
  ) {
    toggleActiveClass(qr);
    qrcode.clear();
    qrcode.makeCode(location.href);
  } else {
    qr.classList.remove("active");
  }

  if (
    e.target.closest("button") &&
    e.target.closest("button").dataset.name === "refresh"
  ) {
    refreshIframe();
  }

  if (
    e.target.closest("button") &&
    e.target.closest("button").dataset.name === "full-screen"
  ) {
    arrowFull.forEach((e) => {
      e.classList.toggle("hide");
      e.classList.toggle("appearance");
    });
    toggleActiveClass(page);
  }
};

// Use of functions
screen.addEventListener("click", clickHandlerBtns);

// QRcode
let qrcode = new QRCode(qrDropdown, {
  width: 70,
  height: 70,
  colorDark: "#000000",
  colorLight: "#ffffff",
});
