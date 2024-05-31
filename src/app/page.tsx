// import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { error } from "console";
import { desc } from "drizzle-orm";
import Image from "next/image";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";


// const mockUrls = [
//   "https://utfs.io/f/e009ed53-cdcf-44e2-b757-ba0c2731f307-406im7.jpg",
//   "https://utfs.io/f/27512ae4-468c-461c-9279-204d93bda330-3t8v1k.jpg",
// ];

export const dynamic = "force-dynamic";

async function Images() {
const images = await getMyImages();

  return (

    // {posts.map((post) => (
    //   <div key={post.id}>{post.name}</div>
    // ))} 
   
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          {/* <Link href={`/img/${image.id}`}> */}
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
              alt={image.name}
            />
          {/* </Link> */}
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

// const mockImgs = mockUrls.map((url, index)=> ({
//   id : index + 1,
//   url,
// }));

export default async function HomePage() {
  // console.log(posts);
  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-center text-2xl">Please sign in above!</div>
      </SignedOut>
      <SignedIn>
        <Images/>
      </SignedIn>

    </main>
  );
}
    // {/* <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white"> */}
    //   {/* Hey there! */}
    //   {/* <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
    //     <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
    //       Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
    //     </h1>
    //     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
    //       <Link
    //         className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
    //         href="https://create.t3.gg/en/usage/first-steps"
    //         target="_blank"
    //       >
    //         <h3 className="text-2xl font-bold">First Steps →</h3>
    //         <div className="text-lg">
    //           Just the basics - Everything you need to know to set up your
    //           database and authentication.
    //         </div>
    //       </Link>
    //       <Link
    //         className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
    //         href="https://create.t3.gg/en/introduction"
    //         target="_blank"
    //       >
    //         <h3 className="text-2xl font-bold">Documentation →</h3>
    //         <div className="text-lg">
    //           Learn more about Create T3 App, the libraries it uses, and how to
    //           deploy it.
    //         </div>
    //       </Link>
    //     </div>
    //   </div> */}
   

