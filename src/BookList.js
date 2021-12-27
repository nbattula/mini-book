// import Book from "./Book";
const firstBook = {
img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg",
author: 'Amelia Hepworth',
title: "I Love You to the Moon and Back"

}


function BookList() {
  return (
    <section className="bookList">
      <Book img={firstBook.img} author = {firstBook.author} title={firstBook.title}/>
      <Book img={firstBook.img} author = {firstBook.author}/>
    </section>
  );
}

function Book(props) {
  console.log('line 21 - props', props);
  return (
    <article className="book">
      <img src={props.img} alt=""></img>
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
      {/* <BookImage />
      <BookTitle />
      <BookAuthor /> */}
    </article>
  );
}

export default BookList;
