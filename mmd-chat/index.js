const letter = (letter) => {
  switch (letter) {
    case "a":
      return true;
    case "e":
      return true;
    case "i":
      return true;

    case "o":
      return true;

    case "u":
      return true;

    default:
      return false;
  }
};

const mmdChat = (txt) => {
  let count = 0;
  for (let i = 0; i < txt.length; ++i) {
    if (letter(txt[i])) {
      if (i === 0 || i === txt.length - 1) {
        count += 3;
      } else {
        count += 2;
      }
    }
  }
  return count;
};

console.log(mmdChat("anvari"));
