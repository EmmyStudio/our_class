export function NavBar() {
  return (
    <nav className="flex w-full items-center justify-between border-b border-zinc-200 bg-white/90 px-6 py-4 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-black/80">
      
      <a href="#" className="text-lg font-semibold text-zinc-900 shrink-0 dark:text-zinc-50">
        Our Class
      </a>

      <div className="hidden flex-1 items-center justify-start gap-6 pl-8 md:flex">
        <a href="#" className="border-b-2 border-transparent pb-1 text-sm text-zinc-600 transition hover:border-red-500 hover:text-zinc-900 dark:text-zinc-300 dark:hover:border-red-500 dark:hover:text-white">
          Home
        </a>
        <a href="#" className="border-b-2 border-transparent pb-1 text-sm text-zinc-600 transition hover:border-red-500 hover:text-zinc-900 dark:text-zinc-300 dark:hover:border-red-500 dark:hover:text-white">
          Courses
        </a>
        <a href="#" className="border-b-2 border-transparent pb-1 text-sm text-zinc-600 transition hover:border-red-500 hover:text-zinc-900 dark:text-zinc-300 dark:hover:border-red-500 dark:hover:text-white">
          Time
        </a>
        <a href="#" className="border-b-2 border-transparent pb-1 text-sm text-zinc-600 transition hover:border-red-500 hover:text-zinc-900 dark:text-zinc-300 dark:hover:border-red-500 dark:hover:text-white">
          Contact Us
        </a>
      </div>

      {/* 3. Button (Stays on the far right) */}
      <button className="shrink-0 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
        Get started
      </button>

    </nav>
  );
}