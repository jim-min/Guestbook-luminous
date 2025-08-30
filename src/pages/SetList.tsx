import { useState } from "react";
import { LiquidGlassList } from "../components/LiquidGlass";
import { phase1, phase2, phaseSpecial } from "../constants/Phase";

export default function SetList() {
  const [phase, setPhase] = useState<'special' | 1 | 2>('special');

  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto px-4 py-6">
      <div className="w-full flex items-center justify-center rounded-lg mb-6">
        <button 
        className={`animated-border-button px-4 py-2 text-sm font-medium transition-colors ${phase === 'special' ? 'active' : 'text-gray-600'}`}
        onClick={() => setPhase('special')}
        >
        Special
        </button>
        <button 
        className={`animated-border-button px-4 py-2 text-sm font-medium transition-colors ${phase === 1 ? 'active' : 'text-gray-600'}`}
        onClick={() => setPhase(1)}
        >
        1부
        </button>
        <button 
        className={`animated-border-button px-4 py-2 text-sm font-medium transition-colors ${phase === 2 ? 'active' : 'text-gray-600'}`}
        onClick={() => setPhase(2)}
        >
        2부
        </button>
      </div>
      <div className="setlist">
        {phase === 'special' ? (
          <div>
            {/* Playlist Grid */}
            <div className="grid grid-cols-1 gap-3">
              {phaseSpecial.map((track) => (
                <div
                  key={track.id}
                  className="transition-all duration-300 transform hover:-translate-y-1"
                >
                  <LiquidGlassList>
                    <div className="flex items-center justify-between w-full gap-4">
                      <div className="relative">
                        <img src={track.cover} alt={track.title} className="w-16 h-16 rounded-full object-cover" />
                      </div>
                      <div className="w-52">
                        <div className="text-sm font-bold text-gray-600 leading-tight text-end mr-2">{track.id}</div>
                        <div className="font-semibold text-gray-900 leading-tight text-end mr-2">{track.title}</div>
                        <div className="text-xs text-gray-900 mt-1 text-end mr-2 whitespace-pre-line">
                          {track.credits.split(',').map((credit, i) => (
                            <div key={i} className="mt-0.5">{credit.trim()}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </LiquidGlassList>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            {/* Playlist Grid */}
            <div className="grid grid-cols-1 gap-3">
              {(phase === 1 ? phase1 : phase2).map((track) => (
                <div
                  key={track.id}
                  className="transition-all duration-300 transform hover:-translate-y-1"
                >
                  <LiquidGlassList>
                    <div className="flex items-center justify-between w-full gap-4">
                      <div className="relative">
                        <img src={track.cover} alt={track.title} className="w-16 h-16 rounded-full object-cover" />
                      </div>
                      <div className="w-56">
                        <div className="text-sm font-bold text-gray-600 leading-tight text-end mr-2">{track.id}</div>
                        <div className="font-semibold text-gray-900 leading-tight text-end mr-2">{track.title}</div>
                        <div className="text-xs text-gray-900 mt-1 text-end mr-2 whitespace-pre-line">
                          {track.credits.split(',').map((credit, i) => (
                            <div key={i} className="mt-0.5">{credit.trim()}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </LiquidGlassList>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}