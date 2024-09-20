import MaxWidthWrapper from "@/components/layouts/max-width-wrapper";
import Image from "next/image";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="justify-center items-center grid mx-auto h-screen">
        <h1 className=" font-bold text-3xl text-pink-500">
                WELCOME TO OBIKELS CREATIONS
        </h1>
      </div>
    </MaxWidthWrapper>
  );
}
