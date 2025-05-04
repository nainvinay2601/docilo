"use client";
import Link from "next/link"; // Next.js built-in component for client-side routing
import { cn } from "@/lib/utils"; // Utility function (usually from tailwind-variants or custom) to conditionally join classNames
import { usePathname } from "next/navigation"; // Hook to get the current URL pathname in App Router

export default function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href)); // for current and /about type thing but not for the home route 
  return (
    <Link
      href={href}
      className={cn(
        "transition-colors text-sm duration-200 text-gray-600 hover:text-rose-500",
        className,
        isActive && "text-rose-500"
      )}
    >
      {children}
    </Link>
  );
}
