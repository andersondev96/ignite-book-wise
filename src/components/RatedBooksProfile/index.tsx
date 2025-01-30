import { BookInfo, Container, BookCard } from './styles'

export const RatedBooksProfile = () => {
  return (
    <Container>
      <span>Há 2 dias</span>
      <BookCard>
        <BookInfo>
          <img src="" alt="" />
          <div>
            <strong>Entendendo Algoritmos</strong>
            <span>Aditya Bhargava</span>
          </div>
        </BookInfo>
        <p>
          Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae
          non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et
          suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin
          tristique pretium quam. Mollis et luctus amet sed convallis varius
          massa sagittis. Proin sed proin at leo quis ac sem. Nam donec accumsan
          curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet
          elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer
          pellentesque.
        </p>
      </BookCard>
    </Container>
  )
}
