
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div className="flex items-center font-bold gap-3">
          <Link href="/">Home</Link>
          <Link href="/profile">Profile</Link>
        </div>
        <div className="font-semibold text-lg gap-3 flex hover:underline">
          <button className=" text-red-500  px-1 py-2 ">Logout</button>
          <button className="text-blue-600  px-1 py-2">Login</button>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
