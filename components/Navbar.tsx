import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";

const Navbar = async () => {
  const session = await getServerSession(options);

  return (
    <nav className="bg-indigo-600 p-4">
      <ul className="flex gap-x-4 justify-between">
        <li>
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
        </li>

        {!session ? (
          <li>
            <Link href="/sign-in" className="text-white hover:underline">
              Sign In
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link href="/profile" className="text-white hover:underline">
                {session?.user?.image ? (
                  <Image
                    src={session.user.image}
                    width={40}
                    height={40}
                    alt={`Profile Pic for ${session.user.name}`}
                    priority={true}
                    className="rounded-full"
                  />
                ) : null}
              </Link>
            </li>

            <li>
              <Link href="/sign-out" className="text-white hover:underline">
                Sign Out
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
