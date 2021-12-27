
const author = 'Amelia Hepworth sss';
function Book() {
  const title= "I Love You to the Moon and Back";
  return (
    <article className="book">
      <img src="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg" alt=""></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* <BookImage />
      <BookTitle />
      <BookAuthor /> */}
    </article>
  );
}

export default Book;
