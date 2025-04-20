import { DsNavigation } from "../subframe/ui";
import { Switch } from "@/ui/components/Switch";
import { useEditMode } from "@/lib/editMode";

export default function DSNavigation() {
    const [editMode, setEditMode] = useEditMode();

    return (
        <div className="h-screen">
            <DsNavigation
                header={
                    <div className="flex w-full items-center gap-4">
                        <img
                            className="h-6 flex-none object-cover"
                            src="https://res.cloudinary.com/subframe/image/upload/v1744977058/uploads/10151/p0kh4hfh38fqyj09rmpl.svg"
                        />
                    </div>
                }
                footer={
                    <div className="flex items-center gap-2">
                        <Switch checked={editMode} onCheckedChange={setEditMode} />
                        <span className="text-body font-body text-default-font">Edit mode</span>
                    </div>
                }
            >
                <div className="flex w-full flex-col items-start gap-2 px-1 py-1" />
            </DsNavigation>
        </div>
    );
}