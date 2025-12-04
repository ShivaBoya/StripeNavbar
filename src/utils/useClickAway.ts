import { useEffect } from "react";


export default function useClickAway<T extends HTMLElement | null>(
  ref: React.RefObject<T>,
  handler: (e: Event) => void
) {
  useEffect(() => {
    function onDoc(e: Event) {
      if (!ref?.current) return;
      if (!ref.current.contains(e.target as Node)) handler(e);
    }
    document.addEventListener("pointerdown", onDoc);
    return () => document.removeEventListener("pointerdown", onDoc);
  }, [ref, handler]);
}
