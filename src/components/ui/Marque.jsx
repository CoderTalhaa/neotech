import Image from "next/image";
import Marquee from "react-fast-marquee";

const images = [
  "/img/images/one.png",
  "/img/images/two.png",
  "/img/images/three.png",
  "/img/images/four.png",
  "/img/images/five.png",
  "/img/images/six.png",
  "/img/images/seven.png",
  "/img/images/eight.png",
  "/img/images/nine.png",
  "/img/images/ten.png",
];

export default function Marque() {
  return (
    <Marquee
      speed={30}
      delay={0}
      gradient={true}
      gradientColor={"#001420"}
      gradientWidth={200}
      autoFill={true}
      className="w-full relative bg-[#001e30] bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100"
    >
      {images.map((src, index) => (
        <div key={index} className="mx-10 w-32">
          <Image
            alt={`image-${index + 1}`}
            src={src}
            width={100}
            height={100}
          />
        </div>
      ))}
    </Marquee>
  );
}
