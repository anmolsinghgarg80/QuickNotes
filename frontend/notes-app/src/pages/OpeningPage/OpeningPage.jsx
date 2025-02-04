import { PencilIcon, TrashIcon, TagIcon, BookmarkIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function HomePage() {

  const features = [
    {
      icon: PlusCircleIcon,
      title: "Add Notes",
      description: "Create rich text notes instantly with markdown support"
    },
    {
      icon: PencilIcon,
      title: "Edit Notes",
      description: "Modify your notes with our intuitive editor anytime"
    },
    {
      icon: TrashIcon,
      title: "Delete Notes",
      description: "Safely remove unwanted notes with confirmation"
    },
    {
      icon: BookmarkIcon,
      title: "Pin Notes",
      description: "Keep important notes at the top for quick access"
    },
    {
      icon: TagIcon,
      title: "Tag System",
      description: "Organize notes with custom tags and categories"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">QuickNotes</h1>
          <div className="space-x-4">
          <Link to = "/login" className="btn-primary">
                Log In
            </Link> 
            <Link to = "/signup" className="btn-primary">
                Create an Account
            </Link> 
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 py-12 flex-grow">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Organize Your Thoughts Effortlessly
          </h1>
          <p className="text-gray-600 text-lg">
            Secure, fast, and intuitive note-taking experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 my-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="my-8 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          Why Choose QuickNotes?
        </h2>
        <p className="text-gray-600 mb-8">
          Our intuitive platform combines simplicity with powerful organization tools, 
          helping you capture ideas instantly and find them effortlessly later.
        </p>
        </div>
      </main>

       <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">QuickNotes</h4>
            <p className="text-gray-400 text-sm">
              Your thoughts deserve a beautiful home. Simple, secure, and 
              intuitive note-taking for everyone.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Features</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Secure Cloud Storage</li>
              <li>Cross-Platform Sync</li>
              <li>Advanced Search</li>
              <li>Collaboration Tools</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Stay Updated</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Join
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Get product updates and special offers
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-5 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 QuickNotes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>


    </div>
  );
}