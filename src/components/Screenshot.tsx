"use client";

type ScreenshotProps = {
  src: string;
  alt: string;
};

export function Screenshot({ src, alt }: ScreenshotProps) {
  return (
    <div className="flex justify-center overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-zinc-100">
      {/* Drawn at real pixel size so the screenshot is not stretched soft. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        draggable={false}
        ref={(node) => {
          if (!node) return;
          const apply = () => {
            if (!node.naturalWidth) return;
            const dpr = window.devicePixelRatio || 1;
            node.style.maxWidth = `min(100%, ${node.naturalWidth / dpr}px)`;
          };
          if (node.complete) apply();
          else node.onload = apply;
        }}
        className="h-auto w-auto max-w-full"
      />
    </div>
  );
}
