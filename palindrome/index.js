const palindrome = (string = "") => {
  const reversedString = string.split("").reverse().join("");

  var test = string.toLowerCase().replace(/[^a-z0-9]/g, "");

  console.log(test);
};

palindrome("hello wolrd : /");
