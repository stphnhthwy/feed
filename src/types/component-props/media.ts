/**
 * Media component props
 * 
 * This file contains props for all media-related components
 */

import type { MediaItem } from '../models/post';

/**
 * Upload state for media items
 */
export type UploadState = "pending" | "success" | "error";

/**
 * Extended MediaItem with upload-specific fields
 */
export interface LocalMedia extends MediaItem {
    file: File;
    status: UploadState;
}

/**
 * Props for the MediaUpload component
 */
export interface MediaUploadProps {
    media: LocalMedia[];
    setMedia: React.Dispatch<React.SetStateAction<LocalMedia[]>>;
}

/**
 * Props for the MediaCarousel component
 */
export interface MediaCarouselProps {
    media: MediaItem[];
}