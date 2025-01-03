"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    // Navigate back in the browser history
    router.back();
  };

  return (
    <section className="section-container h-[calc(100dvh-24px)]">
      <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
        This page could not be found!
      </h2>
      <div className="mt-4 flex flex-col gap-2">
        <div className="space-y-2">
          <p className="text-bold  md:text-lg">
            The page you requested was not found, and we have a fine guess why.
          </p>
          <ul className="space-y-2 list-disc ml-8">
            <li className="text-sm font-medium ">
              If you typed the URL directly, please make sure the spelling is
              correct.
            </li>
            <li className="text-sm font-medium">
              If you clicked on a link to get here, the link is outdated.
            </li>
          </ul>
        </div>

        <ul className="mt-8 flex flex-col gap-1 list-disc ml-8 text-sm lg:text-base">
          <li>Use the navigation menu above to find your way</li>
          <li>
            Visit our{" "}
            <Link
              href={"/#about-us"}
              prefetch={false}
              className="font-medium border-b border-black transition-all duration-150 hover:text-blue-500 hover:border-blue-500"
            >
              About Us{" "}
            </Link>{" "}
            or{" "}
            <Link
              href={"/#services"}
              prefetch={false}
              className="font-medium border-b border-black transition-all duration-150 hover:text-blue-500 hover:border-blue-500"
            >
              Services
            </Link>{" "}
            pages to learn more about what we offer
          </li>
          <li>
            Go{" "}
            <button
              onClick={handleGoBack}
              className="font-medium border-b border-black transition-all duration-150 hover:text-blue-500 hover:border-blue-500"
            >
              back
            </button>{" "}
            to the previous page.
          </li>
          <li>
            Click{" "}
            <Link
              href={"/"}
              className="font-medium border-b border-black transition-all duration-150 hover:text-blue-500 hover:border-blue-500"
            >
              here
            </Link>{" "}
            to return to the home page.
          </li>
        </ul>
      </div>
    </section>
  );
}
