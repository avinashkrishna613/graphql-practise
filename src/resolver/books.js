const fs = require("fs");
const path = require("path");
const { parse } = require("graphql");

const query = `
    {books {
        author
        title
    }}
`;
module.exports = {
  Query: {
    getBooks: async (_, __, context) => {
      const fileRelativePath = path.resolve(__dirname, "../../data/books.json");
      const fileExists = fs.existsSync(fileRelativePath);

      console.log(parse(query));
      if (fileExists) {
        const books = await fs.readFileSync(fileRelativePath, {
          encoding: "utf8",
        });
        console.log(books.books);
        return JSON.parse(books).books;
      }
    },
    getBookByID: async (_, {id}, context) => {
        const fileRelativePath = path.resolve(__dirname, "../../data/books.json");
        const fileExists = fs.existsSync(fileRelativePath);
        if(fileExists) {
            const books = await fs.readFileSync(fileRelativePath, {
                encoding: "utf8"
            });
            const response = JSON.parse(books).books;
            console.log(response, id, typeof id);
            return response.find(book => book.id ==id);
        }
    }
  },
};
