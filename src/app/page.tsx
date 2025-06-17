import Image from "next/image";

export default function Home() {
  return (
    <div>
      <video className="w-screen h-screen object-cover" autoPlay loop muted poster="/thumbnail.png">
        <source src="/main.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
