// filter

String.prototype.filter = function (words) {
  return this.split(" ")
    .filter((str) => !words.includes(str))
    .join(" ");
};

// bubble sort

Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - i; j++) {
      if (this[j] > this[j + 1]) {
        let temp = this[j + 1];
        this[j + 1] = this[j];
        this[j] = temp;
      }
    }
  }
  return this;
};
