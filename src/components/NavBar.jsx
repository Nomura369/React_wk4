import { NavLink } from 'react-router';

export default function NavBar() {

  const navBarContent = [
    { to: "/bookstore/genre/fiction", label: "Fiction" },
    { to: "/bookstore/genre/science", label: "Science" },
    { to: "/bookstore/genre/art", label: "Art" },
    { to: "/bookstore/genre/history", label: "History" },
    { to: "/bookstore/genre/travel", label: "Travel" },
  ];  

  return (
    <div className="flex flex-wrap justify-center">
      {navBarContent.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          // 導覽列的字體顏色與hover樣式
          className={({ isActive }) =>
            `mx-6 text-white text-base font-medium transition-all duration-300 ease-in-out 
            ${ isActive ? "opacity-100 font-semibold" : "opacity-50"} 
            hover:opacity-100 hover:font-semibold hover:[text-shadow:0px_0px_10px_white]`
          }
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
}