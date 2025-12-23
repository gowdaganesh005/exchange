import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "sonner";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes/index.tsx";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <>
    <Toaster
      position="top-center"
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "w-[360px] mx-auto flex items-start gap-3 px-4 py-3 " +
            "rounded-xl bg-background border border-border shadow-lg " +
            "text-foreground",

          title: "text-sm font-semibold",
          description: "text-xs text-muted-foreground mt-0.5",

          actionButton:
            "ml-3 rounded-md bg-primary px-3 py-1.5 text-xs font-medium " +
            "text-primary-foreground hover:opacity-90",

          cancelButton:
            "ml-2 rounded-md bg-muted px-3 py-1.5 text-xs font-medium " +
            "text-muted-foreground",

          success: "border-l-4 border-l-chart-3",
          error: "border-l-4 border-l-destructive",
        },
      }}
    />

    <RouterProvider router={router} />
  </>
);
