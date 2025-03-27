import { Link } from 'react-router';
import _ from 'lodash';

function BookItem({ book }) {
   return (
      <section className="pt-4 px-3 lg:px-4">
         <div className="border rounded border-stone-800 bg-stone-800 overflow-hidden">
            <Link to={`/bookstore/book/${book.ID}`}>
               <img className="w-full" src={book.cover} alt={book.title} />
            </Link>
            <div className="p-4">
               <h5 className="text-white mb-1 font-semibold">
                  {book.title}
               </h5>
               <h6 className="text-white opacity-80 mb-5">
                  {book.author}
               </h6>
               <p className="text-white opacity-50 mb-3">
                  {_.truncate(book.summary, { length: 60, omission: " ... " })}
               </p>               
               <div className="flex justify-between flex-wrap">
                  <Link to={`/bookstore/book/${book.ID}`} 
                        className="no-underline text-blue-400 flex items-center hover:font-semibold">
                     See More
                     <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                     </svg>
                  </Link>
                  <span className="text-white opacity-80 inline-flex items-center leading-none text-lg pr-3 py-1">
                     {"$" + book.price}
                  </span>
               </div>
            </div>
         </div>
      </section>
   );
}

export default BookItem;