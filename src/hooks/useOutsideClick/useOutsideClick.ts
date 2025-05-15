import { useEffect } from 'react';

export const useOutsideClick = (ref: React.RefObject<HTMLElement>, callback: () => void, ignoreRef?: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        (!ignoreRef || !ignoreRef.current?.contains(event.target as Node))
      ) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback, ignoreRef]);
};
