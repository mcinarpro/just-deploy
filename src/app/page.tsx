import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-16 row-start-2 items-center justify-center">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Image
          className="dark:invert"
          src="https://cdn.worldvectorlogo.com/logos/docker.svg"
          alt="Docker logo"
          width={225}
          height={150}
        />
        <div className="flex flex-col items-center justify-center">
          <p className="uppercase font-semibold">Deployed by github actions</p>
          <Image
            className="dark:invert"
            src="https://github.gallerycdn.vsassets.io/extensions/github/vscode-github-actions/0.27.0/1727202375538/Microsoft.VisualStudio.Services.Icons.Default"
            alt="Github logo"
            width={120}
            height={120}
            priority
          />
        </div>
      </main>
    </div>
  );
}
