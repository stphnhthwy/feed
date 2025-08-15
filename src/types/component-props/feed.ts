/**
 * Feed component props
 * 
 * This file contains props for all feed-related components
 */

import type { Post } from '../models/post';

/**
 * Props for the FeedItem component
 */
export interface FeedItemProps {
    post: Post;
    editable: boolean;
    onEdit: (post: Post) => void;
    onDelete: () => void;
}

/**
 * Props for the FeedList component
 */
export interface FeedListProps {
    posts: Post[];
    editable: boolean;
    onDelete?: (id: string) => void;
    onEdit?: (updatedPost: Post) => void;
}