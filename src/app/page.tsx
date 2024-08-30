import Link from "next/link";

export default function HomePage() {
  return (
    <body style={{
      backgroundColor: 'rgb(30, 30, 34)',
      backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 0)',
      backgroundSize: '25px 25px',
      backgroundPosition: '-50px -50px'
    }}>
      <div>
        <svg className="absolute inset-0 w-full h-screen pointer-events-none -z-10 text-[rgba(103,58,183,.4)]">
          <defs>
            <linearGradient id="bg" gradientTransform="rotate(70)">
              <stop offset="0%" stop-color="currentColor"></stop>
              <stop offset="100%" stop-color="transparent"></stop>
            </linearGradient>
          </defs>
          <rect fill="url('#bg')" width="100%" height="100%" className="w-full h-full"></rect>
        </svg>
      </div>
    </body>
  );
}
