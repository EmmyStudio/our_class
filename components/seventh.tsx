export default function Seventh()
{
    return (
        <div className="relative flex flex-col items-center p-65 h-full gap-15 bg-[url('/seventh.jpg')] bg-center bg-cover bg-no-repeat before:absolute before:inset-0 before:bg-black/50 before:rounded-lg">
            <div className="z-10 flex flex-col items-center gap-5">
                <h1 className="text-5xl max-w-xl text-white text-center" id="bigText">Secure your Allocation in Northvale Capital Fund VII</h1>
                <p className="max-w-140 text-zinc-300 text-center">Qualified institutional LPs and portfolio executive leaders may request portal credentials for complete performanc statictics, audit documents and capitalization outcomes</p>
            </div>
            <div className="z-10 flex gap-5">
                <a href=""
                className="flex h-10 p-5 w-full text-black items-center justify-center bg-white border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-red-600 dark:border-white/[.145] dark:hover:bg-green-300 hover:text-blue-700 md:w-[230px]"
                >
                    Request Portal Access
                </a>
                <a href=""
                className="flex h-10 p-5 w-full text-white items-center justify-center bg-black border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-blue-500 hover:text-green-300 md:w-[250px]"
                >
                    Contact Investment Team
                </a>
            </div>
        </div>
    )
}