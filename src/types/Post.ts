export type Post = {
    id: string;
    content: string;
    createdAt: string; // or Date
    updatedAt: string; // or Date
    media: {
        url: string;
        type: "image" | "video";
        orientation: "portrait" | "landscape";
    }[];
};