export default function Home() {
  return (
    <div className="relative">
      <video className="w-screen h-screen object-cover" autoPlay loop muted playsInline poster="/thumbnail.png">
        <source src="/main.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-[20%] left-0 right-0 p-4 text-center">
        <h1 className="font-gowun-dodum text-6xl leading-1.2">10년의 끝에서<br />시작하는 하루</h1>
      </div>
    </div>
  );
}
