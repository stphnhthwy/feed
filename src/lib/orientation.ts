export async function getMediaOrientation(
    file: File
): Promise<"portrait" | "landscape" | null> {
    return new Promise((resolve) => {
        const url = URL.createObjectURL(file);

        if (file.type.startsWith("image")) {
            const img = new Image();
            img.onload = () => {
                resolve(img.width > img.height ? "landscape" : "portrait");
                URL.revokeObjectURL(url);
            };
            img.src = url;
        } else if (file.type.startsWith("video")) {
            const video = document.createElement("video");
            video.onloadedmetadata = () => {
                resolve(
                    video.videoWidth > video.videoHeight ? "landscape" : "portrait"
                );
                URL.revokeObjectURL(url);
            };
            video.src = url;
        } else {
            resolve(null);
        }
    });
}