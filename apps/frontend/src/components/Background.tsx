import { ReactElement, ReactNode } from "react";

interface BackgroundProps {
    children?: ReactNode;
};

function Background({ children }: BackgroundProps) {
    return (
        <div
            className="w-screen h-screen overflow-hidden bg-background"
            style={{
                backgroundImage:
                    "radial-gradient(circle at center, var(--grid-dot) 1px, transparent 3px)",
                backgroundSize: "30px 30px",
            }}
        >
            {children}
        </div>
    );
}

export default Background