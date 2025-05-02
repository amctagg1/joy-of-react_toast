import React from "react";

import { useKeydown } from "./UseKeydown";

export function useEscapeKey(callback) {
  const handleEscapeKey = React.useCallback(() => {
    callback();
  }, [callback]);

  useKeydown("Escape", handleEscapeKey);
}