export default function LandingPage(){
    return (
        <>
        <div className="relative min-h-screen overflow-hidden bg-[#1e1e2e]">
  {/* Large green glow bottom left */}
  <div className="absolute left-1/2 top-32 h-[500px] w-[500px] rounded-full bg-[#cba6f785] blur-[120px]" />

  {/* Center glow */}
  <div className="absolute bottom-0 left-1/2 h-[350px] w-[600px] -translate-x-40 rounded-full bg-[#cba6f775] blur-[120px]" />

  {/* Curved bright beam */}
  <div className="absolute right-0 top-1/5 h-[700px] w-[1200px] overflow-hidden">
    <div className="absolute right-[-140px] top-[250px] h-[400px] w-[900px] rotate-[-35deg] rounded-full border-t-[2px] bg-[#cba6f717] border-[#cba6f7] shadow-[20px_-10px_70px_#cba6f7]" />
  </div>

  {/* Dark overlay gradient */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#cba6f78b,transparent_30%),linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,1))] blur-sm" />

  {/* Noise / vignette effect */}
  {/* <div className="absolute inset-0 bg-black/20 [mask-image:radial-gradient(circle,transparent_40%,black_100%)]" /> */}

  {/* Content */}
  <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
    <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
      Transform the way
    </h1>

    <span className="mt-4 text-5xl font-semibold text-white/40 blur-[2px] md:text-7xl">
      you
    </span>

    <p className="mt-8 max-w-xl text-sm text-gray-400 md:text-base">
      Create cinematic hero sections using layered gradients, glow effects,
      blur, and curved accent lines.
    </p>
  </div>
</div>
        </>
    )
}