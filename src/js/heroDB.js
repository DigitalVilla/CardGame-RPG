import Hero from '../js/Hero';

const db = [
    ["Astro", 1, 0, 1],
    ["Star", 0, 0, 1],
    ["Piper", 1, 1, 1],
    ["Pearl", 0, 1, 1],
    ["Axe", 1, 2, 1],
    ["Xara", 0, 2, 1],
    ["Nitro", 1, 3, 1],
    ["Nubia", 0, 3, 1],
    ["Hoody", 1, 4, 1],
    ["Pink", 0, 4, 1],
    ["Gaucho", 1, 5, 1],
    ["Luna", 0, 5, 1],
    ["Master", 1, 0, 2],
    ["Missy", 0, 0, 2],
    ["Bato", 1, 1, 2],
    ["Bety", 0, 1, 2],
    ["Zorro", 1, 2, 2],
    ["Zara", 0, 2, 2],
    ["Neto", 1, 3, 2],
    ["Neta", 0, 3, 2],
    ["Maia", 0, 4, 2],
    ["Marco", 1, 4, 2],
    ["Blanca", 0, 5, 2],
    ["Buffer", 1, 5, 2]
]

const heroes = [];

db.forEach(e => {
    heroes.push(new Hero(e[0], e[1], e[2], e[3]));
});

export default heroes;