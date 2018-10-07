module.exports = function longestConsecutiveLength(array) {
  const sequence = {};
  let count = 1;
  let arlength = array.length;
  for (let i = 0; i < arlength; i++) {
    const currelem = array[i];
     if (sequence.hasOwnProperty(currelem)) {
      continue;
    }
    sequence[currelem] = 1;
    if (sequence.hasOwnProperty(currelem - 1)) {
      count = Math.max(count, merge(sequence, currelem - 1, currelem));
    }
    if (sequence.hasOwnProperty(currelem + 1)) {
      count = Math.max(count, merge(sequence, currelem, currelem + 1));
    }
  }
  if (!arlength) count = 0;
  return count;
}
function merge(sequence, left, right) {
  const prev = right + sequence[right] - 1;
  const next = left - sequence[left] + 1;
  const len = prev - next + 1;
  sequence[prev] = len;
  sequence[next] = len;
  return len;
}
