import { useState, useEffect, useRef, RefObject } from "react";

export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  initialState: boolean = false
): [boolean, (newState: boolean) => void, RefObject<T>] {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);
  const ref = useRef<T>(null);

  useEffect(() => {
    let id: NodeJS.Timeout;

    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        id = setTimeout(() => {
          setIsOpen(false);
        }, 125);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      clearTimeout(id);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return [isOpen, setIsOpen, ref];
}
