export function NavBar() {
  return (
    <nav className="flex w-full items-center justify-between border-b border-zinc-200 bg-white/90 px-6 py-4 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-black/80">
      <a href="#" className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        Our Class
      </a>

      <div className="hidden items-center gap-6 md:flex">
        <a href="" className="text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
          Home
        </a>
        <a href="" className="text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
          Courses
        </a>
        <a href="" className="text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
          Time
        </a>
        <a href="" className="text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
          Contact Us
        </a>
      </div>

      <button className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
        Get started
      </button>
    </nav>
  );
}