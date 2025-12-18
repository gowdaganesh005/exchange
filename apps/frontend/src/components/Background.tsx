import { ReactElement, ReactNode } from "react";

interface BackgroundProps {
    children?: ReactNode;
};

function Background({children}:BackgroundProps){
    return(
        <>
            <div
                className="min-w-screen min-h-screen bg-background"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at center, var(--grid-dot) 1px, transparent 3px)",
                  backgroundSize: "30px 30px",
                }}
                >
                {children}
            </div>
        </>
    )

}

export default Background