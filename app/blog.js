"use client";
export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-night text-white px-4 py-24">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">Blog & Insights</h1>
      <p className="text-lg text-slate-200 mb-8">Read our latest articles, news, and insights from the digital galaxy.</p>
      <div className="w-full max-w-4xl flex flex-col gap-8 items-center">
        <div className="border border-white rounded-lg p-8 w-full text-center text-slate-300">(Blog posts coming soon...)</div>
      </div>
    </div>
  );
} 