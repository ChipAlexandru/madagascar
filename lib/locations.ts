export const locationCoords: Record<string, [number, number]> = {
  "Zurich Airport": [47.463, 8.549],
  "Andriana Resort, Crater Bay": [-13.405, 48.278],
  "Ampangorina, Nosy Komba": [-13.453, 48.340],
  "Nosy Komba": [-13.453, 48.340],
  "Nosy Tanikely": [-13.481, 48.237],
  "Nosy Be → Nosy Sakatia": [-13.36, 48.22],
  "Nosy Sakatia": [-13.314, 48.185],
  "Andilana Beach, Nosy Be": [-13.155, 48.200],
  "Mont Passot, Nosy Be": [-13.298, 48.262],
  "Nosy Iranja": [-13.617, 47.830],
  "En route to Lokobe": [-13.42, 48.32],
  "Lokobe Reserve": [-13.403, 48.336],
  "Lokobe village": [-13.403, 48.336],
  "Hell-Ville, Nosy Be": [-13.405, 48.270],
};

export const locationZoom: Record<string, number> = {
  "Zurich Airport": 5,
};

export const DEFAULT_MINIMAP_ZOOM = 9;

export const mapSpots: { name: string; coords: [number, number] }[] = [
  { name: "Andriana Resort", coords: [-13.405, 48.278] },
  { name: "Nosy Komba", coords: [-13.453, 48.340] },
  { name: "Nosy Tanikely", coords: [-13.481, 48.237] },
  { name: "Nosy Sakatia", coords: [-13.314, 48.185] },
  { name: "Mont Passot", coords: [-13.298, 48.262] },
  { name: "Andilana Beach", coords: [-13.155, 48.200] },
  { name: "Nosy Iranja", coords: [-13.617, 47.830] },
  { name: "Lokobe Reserve", coords: [-13.403, 48.336] },
];
