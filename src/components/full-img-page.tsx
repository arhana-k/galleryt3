import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number}) {

    const image = await getImage(props.id);

    const uploadedInfo = await clerkClient.users.getUser(image.userId);

    return <div className="w-full h-full min-w-0">
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
      </div>
    </div>
}