# TypeScript Style Guide for Feed App

This document outlines the conventions and standards for TypeScript types and interfaces in the Feed application.

## General Principles

1. **Consistency**: Follow established patterns for new code
2. **Clarity**: Use descriptive names and appropriate documentation
3. **Type Safety**: Avoid `any` types where possible

## Naming Conventions

### Type Names

- Use **PascalCase** for type names
- Use **descriptive nouns** for domain types (e.g., `Post`, `MediaItem`)
- Use **ComponentNameProps** pattern for component props (e.g., `PostFormProps`, `FeedItemProps`)
- Use **descriptive adjectives** for state-related types (e.g., `UploadState`)

### Type Imports and Exports

- Always use **explicit type imports**: `import type { TypeName } from './path'`
- **Export named types** (not default exports) for better discoverability
- Use **barrel files** (index.ts) for re-exporting types from a directory

## Type Definitions

### Domain Types

- Use **interfaces** for domain entities:
  ```typescript
  export interface Post {
    id: string;
    content: string;
    // ...
  }
  ```

- Use **type aliases** for simple types or unions:
  ```typescript
  export type MediaType = "image" | "video";
  ```

### Component Props

- Always use **interfaces** for component props:
  ```typescript
  export interface ComponentNameProps {
    // props here
  }
  ```

- Document props with JSDoc comments:
  ```typescript
  /**
   * Props for the ComponentName component
   */
  export interface ComponentNameProps {
    /** Description of propA */
    propA: string;
    /** Description of propB */
    propB?: number;
  }
  ```

### React State Types

- Type React state setters explicitly:
  ```typescript
  const [state, setState] = useState<StateType>(initialValue);
  
  // When passing as prop:
  setMedia: React.Dispatch<React.SetStateAction<MediaItem[]>>;
  ```

### Extending Types

- Use interface extension for adding to existing types:
  ```typescript
  export interface LocalMedia extends MediaItem {
    file: File;
    status: UploadState;
  }
  ```

## File Organization

Keep types organized in the following structure:

```
/src/types/
  - index.ts           # Barrel file re-exporting all types
  - Post.ts            # Domain types for posts
  - STYLE_GUIDE.md     # This document
```

## Best Practices

1. **Avoid type duplication** - create a shared type and reuse it
2. **Document complex types** with JSDoc comments
3. **Never use `any`** when a more specific type is possible
4. **Export component prop types** for reuse in other components
5. **Use type modifiers** appropriately:
   - `?` for optional properties
   - `readonly` for immutable properties
   - `Pick<T>`, `Omit<T>`, etc. for type transformations