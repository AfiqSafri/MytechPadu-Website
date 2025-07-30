"use client";
export default function Services() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-night text-white px-4 py-24">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">Our Services</h1>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center">
        <ServiceCard
          title="App Development"
          description="We build modern, scalable mobile and web applications to launch your ideas into the digital universe."
        />
        <ServiceCard
          title="Software Solutions"
          description="Custom software tailored to your business needs, engineered to help you conquer your market."
        />
      </div>
    </div>
  );
}

function ServiceCard({ title, description }) {
  return (
    <div className="professional-card p-6 flex flex-col items-center w-full max-w-xs">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-base text-white text-center">{description}</p>
    </div>
  );
} 