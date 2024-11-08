//Q3. Permutations of a given string

function permute(str) {
  let result = [];

  function backtrack(path, remaining) {
    if (remaining.length === 0) {
      result.push(path);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      let newPath = path + remaining[i];
      let newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);

      backtrack(newPath, newRemaining);
    }
  }

  backtrack("", str);

  return result;
}

const input = "ABC";
const permutations = permute(input);

console.log(permutations.join(" "));
