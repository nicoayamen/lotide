// takes the indexes after [0] and does not mutate array
const tail = function(insert) {
  return insert.slice(1);
};

module.exports = tail;