/**
 * Post domain models
 * 
 * This file contains all core data models related to posts and media
 */

/**
 * Media type enumeration
 */
export type MediaType = "image" | "video";

/**
 * Media orientation types
 */
export type Orientation = "portrait" | "landscape";

/**
 * Core media item structure
 */
export interface MediaItem {
    url: string;
    type: MediaType;
    orientation: Orientation | null;
}

/**
 * Post entity from database/API
 */
export interface Post {
    id: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    media: MediaItem[];
}

/**
 * Form data for creating/updating posts
 */
export interface PostFormData {
    content: string;
    media: MediaItem[];
}