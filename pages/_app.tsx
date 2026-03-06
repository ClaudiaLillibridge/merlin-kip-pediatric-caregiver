import type { AppProps } from "next/app";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "../styles/globals.css";

// ✅ NEW: Wrap the app with the CareProvider (context)
import { CareProvider } from "../context/CareContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [flashKey, setFlashKey] = useState(0);

  useEffect(() => {
    const onStart = () => {
      setFlashKey((k) => k + 1);
    };

    router.events.on("routeChangeStart", onStart);
    return () => {
      router.events.off("routeChangeStart", onStart);
    };
  }, [router.events]);

  return (
    <CareProvider>
      {/* Flash overlay (replays on every navigation) */}
      <div key={flashKey} className="wand-flash animate" />

      {/* Top-right Merlin image */}
      <div
        style={{
          position: "fixed",
          top: 12,
          right: 12,
          zIndex: 9999,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/images/Merlin-hero.png"
          alt="Merlin"
          width={70}
          height={70}
          priority
        />
      </div>

      <Component {...pageProps} />
    </CareProvider>
  );
}