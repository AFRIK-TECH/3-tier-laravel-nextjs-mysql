import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-[50vh] bg-gray-100">
        <main className="container mx-auto px-4 py-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Welcome to Registration App
            </h1>
            <p className="text-gray-600">
              This is a simple user registration application. Use the navigation
              above to register new users or view existing registrations.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
