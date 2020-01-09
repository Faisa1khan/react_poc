export function drawWordCloud(text_string) {
  var common = "i,me,my,myself,we,us,our,ours,ourselves";

  var word_count = {};

  let words = text_string.split(/[ '\-\(\)\*":;\[\]|{},.!?]+/);
  console.log(words);
  if (words.length === 1) {
    word_count[words[0]] = 1;
  } else {
    words.forEach(function(word) {
      let copyWord = word.toLowerCase();
      if (
        copyWord !== "" &&
        common.indexOf(copyWord) === -1 &&
        word.length > 1
      ) {
        if (word_count[copyWord]) {
          word_count[word]++;
        } else {
          word_count[copyWord] = 1;
        }
      }
    });
  }
  return word_count;
}
