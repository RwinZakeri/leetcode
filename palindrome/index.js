const palindrome = (string = "") => {
  const reversedString = string.split("").reverse().join("");
  return reversedString === string ? true : false;
};

palindrome("level");
