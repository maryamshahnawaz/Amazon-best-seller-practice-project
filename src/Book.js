const Book = (props) => {
 const { image, title, author, index } = props

 return (
  <article article className='book' >

   <img src={image} alt={author} />

   <h2 >{title}</h2>
   <p>{author}</p>
   <span className="index">{`
   #${index + 1}`}</span>

  </article >
 )
}
export default Book;