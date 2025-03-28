"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <Link
              href="/"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/registration"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Registration
            </Link>
            <Link
              href="/users"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Users
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
