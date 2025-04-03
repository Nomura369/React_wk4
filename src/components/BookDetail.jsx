import { useState } from "react";
import AddToBasket from "./AddToBasket"

function BookDetail({ book }) {

    const [isFavorite, setIsFavorite] = useState(false);
    const [qty, setQty] = useState(book.stock > 0 ? 1 : 0);

    const reviews = book.reviews;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-24 gap-8 justify-center py-4">
            {/* 左側：產品圖片（佔6/24） */}
            <div className="lg:col-span-6 lg:col-start-3">
                <img
                    alt={book.title}
                    className="w-full h-full object-cover object-center rounded-md"
                    src={book.cover}
                />
            </div>

            {/* 右側：產品資訊（佔14/24） */}
            <div className="lg:col-span-14 px-4 content-center">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-white text-2xl font-bold mb-1">{book.title}</h1>
                    <img
                        src={isFavorite ? "/images/favorite_filled.svg" : "/images/favorite_outlined.svg"}
                        alt="Favorite"
                        onClick={() => setIsFavorite(!isFavorite)}
                        className="cursor-pointer"
                    />
                </div>
                <h2 className="text-white opacity-80 mb-5 text-lg">{book.author}</h2>
                <p className="text-white opacity-50 text-base mb-5 text-justify">{book.summary}</p>

                {/* 價格與按鈕 */}
                <div className="flex flex-col gap-4">
                    <p className="text-2xl font-semibold text-blue-300">US${book.price}.00</p>
                    <p className="text-blue-300">
                        <span className="font-bold" >Status</span>: {book.stock > 0 ? "In Stock" : "Unavailable"}
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-blue-300" >Quantity:</span>
                        <select
                            className="select select-bordered w-20 bg-white"
                            defaultValue={book.stock > 0 ? 1 : 0}
                            onChange={event => setQty(event.target.value)}
                        >
                            {[...Array(book.stock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                    <p className="text-blue-300">
                        <span className="font-bold">Total Price</span>: US${book.price * qty}.00
                    </p>
                    <AddToBasket />
                </div>
            </div>
            {/* 買家評論區：佔滿整行（24格） */}
            <div className="lg:col-span-20 lg:col-start-3 rounded-lg">
                <h1 className="text-xl font-bold text-white mb-4">Customer Reviews</h1>

                {/* 如果沒有評論 */}
                {reviews.length === 0 ?
                    (<p className="text-gray-300">No reviews yet.</p>) :
                    (
                        <div className="space-y-4">
                            {reviews.map((review, index) => (
                                <div key={index} className="bg-stone-800 p-4 rounded-lg">
                                    <div className="flex">
                                        <h2 className="text-white font-semibold mr-5">{review.reviewer}</h2>
                                        <p className="text-yellow-200">{review.rating} / 5</p>
                                        <img alt="star" src="/images/star.svg" />
                                    </div>
                                    <p className="text-gray-300">{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        </div>
    );
}

export default BookDetail;