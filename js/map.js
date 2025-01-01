var map = L.map("map", { scrollWheelZoom: false }).setView(
  [42.55326217192827, 20.929700312123277],
  9
);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// L.marker([51.5, -0.09])
//   .addTo(map)
//   .bindPopup("A pretty CSS popup.<br> Easily customizable.")
//   .openPopup();
