"use client"

import { VStack, HStack, ZStack } from "../../../utilities/Stack"
import { IconButton } from "../subframe/ui"
import { Switch } from "@/ui/components/Switch"
import { FeatherFileEdit, FeatherPlus, FeatherPlusCircle } from "@subframe/core"

interface ToolBarProps {
    editMode: boolean;
    onToggleEditMode: () => void;
    onNewPostClick: () => void;
}

export default function ToolBar({ editMode, onToggleEditMode, onNewPostClick }: ToolBarProps) {
    return (
        <HStack className="p-2 bg-neutral-0 w-fit border border-neutral-200 rounded-lg shadow-sm">
            <HStack className="gap-2">
                <IconButton
                    disabled={false}
                    variant="brand-primary"
                    size="medium"
                    icon={<FeatherPlus />}
                    loading={false}
                    onClick={onNewPostClick}
                />
                <IconButton
                    disabled={false}
                    variant="neutral-tertiary"
                    size="medium"
                    icon={<FeatherFileEdit />}
                    loading={false}
                    onClick={() => { }}
                />
                <div className="h-6 w-px bg-neutral-200" />
                <Switch checked={editMode} onCheckedChange={onToggleEditMode} />
            </HStack>
        </HStack>
    );
}