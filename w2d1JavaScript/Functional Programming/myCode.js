function multiply(numArr) {
  return numArr.reduce((prevValue, currentIndex) => prevValue * currentIndex);
}

/* string reversal */
function reverse(str) {
  return str
    .split("")
    .reduceRight((prevValue, currentValue) => prevValue + currentValue);
}

/* filter words */
function filterLongWords(words, i) {
  return words.filter((word) => word.length > i);
}
