const readline = require("readline");

const readline1 = readline.createInterface({
  input: process.stdin, // takes input from terminal
  output: process.stdout, // displays output in terminal
});

let books = ["Cosmos", "A god delusion", "Space"];

let fun = () => {
  readline1.question(
    "Press 1, 2 or 3. 1 - Show all books 2 - Add a new book 3 - Quit: ",
    (num) => {
      if (num == 1) {
        books.forEach((book) => {
          console.log(book);
        });
        fun();
      } else if (num == 2) {
        readline1.question("Enter book name: ", (bookName) => {
          books.push(bookName);
          console.log("book added succesfully");
          fun();
        });
      } else if (num == 3) {
        readline1.question(
          "Are you sure you want to quit - press Y to quit: ",
          (res) => {
            if (res == "Y") {
              readline1.close();
            } else {
              fun();
            }
          }
        );
      } else {
        console.log("You have selected an invalid entry.");
        fun();
      }
    }
  );
};

fun();

// when the readline is closed, do this
readline1.on("close", function () {
  console.log("Bye Bye, See you again!");
});
