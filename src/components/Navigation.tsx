typescriptreact
"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navigation: React.FC = () => {
  const [isPastTournamentsOpen, setIsPastTournamentsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/stats">
            Stats
          </Link>
        </li>
        <li>
          <Link href="/schedule">
            Schedule
          </Link>
        </li>
        <li>
          <Link href="/rules">
            Rules
          </Link>
        </li>
        <li className="relative">
          <button
            onClick={() => setIsPastTournamentsOpen(!isPastTournamentsOpen)}
            className="focus:outline-none"
          >
            Past Tournaments
          </button>
          {isPastTournamentsOpen && (
            <ul className="absolute top-full left-0 bg-black text-white shadow-md mt-2 rounded w-32">
              <li>
                <Link href="/past-tournaments/2023" className="block px-4 py-2 hover:bg-gray-700">
                  2023
                </Link>
              </li>
              <li>
                <Link href="/past-tournaments/2024" className="block px-4 py-2 hover:bg-gray-700">
                  2024
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/photos">
            Photos
          </Link>
        </li>
        <li>
          <Link href="/sponsors">
            Sponsors
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;