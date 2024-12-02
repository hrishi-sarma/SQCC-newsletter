export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <header className="bg-black py-4 text-center text-3xl font-bold">
          Quantum Blog
        </header>
        <main className="p-4">{children}</main>
      </div>
    );
  }
  