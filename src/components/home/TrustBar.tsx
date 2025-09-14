export default function TrustBar() {
  const logos = [
    { src: "/assets/logos/client1.svg", alt: "Client 1" },
    { src: "/assets/logos/client2.svg", alt: "Client 2" },
    { src: "/assets/logos/client3.svg", alt: "Client 3" },
    { src: "/assets/logos/client4.svg", alt: "Client 4" },
    { src: "/assets/logos/client5.svg", alt: "Client 5" },
  ];

  const hasRealLogos = false; // flip to true if files exist

  return (
    <section aria-label="Trusted by" className="mx-auto max-w-7xl px-6 py-8 sm:py-10">
      {hasRealLogos ? (
        <ul className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 opacity-80">
          {logos.map((l) => (
            <li key={l.alt} className="transition">
              <img
                src={l.src}
                alt={l.alt}
                className="h-8 w-auto grayscale hover:grayscale-0 transition duration-200"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Trusted by leaders in healthcare, finance, and recruiting.
        </p>
      )}
    </section>
  );
}