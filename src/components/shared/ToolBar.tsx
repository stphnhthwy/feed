import { IconButton } from "../subframe/ui"
import { Switch } from "@/ui/components/Switch"
import { FeatherFileEdit, FeatherPlusCircle } from "@subframe/core"

interface ToolBarProps {
    editMode: boolean;
    onToggleEditMode: () => void;
    onNewPostClick: () => void;
}

export default function ToolBar({ editMode, onToggleEditMode, onNewPostClick }: ToolBarProps) {
    return (
        <div
            className="
          p-2
          bg-neutral-0 
          w-fit
          border 
          border-neutral-200
          rounded-lg
          shadow-sm
        "
        >
            <div className="flex flex-row items-center gap-2">
                <IconButton
                    disabled={false}
                    variant="neutral-tertiary"
                    size="medium"
                    icon={<FeatherFileEdit />}
                    loading={false}
                    onClick={() => { }}
                />
                <div className="h-6 w-px bg-neutral-200" />
                <IconButton
                    disabled={false}
                    variant="brand-primary"
                    size="medium"
                    icon={<FeatherPlusCircle />}
                    loading={false}
                    onClick={onNewPostClick}
                />
                <div className="h-6 w-px bg-neutral-200" />
                <Switch checked={editMode} onCheckedChange={onToggleEditMode} />
            </div>
        </div>
    );
}