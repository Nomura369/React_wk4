import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookDetail from '../components/BookDetail';
import books from '../json/books_reviews.json';

function BookPage() {
    const { bookId } = useParams();
    const book = books.find( (x) => x.ID === Number(bookId) ); // bookID 為字串
    const title = "Book Detail";

    return (
        <div className="container mx-auto main-layout min-h-screen">
            <Helmet><title>{title}</title></Helmet>
            <Header
                title={title}
                slogan="Books Are Awesome, More Is Better❤️"
            />
            <BookDetail book={book} className="content" />
            <Footer className="footer" />
        </div>
    );
}

export default BookPage;