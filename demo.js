//before rest and spread 
//This was the arguements operator

function sum() {
  const args = Array.from(arguments);
  return args.reduce((sum, val) => {
    return sum + val;
  });
}

// const max = () => {
//   console.log(arguments);
// }

const max = function () {
  const args = Array.from(arguments);
  return args.reduce((max, currVal) => {
    return max < currVal ? currVal : max;
  })
}

///////////REST OPERATOR/////////////////

function sums(...nums) {
  return nums.reduce((sum, n) => sum + n);
}///three dots BEFORE the argument.

const sumAll = (...values) => {
  return values.reduce((sum, n) => sum + n);
}

function makeFamily(parent1, parent2, ...kids) {
  return {
    parents: [parent1, parent2],
    children: kids.length ? kids : 0
  }
}

const filterBy = (type, ...vals) => {
  return vals.filter((v) => typeof v === type);
}

///////////SPREAD OPERATOR/////////////

const nums = [3, 4, 123, .92, 45];

const filterByType = (type, ...vals) => {
  return vals.filter((v) => typeof v === type);
}

const things = [23, 45, true, false, 0, 'hello', 'goodbye', undefined];

filterByType('string', ...things);

console.log(..."hello");

const palette = ['lavender berry', 'sunflower yellow', 'orchid orange'];

// const paletteCopy = palette.slice();

// const paletteCopy = ['sky blue', ...palette, 'grass green'];

const greenTeas = ['snow jasmine', 'fragrant leaf'];
const oolongTeas = ['honey orchid', 'winter sprout'];
const herbalTeas = ['african solstice', 'marshmallowroot'];
const coffees = ['guatemala red cat', 'snow leopard blend'];

const allTea = [...herbalTeas, ...oolongTeas, ...herbalTeas];

const withCaffeine = [...greenTeas, ...oolongTeas, ...coffees, "Earl Grey"];

const vowels = 'aeiou';
const vowelArr = [...vowels, 'sometimes Y'];


////////////Spread Object Literal///////////

const tea = {
  type: 'oolong',
  name: 'winter sprout',
  origin: 'taiwan'
};

const teaData = {
  steepTime: '30s',
  brewTemp: 175,
  origin: 'japan'
};

// const tea2 = [...tea]; WONT WORK 

// const teaTin = { ...tea, price: 22.99 };

const newTea = { name: 'golden frost', ...tea };

const fullTea = { ...tea, ...teaData, origin: 'china' };

const colors = ['red', 'orange', 'blue'];

const dummyObj = { ...colors }

const shoppingCart = [
  {
    name: 'honey orchid',
    quantity: 2,
    price: 13.5
  },
  {
    name: 'african solstice',
    quantity: 4,
    price: 25.99
  }
];

const cartCopy = [...shoppingCart];