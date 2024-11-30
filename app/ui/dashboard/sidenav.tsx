import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function TopNav() {
  return (
    <div className="flex h-20 min-h-20 items-center justify-between px-4 bg-black md:px-6 border-b border-white-1000">
      {/* Logo Section */}
      <Link href="/" className="flex items-center">
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>

      {/* Navigation and Actions */}
      <div className="flex items-center space-x-4">
        {/* Navigation Links */}
        <NavLinks />
      </div>
    </div>
  );
}
