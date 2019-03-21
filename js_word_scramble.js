const greeting = "Hello!";
console.log(greeting);
const letters = greeting.split('');
console.log(letters);
const joined = letters.join('');
console.log(joined);

const random_item = letters[Math.floor(Math.random()*letters.length)];
console.log(random_item);

let a = Math.floor(Math.random()*letters.length);
console.log(a);
let b = Math.floor(Math.random()*letters.length);
console.log(b);

let swapped = letters;
console.log(swapped);

let tmp = swapped[a];
console.log(swapped[a])
swapped[a] = swapped[b]
swapped[b] = tmp
console.log(swapped);

const candy = new Map();

candy['purple'] = 'grape';
candy['red'] = 'cherry';
candy['blue'] = 'blueberry';
candy['green'] = 'lime';
candy['orange'] = 'orange';

console.log(candy);


for (let [color, flavor] of Object.entries(candy)) {
    console.log(`The ${flavor} is colored ${color}`
    );
}

console.log(candy['green'])
console.log(candy['magenta'])

function getFlavor(color, map) {
  if (map[color]) {
    return map[color];
  }
  console.log(`Sorry, that color doesn't have a flavor`);
}

console.log(getFlavor('green',candy));
console.log(getFlavor('magenta',candy));

function getFlavors(colorArray, map) {
    const result = []
    for(let color of colorArray) {
        if (map[color]) {
            result.push(map[color]);
    } else {
            result.push(null);
            }
        }
    return result;      
    }

console.log(getFlavors(['blue','green'], candy))
