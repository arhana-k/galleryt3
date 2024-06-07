import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/queries";
import { Button } from "./ui/button";

export default async function FullPageImageView(props: { id: number}) {
    const idAsNumber = Number(props.id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");
    const image = await getImage(props.id);

    const uploadedInfo = await clerkClient.users.getUser(image.userId);

    return (
    <div className="w-full h-full min-w-0">
        <div className="flex-shrink flex justify-center items-center">
        <img src={image.url} className="flex-shrink object-contain" />
        </div>
        <div className="w-48 flex flex-shrink-0 flex-col border-l gap-2">
            <div className="text-lg border-b text-center p-2">{image.name}</div>
        
        <div className="flex flex-col px-2">
            <span>Uploaded By:</span>
            <span>{uploadedInfo.fullName}</span>
        </div>
        <div className="flex flex-col px-2">
            <span>Created On:</span>
            <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>

        <div className="flex flex-col px-2">
            <form action={async () => {
                "use server";
                await deleteImage(idAsNumber);
            }}>
            <Button type="submit" variant="destructive">Delete</Button>
            </form>
        </div>

      </div>
    </div>
    );
}