"use client"
import { useEffect, useRef } from "react";

export function useCursor<T extends HTMLElement>(text: string) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        el.setAttribute("data-cursor", true.toString());
        el.setAttribute("data-cursor-text", text);
    }, [text, ref]);

    return ref;
}