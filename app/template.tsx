"use client";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import LoadingScreen from "@/components/sections/LoadingScreen";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

// Extend the Window interface
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (
      event: string,
      actionOrConfig: string | Record<string, unknown>,
      options?: Record<string, unknown>
    ) => void;
  }
}

export default function Template({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    (function () {
      const s1 = document.createElement("script");
      const s0 = document.getElementsByTagName(
        "script"
      )[0] as HTMLScriptElement;
      s1.async = true;
      s1.src = "https://embed.tawk.to/671c05c54304e3196ad85659/1ib2nd36v";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode?.insertBefore(s1, s0);
    })();
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const gtagScript = document.createElement("script");
    gtagScript.src =
      "https://www.googletagmanager.com/gtag/js?id=AW-11301458978";
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    const initGtag = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = (event, actionOrConfig, options?) => {
        if (typeof actionOrConfig === "string") {
          window.dataLayer.push({
            event,
            action: actionOrConfig,
            ...(options || {}),
          });
        } else {
          window.dataLayer.push({ event, ...(actionOrConfig || {}) });
        }
      };

      window.gtag("js", { timestamp: new Date().toISOString() });
      window.gtag("config", { id: "AW-11301458978" });
    };

    gtagScript.onload = initGtag;
  }, []);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    handleStart();
  }, [pathname]);

  // ✅ Google Ads Conversion Event Function (Integrated)
  const gtagSendEvent = () => {
    if (typeof window.gtag !== "function") return;

    window.gtag("event", "ads_conversion_Form_1", {
      // Optional: Add event parameters here
    });
  };

  // ✅ Automatically trigger event on pathname change
  useEffect(() => {
    gtagSendEvent();
  }, [pathname]);

  return (
    <>
      {children}
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
    </>
  );
}
