// import { useParams } from 'react-router';
// import { Helmet } from 'react-helmet-async';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import BookDetail from '../components/BookDetail';
// import books from '../json/books.json';

// function BookPage() {
//     const { bookId } = useParams();
//     const product = products.find(
//         (x) => x.id === productId
//     );
//     const title = "Product Detail";

//     return (
//         <div className="container mx-auto main-layout bg-gray-900">
//             <Helmet>
//                 <title>{title}</title>
//             </Helmet>
//             <Header
//                 title={title}
//                 slogan="An example made by Vite."
//             />
//             <ProductDetail product={product} className="content" />
//             <Footer className="footer" />
//         </div>
//     );
// }

// export default BookPage;