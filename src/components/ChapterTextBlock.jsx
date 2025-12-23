export default function ChapterTextBlock({ subtitle, children, className = "" }) {
    return (
        <div className={className}>
            {subtitle && (
                <p className="text-regular italic text-gray-400 text-xs mb-1">{subtitle}</p>
            )}
            <p className="text-sm text-gray-950">
                {children}
            </p>
        </div>
    );
}