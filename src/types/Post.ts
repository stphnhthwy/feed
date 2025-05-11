// The strucutre coming from the database/API
export type Post = {
    id: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    media: MediaItem[];
};

// 🚧 Building blocks below

// Structure for the media rather its saved or new
export type MediaItem = {
    url: string;
    type: "image" | "video";
    orientation: "portrait" | "landscape" | null;
}

// Structure of a form before saving it
export type PostFormData = {
    content: string;
    media: MediaItem[];
}