import React from "react";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br" />

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-black">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-black/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-sky-900" />
            <span className="text-sm font-medium">Your next favorite read awaits!</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            Dive into the{" "}
            <span className=" bg-gradient-to-r text-blue-500 bg-clip-text">
              World of Ideas
            </span>
          </h1>

          {/* Subheadline */}
          <p className="font-sans text-xl md:text-2xl text-gray mb-12 max-w-2xl mx-auto leading-relaxed">
            Explore thought-provoking articles, insights, and stories that inspire curiosity.
          </p>
          {/* Featured Quote */}
          <div className="mt-16">
            <div className="bg-black/5 backdrop-blur-sm border border-black/10 rounded-2xl p-6 max-w-2xl mx-auto">
              <blockquote className="text-lg italic text-gray-600 mb-3">
                "The more that you read, the more things you will know. The more that you learn, the more places you'll go."
              </blockquote>
              <cite className="text-sm text-sky-300 font-medium">— Dr. Seuss</cite>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
