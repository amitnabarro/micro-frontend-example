import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

/**
 * Hook to render arbitrary React content into the shared Search toolbar's
 * `div#search_bar` via a React portal.
 */
export const useSearchBarPortal = (content: ReactNode) => {
    const [container, setContainer] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const el = document.getElementById('search_bar');
        if (el instanceof HTMLElement) {
            setContainer(el);
        }
    }, []);

    const portal = useMemo(() => {
        if (!container) return null;
        return createPortal(content, container);
    }, [container, content]);

    return { portal, container };
};
