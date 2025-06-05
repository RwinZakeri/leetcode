const logSqure = (squares) => {
  const fullLine = "*".repeat(squares);
  const middelLine = "*" + " ".repeat(squares - 2) + "*";
  console.log(fullLine);
  for (let i = 0; i <= squares; i++) {
    console.log(middelLine);
  }
  console.log(fullLine);
};

logSqure(60);
