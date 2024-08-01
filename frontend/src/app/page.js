import HeroComponent from "@/components/heroComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroComponent imageSrc="home.webp"
      text="Your Gateway to College Success and Opportunities"
      btnText="Get Started"
      />
    </div>
  );
}
