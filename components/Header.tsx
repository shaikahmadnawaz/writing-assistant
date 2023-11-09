import { PenSquare } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex items-center space-x-3">
        <PenSquare className="sm:w-12 sm:h-12 w-8 h-8" width={32} height={32} />
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
          Writing Assistant
        </h1>
      </Link>
      <ModeToggle />
    </header>
  );
}
