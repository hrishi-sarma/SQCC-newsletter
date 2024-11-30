export default function Page() {
    // Example newsletter data, you would replace this with real data from your backend
    const newsletters = [
      {
        id: 1,
        title: 'Exploring Quantum Computing',
        description: 'A brief overview of quantum computing principles and how they might revolutionize the tech industry...',
        image: 'https://via.placeholder.com/300', // Replace with actual image URLs
        url: '/blog/quantum-computing'
      },
      {
        id: 2,
        title: 'The Future of Quantum Encryption',
        description: 'How quantum encryption could be the key to secure communication in the digital age...',
        image: 'https://via.placeholder.com/300',
        url: '/blog/quantum-encryption'
      },
      {
        id: 3,
        title: 'Quantum Algorithms for Machine Learning',
        description: 'Exploring how quantum algorithms are being used in machine learning to solve complex problems...',
        image: 'https://via.placeholder.com/300',
        url: '/blog/quantum-algorithms'
      },
      
    ];
  
    return (
      <div className="bg-black p-8 h-full ">
        <h1 className="text-5xl text-white mb-6 text-center mt-9 mb-9">Latest in the Quantum World</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsletters.map((newsletter) => (
            <div
              key={newsletter.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img
                src={newsletter.image}
                alt={newsletter.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{newsletter.title}</h2>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">{newsletter.description}</p>
                <a
                  href={newsletter.url}
                  className="inline-block px-6 py-2 border border-black text-black rounded-full hover:bg-black hover:text-white transition-all"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  