export default function AwardsList({ items = [] }) {
    return (
        <section className="px-4 md:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-start-6 md:col-span-6 w-full">
                    {items.map(({ year, text }, i) => (
                        <div key={i} className="flex items-baseline gap-6 py-3">
                            <span className="shrink-0 w-14 md:w-16 text-sm font-semibold tabular-nums text-gray-900"> {year}</span>
                            <p className="flex-1 text-sm text-gray-950 border-b border-gray-300 pb-3">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}