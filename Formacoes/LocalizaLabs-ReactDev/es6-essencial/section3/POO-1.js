"use strict";

function Animal() {
  this.qtdePatas = 4;
}

// console.log(Animal.prototype);
// ƒ Function() { [native code ]}

function Cachorro(morde) {
  Animal.call(this, 4);

  this.morde = morde;
}

const pug = new Cachorro(false);

console.log(pug);
// Cachorro {qtdePatas: 4, morde: false}
