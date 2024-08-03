import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import Image from "next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full 
    justify-between font-inter">
        {children}
        <div className="auth-asset">
          <div>
            <Image
              src="/icons/2.png"
              width={800}
              height={700}
              alt="auth image"
            />
          </div>
        </div>
    </main>
  );
}
