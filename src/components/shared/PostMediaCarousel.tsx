type Media = {
    url: string;
    type: "image" | "video";
    orientation: "portrait" | "landscape" | null;
};

type MediaCarouselProps = {
    media: Media[];
};

export default function MediaCarousel({ media }: MediaCarouselProps) {
    if (!media || media.length === 0) return null;

    return (
        <div className="w-full overflow-hidden overflow-x-auto">
            <div className="flex whitespace-nowrap gap-2 scroll-smooth snap-x snap-mandatory">
                {media.map((item, i) => (
                    <div
                        key={`${item.url}-${i}`}
                        className={`flex-none snap-center rounded-8 ${item.orientation === "portrait"
                            ? "w-[224px] aspect-auto"
                            : "w-[480px] aspect-auto"
                            }`}
                    >
                        {item.type === "video" ? (
                            <video controls className="w-full h-full object-contain rounded-md">
                                <source src={item.url} type="video/mp4" />
                            </video>
                        ) : (
                            <img
                                src={item.url}
                                alt={`media-${i}`}
                                className="w-full h-full object-cover rounded-md"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}