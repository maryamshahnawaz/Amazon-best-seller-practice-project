// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import "./index.css";

// const books = [
//  {
//   title: 'The 48 Laws of Power',
//   author: "Robert Greene",
//   image: './assets/book-1.jpg',
//   id: 1,
//  },
//  {
//   title: 'It Starts with Us: A Novel',
//   author: "Colleen Hoover",
//   image: './assets/book-2.jpg',
//   id: 2,
//  }
// ]

// function BookList() {
//  return (
//   <section className='booklist'>
//    {books.map((book) => {
//     return (
//      <Book {...book} key={book.id} />
//     )
//    })}

//   </section>
//  )
// }


// const Book = (props) => {
//  const { image, title, author } = props
//  return (
//   <article article className='book' >
//    <img src={image} alt={author} />
//    <h2 >{title}</h2>
//    <p>{author}</p>
//   </article >


//  )
// }



// const root = ReactDOM.createRoot(document.getElementById('root'));


// root.render(<BookList />);


// export default BookList;