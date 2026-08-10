"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";

export function NavMobile() {
  const [open, setOpen] = useState(false);

  const links = marketingConfig.mainNav;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {/* Mobile menu button */}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className={cn(
          "fixed right-3 top-3 z-50 rounded-full p-2.5",
          "transition-colors duration-200",
          "hover:bg-muted focus:outline-none",
          "md:hidden",
        )}
      >
        {open ? (
          <X className="size-6" />
        ) : (
          <Menu className="size-6" />
        )}
      </button>

      {/* Mobile navigation */}
      <nav
        className={cn(
          "fixed inset-0 z-40 w-full overflow-auto bg-background px-6 py-20",
          "md:hidden",
          !open && "pointer-events-none invisible opacity-0",
          open && "visible opacity-100",
          "transition-opacity duration-200",
        )}
      >
        <div className="flex min-h-full flex-col">
          <ul className="divide-y divide-border border-y border-border">
            {links?.map((item) => (
              <li key={item.href} className="py-5">
                <Link
                  href={item.disabled ? "#" : item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex w-full items-center justify-between",
                    "text-xl font-medium",
                    item.disabled &&
                      "cursor-not-allowed opacity-50",
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile footer */}
          <div className="mt-auto pt-12">
            <p className="font-heading text-lg font-semibold">
              Sunday House
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Rishop, West Bengal
            </p>

            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
              A quiet mountain homestay in the hills of Rishop.
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}