export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-32 px-4 w-full overflow-hidden rounded-3xl mt-4">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/drg9hguhu/video/upload/v1773010687/3044454-uhd_3840_2160_25fps_aqh9mk.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 max-w-4xl text-white font-[family-name:var(--font-instrument-serif)] drop-shadow-lg">
          Discover the Best Coffee in Your City
        </h1>
        <p className="text-xl text-white/95 max-w-2xl mx-auto drop-shadow-md">
          Explore curated lists of the finest cafes, roasters, and local coffee
          shops around the world.
        </p>
      </div>
    </section>
  );
}
