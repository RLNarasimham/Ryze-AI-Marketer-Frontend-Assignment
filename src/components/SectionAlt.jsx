import React from "react";

export default function SectionAlt({
  titleTop,
  titleMain,
  text,
  imageLeft = false,
  imageSrc = null,
  imageAlt = "",
}) {
  const image = imageSrc ? (
    <div className="flex justify-center lg:justify-center">
      <div className="section-image w-full max-w-md overflow-hidden rounded-xl shadow-lg bg-white/3 flex items-center justify-center">
        <picture>
          <source srcSet={imageSrc} />
          <img
            src={imageSrc}
            alt={imageAlt || `${titleMain} — ${titleTop}`}
            loading="lazy"
            decoding="async"
            className="w-full h-full max-w-full max-h-full object-contain"
            style={{
              display: "block",
              margin: "0 auto",
            }}
          />
        </picture>
      </div>
    </div>
  ) : (
    <div className="flex justify-center lg:justify-center">
      <div className="section-image w-full max-w-md aspect-square sm:aspect-video lg:aspect-square" />
    </div>
  );

  const content = (
    <div
      className={`flex flex-col text-center justify-center items-center ${imageLeft ? "lg:pl-8" : "lg:pr-8"
        }`}
    >
      <p className="text-3xl gradient-text font-semibold tracking-wide uppercase mb-2">
        {titleTop}
      </p>
      <h3 className="text-2xl sm:text-3xl items-center lg:text-4xl font-bold text-white leading-tight">
        {titleMain}
      </h3>
      <p className="mt-4 text-white/50 text-base leading-relaxed max-w-lg text-center" style={{ paddingTop: "8px", paddingBottom: "8px" }}>
        {text}
      </p>
      <div className="mt-6">
        <button type="button" className="btn-secondary focus-ring min-touch">
          Learn more
        </button>
      </div>
    </div>
  );

  return (
    <section className="w-full mx-auto px-6 sm:px-10 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12 sm:py-20 hero-section-padding" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        
        <div className={imageLeft ? "order-1" : "order-1 lg:order-2"}>
          <div className="w-full h-auto">{image}</div>
        </div>

        
        <div
          className={`${imageLeft ? "order-2" : "order-2 lg:order-1"
            } space-y-6 lg:space-y-8`}
        >
          {content}
        </div>
      </div>
    </section>
  );
}
