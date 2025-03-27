import { Link } from "react-router"
import NavBar from "./NavBar";

function Header({ title, slogan }) {
    return (
        <header className="text-center flex flex-col items-center header">
            <Link to="/">
                <h2 className="pt-10 pb-4 text-3xl font-bold text-blue-400">
                    {title}
                </h2>
            </Link>

            <p className="text-white opacity-80 text-base leading-relaxed xl:w-1/2 lg:w-3/4 mx-auto">
                {slogan + "✨"}
            </p>
            <div className="flex mt-6 justify-center">
                <hr className="my-[25px] mx-auto w-[100px] border-0 border-t-[3px] border-blue-400 opacity-100 rounded" />
            </div>
            <NavBar />
        </header>
    );
}

export default Header;