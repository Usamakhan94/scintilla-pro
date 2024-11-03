// "use client";
// import { useEffect, useState } from "react";
// import Lenis from "lenis";
// import LoadingScreen from "@/components/sections/LoadingScreen";
// import { usePathname } from "next/navigation";
// import { AnimatePresence } from "framer-motion";

// export default function Template({ children }: { children: React.ReactNode }) {
//   const [loading, setLoading] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const lenis = new Lenis();

//     function raf(time: DOMHighResTimeStamp) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);
//   }, []);

//   const Tawk_API: any = {},
//     Tawk_LoadStart = new Date();

//   (function () {
//     const s1 = document.createElement("script");
//     const s0: any = document.getElementsByTagName("script")[0];
//     s1.async = true;
//     s1.src = "https://embed.tawk.to/671c05c54304e3196ad85659/1ib2nd36v";
//     s1.charset = "UTF-8";
//     s1.setAttribute("crossorigin", "*");
//     s0.parentNode.insertBefore(s1, s0);
//   })();

//   useEffect(() => {
//     const handleStart = () => setLoading(true);
//     setTimeout(() => {
//       const handleComplete = () => setLoading(false);
//       handleComplete();
//     }, 3000);
//     handleStart();
//   }, [pathname]);

//   return (
//     <>
//       {children}
//       <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
//     </>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import LoadingScreen from "@/components/sections/LoadingScreen";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

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

  // Define Tawk_API as an empty object with an index signature for dynamic properties.
  // const Tawk_API: { [key: string]: any } = {};

  useEffect(() => {
    if (window === undefined) return;
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
    const handleStart = () => setLoading(true);
    setTimeout(() => {
      const handleComplete = () => setLoading(false);
      handleComplete();
    }, 3000);
    handleStart();
  }, [pathname]);

  return (
    <>
      {children}
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
    </>
  );
}
