import Menu from "../../components/menu";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='h-screen flex'>
      {/* Left */}
      <div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  p-4'>
        <Link
          href={"/"}
          className='flex items-center lg:justify-start justify-center gap-2'>
          <Image src='/logo.png' alt='Stem Logo' width={32} height={32} />
          <span className='hidden lg:block font-bold'>Stem LC</span>
        </Link>
        <Menu />
      </div>
      {/* Right */}
      <div className='w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col'>
        <Navbar />
        {children}
      </div>
    </div>
  );
}