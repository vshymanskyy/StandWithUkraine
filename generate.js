
const fs = require('fs');
const path = require('path');

const template = id => `<svg viewBox="0 0 800 130" xmlns="http://www.w3.org/2000/svg">
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
  fill: #0056b3;
}
.flag-yellow {
  fill: #ffd700;
}
.message {
  fill: white;
  font-size: 18px;
}
.call {
  fill: black;
  font-size: 22px;
}
.arrow {
  font-size: 14px;
}
</style>

<defs>
  <clipPath id="round-corners"><rect width="100%" height="100%" rx="3" /></clipPath>
</defs>

  <a href="https://stand-with-ukraine.pp.ua">
    <g clip-path="url(#round-corners)">
      <rect x="0" y="0" width="100%" height="100%" class="flag-yellow"/>
      <rect x="0" y="0" width="100%" height="90px" class="flag-blue"/>
    </g>

    <text x="0" y="25" class="message">${ id.includes('default') ?  '' : `
      <tspan x="30" dy="0.2em">${
        id === 'single' ? 'This project was created by a <tspan font-weight="bold">developer from Ukraine</tspan>.' :
        id === 'team' ? 'This project was created by a <tspan font-weight="bold">team from Ukraine</tspan>.' :
        id === 'personal' ? 'This is a personal profile of an <tspan font-weight="bold">open source developer from Ukraine</tspan>.' :
        'This project was developed with substantial contributions by <tspan font-weight="bold">Ukrainian developers</tspan>.'
      }</tspan>`}
      <tspan x="30" dy="${ id.includes('default') ? 0.8 : 1.2 }em">Russia invaded Ukraine, killing over ten thousand of civilians and displacing millions more.</tspan>
      <tspan x="30" dy="1.2em">It's a genocide. Please help us defend freedom, democracy and Ukraine's right to exist.</tspan>
    </text>

    <text x="50%" y="86%" dominant-baseline="middle" text-anchor="middle" class="call">
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
  'banner-direct-team': 'team',
  'banner-personal-page': 'personal'
};

for (const [name, id] of Object.entries(banners)) {
  fs.writeFileSync(path.join(__dirname, name + '.svg'), template(id));
}
