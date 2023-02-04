import type { ReportCallback } from "web-vitals";
import { handlePromise } from "real-facades";

/**
 * Reports performance.
 *
 * @param onPerfEntry - Callback.
 */
export function reportWebVitals(onPerfEntry?: ReportCallback): void {
  if (onPerfEntry instanceof Function)
    handlePromise.silent(async () => {
      const { getCLS, getFCP, getFID, getLCP, getTTFB } = await import(
        /* webpackChunkName: "dynamic/web-vitals" */
        "web-vitals"
      );

      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
}
