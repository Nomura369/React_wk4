import { Helmet } from 'react-helmet-async'; // 可更動該頁面之title
import Header from '../components/Header'
import BookList from '../components/BookList'
import Footer from '../components/Footer'
import books from "../json/books.json";

function HomePage() {
    const title = "Future Bookstore";

    return (
        <div className="container mx-auto main-layout min-h-screen">
            {/*原本的背景色類別是bg-gray-900（來自tailwind）*/}
            <Helmet><title>{title}</title></Helmet>
            <Header
                // title={title}
                // slogan="The best place to buy your favorite products"
            />
            <BookList books={books} className="content" />
            <Footer className="footer" />
        </div>
    )
}

export default HomePage;