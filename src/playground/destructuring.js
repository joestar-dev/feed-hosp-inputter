//
//Object Destructuring
//

const book = {
  title: 'harry potter',
  author: 'jk',
  publisher: {
    name: 'penguin'
  }
};

const { title, author } = book;

const { name: publisherName = 'Self-Publisher' } = book.publisher;

console.log(publisherName);

//
//Array Destructuring
//

const item = ['Coffee', '$2.00', '$2.5', '$2.75'];
const [ itemName = 'tea', , twoPointFive, ] = item;
console.log(`${itemName} is ${twoPointFive}`);
