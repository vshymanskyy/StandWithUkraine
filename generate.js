
const fs = require('fs');
const path = require('path');

const template = id => `<svg viewBox="0 0 1040 200" xmlns="http://www.w3.org/2000/svg">
  <style>
@namespace svg url(http://www.w3.org/2000/svg);

svg {
  font-family: Helvetica, Arial, sans-serif;
  text-rendering: geometricPrecision;
}
svg|a:link, svg|a:visited {
  cursor: pointer;
}
.flag-blue {
  fill: #0057b7;
}
.flag-yellow {
  fill: #ffd700;
}
.message {
  fill: white;
  font-size: 20px;
}
.call {
  fill: black;
  font-size: 32px;
}
.mobile-only {
  display: none;
}
.arrow {
  font-size: 24px;
}
@media (max-width: 770px) {
  .message {
    display: none;
    font-size: 29px;
  }
  .mobile-only {
    display: inherit;
  }
  .call {
    font-size: 36px;
  }
}
  </style>

  <a href="https://stand-with-ukraine.pp.ua">
    <rect x="0" y="0" width="100%" height="100%" class="flag-yellow"/>
    <rect x="0" y="0" width="100%" height="110px" class="flag-blue"/>

    <text x="0" y="25" class="message">${ id.includes('default') ?  '' : `
      <tspan x="25" dy="0.45em">${
        id === 'single' ? 'This project was created by a developer from Ukraine.' :
        id === 'personal' ? 'This is a personal profile of an open source software contributor from Ukraine.' :
        'This project was developed with substantial contributions from Ukrainian developers.'
      }</tspan>`}
      <tspan x="25" dy="${ id.includes('default') ? 1.15 : 1.3 }em">Russia has invaded Ukraine and already killed tens of thousands of civilians, with many more raped or tortured.</tspan>
      <tspan x="25" dy="${ id.includes('default') ? 1.35 : 1.3 }em">The death toll keeps climbing. It's a <tspan font-weight="bold">genocide</tspan>. We need your help. Let's fight back against the Russian regime.</tspan>
    </text>
    <text x="0" y="25" class="message mobile-only">
      <tspan x="25" dy=".7em">Russia has invaded Ukraine and already killed tens of thousands of civilians,</tspan>
      <tspan x="25" dy="1.2em">with many more raped or tortured. It's a <tspan font-weight="bold">genocide</tspan>. We need your help.</tspan>
    </text>

    <text x="50%" y="78.5%" dominant-baseline="middle" text-anchor="middle" class="call">
      Help Ukraine Now${ id === 'default-header' ? '' : ' <tspan dominant-baseline="middle" class="arrow">➔</tspan>'}
    </text>
  </a>

</svg>
`;

const banners = {
  'banner2': 'default',
  'banner2-direct': 'default',
  'banner2-no-action': 'default-header',
  'banner': 'contributors',
  'banner-direct': 'contributors',
  'banner-direct-single': 'single',
  'banner-personal-page': 'personal'
};

for (const [name, id] of Object.entries(banners)) {
  fs.writeFileSync(path.join(__dirname, name + '.svg'), template(id));
}
