import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="mt-[100px] flex flex-col justify-center items-center">
      <div className="mt-[15vh] text-black flex items-center text-[7rem]">
        The Quantum Gazette
      </div>
      <div className="text-black flex text-[2rem] mt-[3vh]">
        OFFICIAL NEWSLETTER OF SQCC
      </div>
      
      {/* Explore Button */}
      <Link
        href="/dashboard"
        className="mt-[5vh] px-[40px] py-[20px] border-2 border-black text-black text-[1.5rem] font-semibold uppercase rounded transition-all duration-300 transform hover:bg-black hover:text-white hover:border-white"
      >
        Explore
      </Link>
    </div>
  );
}
