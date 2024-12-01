  import TopNav from '@/app/navs/topnav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col">
      <TopNav />
      <div className="flex flex-grow overflow-hidden">
        <div className="flex-grow md:overflow-y-auto ">{children}</div>
      </div>
    </div>
  );
}
