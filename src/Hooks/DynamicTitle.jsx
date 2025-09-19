import { useEffect } from "react";

export default function useDynamicTitle(title) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);
}
