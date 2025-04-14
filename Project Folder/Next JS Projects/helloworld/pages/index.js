import Image from "next/image";
import dachshundpuppy from "../assets/dachshund-puppy.jpg";

export default function Home() {
  return (
    <div>
      <h2>Hello World!</h2>
      <p>My first Next.js app.</p>
      <Image
        src={dachshundpuppy}
        alt="Dachshund Puppy"
        width={500}
        height={500}
      />
    </div>
  );
}
