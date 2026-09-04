export default function Fifth()
{
    return (
        <div className="relative flex flex-col w-full p-15 pr-40 bg-[url('/fifth.jpg')] bg-cover bg-center bg-no-repeat gap-50 before:absolute before:inset-0 before:bg-black/50">
            <div className="z-10 flex flex-col gap-10 ml-auto border-r-red-500 border-r-6 border-solid border-black bg-black max-w-xl max-h-xl p-10">
                <div className="flex flex-col gap-7">
                    <h1 className="text-5xl max-w-xl text-white" id="bigText">
                        Disciplined investing. Measurable outcomes. Enduring partnerships.
                    </h1>
                    <p className="text-zinc-500 max-w-100">Every investment is backed by rigorous due diligence, a clear value creation plan, and transparent governance throughout the hold period</p>
                </div>
                <div className="flex flex-col gap-4 pr-15 text-zinc-300 text">
                    <div className="flex justify-between border-b border-solid border-zinc-500">
                        <p>Deal sourcing</p>
                        <p>200+ annually</p>
                    </div>
                    <div className="flex justify-between border-b border-solid border-zinc-500">
                        <p>Due dilligence</p>
                        <p>proprietary</p>
                    </div>
                    <div className="flex justify-between border-b border-solid border-zinc-500">
                        <p>Hold period</p>
                        <p>4-7 years</p>
                    </div>
                    <div className="flex justify-between border-b border-solid border-zinc-500">
                        <p>Active portfolios</p>
                        <p>18 companies</p>
                    </div>
                </div>
            </div>

            <div className="z-10 flex justify-between gap-30 text-zinc-200">
                <p className="max-w-85">Proprietary origination and rigorous underwriting deliver consistent risk-adjusted returns through multiple economic cycles.</p>
                <p className="max-w-xl">Our value creation playbook has driven measurable EBITDA growth across 85+ portfolio companies in six consecutive fund vintages </p>
            </div>
        </div>
    )
}