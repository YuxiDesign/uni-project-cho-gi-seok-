export default function SmallPhotoCard({ text, src, alt = "", className = "", }) {
    return (
        <figure className={className}>
            {text ? (<figcaption className="mb-3 text-xs text-gray-400">{text}</figcaption>) : null}

            <div className="w-full overflow-hidden bg-gray-100">
                <img src={src} alt={alt} className="w-full h-auto object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
            </div>
        </figure>
    );
}