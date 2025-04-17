type MediaCarouselProps = {
    mediaUrls: string[];
};

export default function MediaCarousel({ mediaUrls }: MediaCarouselProps) {
    if (!mediaUrls || mediaUrls.length === 0) return null;

    return (
        <div className="flex whitespace-nowrap gap-4">
            {mediaUrls.map((url, i) => {
                const isVideo = url.endsWith(".mp4") || url.endsWith(".webm");

                return (
                    <div
                        key={i}
                        className="flex-none w-full max-w-full"
                    >
                        {isVideo ? (
                            <video
                                controls
                            // className="w-full h-full object-cover rounded-md aspect-video"
                            >
                                <source src={url} type="video/mp4" />
                            </video>
                        ) : (
                            <img
                                src={url}
                                alt={`media-${i}`}
                            // className="w-full h-full object-cover rounded-md aspect-video"
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}