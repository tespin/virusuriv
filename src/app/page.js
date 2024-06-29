import Image from "next/image";
import Video from "next-video";
import clip1 from "/videos/01.mp4";
import clip2 from "/videos/02.mp4";
import clip3 from "/videos/03.mp4";
import clip4 from "/videos/04.mp4";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* <Video src={clip1} />
        <Video src={clip2} /> */}
        <Video src={clip3} />
        <Video src={clip4} />
      </div>
    </main>
  );
}
