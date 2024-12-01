import '@/app/ui/global.css'

export default function Page() {
    return (
      <div className="min-h-screen min-w-full flex flex-col bg-black text-white">
        <div className="flex flex-col justify-center items-center py-10">
          <div className="text-5xl">ABOUT</div>
          <div className="my-10 mx-28 text-base text-center">
            This is the official publication of SQCC, a student-led club at SRM IST. Here, we publish insightful articles and blogs centered on Quantum Computing, Quantum Algorithms, Quantum Information Theory, and their applications across industries. Our content ranges from theoretical foundations to practical implementations and discussions of current trends in quantum technologies, all based on the latest research, projects, and experiences within the community.
          </div>
        </div>

        <div className="flex-1 w-full overflow-auto">
          <div className="text-2xl mx-28 mt-8">Editors :</div>
          <hr className="border-none h-0.5 bg-white w-full my-4" />

          <div className="mt-8 flex items-center mx-28">
            <div className="flex items-center gap-2">
              <img src="../logo.png" alt="Logo" className="w-24 h-auto" />
            </div>
            <div className="ml-12 text-left">
              <h1 className="text-lg font-bold">Name</h1>
              <p className="text-sm">designation</p>
            </div>
          </div>

          <div className="mt-8 flex items-center mx-28">
            <div className="flex items-center gap-2">
              <img src="../logo.png" alt="Logo" className="w-24 h-auto" />
            </div>
            <div className="ml-12 text-left">
              <h1 className="text-lg font-bold">Name</h1>
              <p className="text-sm">designation</p>
            </div>
          </div>

          <div className="mt-8 flex items-center mx-28">
            <div className="flex items-center gap-2">
              <img src="../logo.png" alt="Logo" className="w-24 h-auto" />
            </div>
            <div className="ml-12 text-left">
              <h1 className="text-lg font-bold">Name</h1>
              <p className="text-sm">designation</p>
            </div>
          </div>

          <hr className="border-none h-0.5 bg-white w-full my-4" />

          <div className="text-2xl mx-28 mt-8">Editors :</div>
          <hr className="border-none h-0.5 bg-white w-full my-4" />

          <div className="mt-8 flex items-center mx-28">
            <div className="flex items-center gap-2">
              <img src="../logo.png" alt="Logo" className="w-24 h-auto" />
            </div>
            <div className="ml-12 text-left">
              <h1 className="text-lg font-bold">Name</h1>
              <p className="text-sm">designation</p>
            </div>
          </div>

          <div className="mt-8 flex items-center mx-28">
            <div className="flex items-center gap-2">
              <img src="../logo.png" alt="Logo" className="w-24 h-auto" />
            </div>
            <div className="ml-12 text-left">
              <h1 className="text-lg font-bold">Name</h1>
              <p className="text-sm">designation</p>
            </div>
          </div>

          <div className="mt-8 flex items-center mx-28">
            <div className="flex items-center gap-2">
              <img src="../logo.png" alt="Logo" className="w-24 h-auto" />
            </div>
            <div className="ml-12 text-left">
              <h1 className="text-lg font-bold">Name</h1>
              <p className="text-sm">designation</p>
            </div>
          </div>
        </div>
      </div>
    );
  }