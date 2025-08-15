/**
 * Post component props
 * 
 * This file contains props for all post-related components
 */

import type { Post, MediaItem } from '../models/post';

/**
 * Props for the PostForm component
 */
export interface PostFormProps {
    mode: "new" | "edit";
    header?: string;
    placeholder: string;
    content: string;
    onChangeContent: (value: string) => void;
    onSubmit: () => void;
    onCancel?: () => void;
    media: MediaItem[];
    setMedia: React.Dispatch<React.SetStateAction<MediaItem[]>>;
}

/**
 * Props for the PostModal component
 */
export interface PostModalProps {
    mode: "new" | "edit";
    post?: Post;
    onClose: () => void;
    onPostCreated?: (newPost: Post) => void;
    onPostUpdated?: (updatedPost: Post) => void;
}