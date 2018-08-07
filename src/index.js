const mapboxgl = require('mapbox-gl');
const marker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoiYW1pbm9jaGUiLCJhIjoiY2prazRpZ2FyMDVrbzNwcGhobWF1c3dseCJ9.C2pk-qwBkS5zxBdDe_tngg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

marker('hotels', [-74.009, 40.705]).addTo(map);
