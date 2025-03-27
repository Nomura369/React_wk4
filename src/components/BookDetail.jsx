import { useState } from "react";
import AddToBasket from "./AddToBasket"

function BookDetail({ book }) {

    const [qty, setQty] = useState(book.stock > 0 ? 1 : 0);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-24 gap-8 justify-center pt-4">
            {/* 左側：產品圖片（佔6/24） */}
            <div className="lg:col-span-6 lg:col-start-3">
                <img
                    alt={book.title}
                    className="w-full h-full object-cover object-center rounded-md"
                    src={book.cover}
                />
            </div>

            {/* 右側：產品資訊（佔14/24） */}
            <div className="lg:col-span-14 px-4">
                <h1 className="text-white text-2xl font-bold mb-1">{book.title}</h1>
                <h2 className="text-white opacity-80 mb-5 text-lg">{book.author}</h2>
                <p className="text-white opacity-50 text-base mb-5">{book.summary}</p>

                {/* 價格與按鈕 */}
                <div className="flex flex-col gap-4">
                    <p className="text-2xl font-semibold text-blue-300">US${book.price}.00</p>
                    <p className="text-blue-300">
                        <span className="font-bold" >Status</span>: {book.stock > 0 ? "In Stock" : "Unavailable"}
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-blue-300" >Qty:</span>
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

            {/* 顧客評價 */}
            <div>
                
            </div>
        </div>
    );
}

export default BookDetail;