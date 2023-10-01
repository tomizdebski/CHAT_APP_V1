import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 p-4">
      <ul className="flex gap-x-4">
        <li>
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
        </li>

        <li>
          <Link href="/sign-in" className="text-white hover:underline">
            Sign In
          </Link>
        </li>

        <li>
          <Link href="/profile" className="text-white hover:underline">
            Profile
          </Link>
        </li>

        <li>
          <Link href="/sign-out" className="text-white hover:underline">
            Sign Out
          </Link>
        </li>
      </ul>
    </nav>
  );
};