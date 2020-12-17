// takes data [!Array]
export function getOcurrence(data, key, value) {
  return data.reduce(function(n, person) {
    return n + (person[key] === value);
  }, 0);
}
