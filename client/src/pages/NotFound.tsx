import { AlertCircle, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center p-6">
      <div className="w-full max-w-md border border-[rgba(239,244,255,0.12)] bg-[#101820]/90 p-8 rounded-2xl text-center shadow-2xl">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-[#c8ff49]/10 rounded-full border border-[#c8ff49]/30 text-[#c8ff49]">
            <AlertCircle size={32} />
          </div>
        </div>

        <h1 className="text-5xl font-bold text-white mb-2 font-mono tracking-tight">404</h1>

        <h2 className="text-xl font-semibold text-[#eff5ff] mb-3">
          Page Not Found
        </h2>

        <p className="text-[#8e9da0] text-sm mb-8 leading-relaxed">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <div className="flex justify-center">
          <Link
            href="/"
            className="blue-button inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
