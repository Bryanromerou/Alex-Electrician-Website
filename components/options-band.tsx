import Image from "next/image";

export function OptionsBand({
  title,
  images,
}: {
  title: string;
  images: { src: string; alt: string }[];
}) {
  return (
    <div className="mx-auto max-w-6xl">
      <h3 className="text-center text-2xl font-semibold">{title}</h3>
      <div className="mt-10 grid justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full max-w-[260px] overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/15"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={520}
              height={360}
              className="h-[170px] w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
