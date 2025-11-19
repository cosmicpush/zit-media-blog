import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowLeft, Pencil, Sparkles } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Background decorative elements */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="animate-pulse absolute top-20 left-10 h-72 w-72 rounded-full bg-orange-200 opacity-20 mix-blend-multiply blur-3xl filter"></div>
        <div
          className="animate-pulse absolute top-40 right-10 h-72 w-72 rounded-full bg-orange-300 opacity-20 mix-blend-multiply blur-3xl filter"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="animate-pulse absolute -bottom-20 left-1/2 h-72 w-72 rounded-full bg-red-200 opacity-20 mix-blend-multiply blur-3xl filter"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="animate-fadeIn mb-8">
          <Image
            src="/assets/logo/logo.png"
            alt="Zit Media Logo"
            width={120}
            height={120}
            className="drop-shadow-lg"
            priority
          />
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          {/* Title */}
          <h1 className="animate-fadeIn text-5xl font-bold text-gray-900 sm:text-6xl lg:text-7xl">
            Zit Media{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>

          {/* Icon with Coming Soon */}
          <div className="animate-fadeIn flex items-center justify-center gap-3" style={{ animationDelay: "0.2s" }}>
            <Clock className="h-6 w-6 text-orange-600" />
            <p className="text-2xl font-semibold text-gray-700 sm:text-3xl">Coming Soon</p>
          </div>

          {/* Description */}
          <p
            className="animate-fadeIn mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl"
            style={{ animationDelay: "0.4s" }}
          >
            We&apos;re crafting something special for you. Our blog will be your go-to resource for
            social media insights, marketing tips, and inspiring stories from the world of content
            creation.
          </p>

          {/* Features grid */}
          <div
            className="animate-fadeIn mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="rounded-2xl border border-gray-100 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600">
                <Pencil className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">Expert Insights</h3>
              <p className="text-sm text-gray-600">
                Learn from industry experts and level up your social media game
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-600 to-red-600">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">Fresh Content</h3>
              <p className="text-sm text-gray-600">
                Regular updates with the latest trends and best practices
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">Actionable Tips</h3>
              <p className="text-sm text-gray-600">Practical guides you can implement right away</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fadeIn pt-8" style={{ animationDelay: "0.4s" }}>
            <Link
              href="https://zit.media"
              className="inline-flex transform items-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-red-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-xl"
            >
              <ArrowLeft className="h-5 w-5" />
              Visit Main Site
            </Link>
          </div>

          {/* Footer text */}
          <p className="animate-fadeIn pt-8 text-sm text-gray-500" style={{ animationDelay: "0.4s" }}>
            In the meantime, explore{" "}
            <Link
              href="https://zit.media"
              className="font-medium text-orange-600 underline hover:text-orange-700"
            >
              zit.media
            </Link>{" "}
            to learn more about our platform
          </p>
        </div>
      </div>
    </div>
  );
}
