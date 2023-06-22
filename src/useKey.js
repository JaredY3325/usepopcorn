import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callback);

      // be sure to include a clean up function because with each new movie a new event listener is added!
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
