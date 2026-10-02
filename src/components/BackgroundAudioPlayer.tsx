import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Music, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

interface Track {
  id: string;
  title: string;
  artist: string;
  type: 'synth' | 'audio';
  url?: string;
}

const TRACKS: Track[] = [
  {
    id: 'lofi-ambient-synth',
    title: 'Midnight Coding Flow',
    artist: 'Pavan Audio Engine (Lo-Fi Chords)',
    type: 'synth'
  },
  {
    id: 'lofi-stream-1',
    title: 'Chillhop Beats',
    artist: 'Lofi Ambient Stream',
    type: 'audio',
    url: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3'
  },
  {
    id: 'lofi-stream-2',
    title: 'Night Drive Synthwave',
    artist: 'Cyber Ambient Lo-Fi',
    type: 'audio',
    url: 'https://actions.google.com/sounds/v1/science_fiction/scifi_engine_low.ogg'
  }
];

export const BackgroundAudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const synthTimerRef = useRef<number | null>(null);

  const currentTrack = TRACKS[currentTrackIndex];

  // Synth Lo-Fi Generator implementation using Web Audio API
  const startSynthEngine = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      // Ambient warm chord progression: Dm9 -> G13 -> Cmaj9 -> Am9
      const chordProgressions = [
        [146.83, 220.00, 261.63, 329.63, 392.00], // Dm9
        [196.00, 246.94, 293.66, 370.00, 440.00], // G13
        [130.81, 196.00, 246.94, 329.63, 392.00], // Cmaj9
        [110.00, 164.81, 220.00, 261.63, 329.63]  // Am9
      ];

      let step = 0;

      const playChord = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
        const currentChord = chordProgressions[step % chordProgressions.length];
        step++;

        const chordGain = ctx.createGain();
        chordGain.gain.setValueAtTime(0, ctx.currentTime);
        const actualVol = isMuted ? 0 : volume * 0.18;
        chordGain.gain.linearRampToValueAtTime(actualVol, ctx.currentTime + 1.2);
        chordGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 4.8);

        // Lowpass filter for warm Lo-Fi warmth
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, ctx.currentTime);
        filter.Q.setValueAtTime(3, ctx.currentTime);

        chordGain.connect(filter);
        filter.connect(ctx.destination);

        currentChord.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          osc.connect(chordGain);
          osc.start(ctx.currentTime + idx * 0.08);
          osc.stop(ctx.currentTime + 5.0);
        });
      };

      playChord();
      synthTimerRef.current = window.setInterval(playChord, 5200);
    } catch (err) {
      console.warn('Web Audio synth could not initialize', err);
    }
  };

  const stopSynthEngine = () => {
    if (synthTimerRef.current) {
      clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
  };

  // Toggle Play / Pause
  const togglePlay = () => {
    setHasInteracted(true);
    if (isPlaying) {
      pauseAudio();
    } else {
      startAudio();
    }
  };

  const startAudio = () => {
    setIsPlaying(true);
    if (currentTrack.type === 'synth') {
      if (audioRef.current) audioRef.current.pause();
      startSynthEngine();
    } else if (audioRef.current && currentTrack.url) {
      stopSynthEngine();
      audioRef.current.src = currentTrack.url;
      audioRef.current.volume = isMuted ? 0 : volume;
      audioRef.current.play().catch(() => {
        // Fallback to synth if external audio network error occurs
        setCurrentTrackIndex(0);
        startSynthEngine();
      });
    }
  };

  const pauseAudio = () => {
    setIsPlaying(false);
    stopSynthEngine();
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  // Switch Track
  const handleSelectTrack = (index: number) => {
    setCurrentTrackIndex(index);
    if (isPlaying) {
      stopSynthEngine();
      if (audioRef.current) audioRef.current.pause();
      setTimeout(() => {
        const nextTrack = TRACKS[index];
        if (nextTrack.type === 'synth') {
          startSynthEngine();
        } else if (audioRef.current && nextTrack.url) {
          audioRef.current.src = nextTrack.url;
          audioRef.current.volume = isMuted ? 0 : volume;
          audioRef.current.play().catch(() => {
            startSynthEngine();
          });
        }
      }, 100);
    }
  };

  // Handle Volume
  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    if (newVol > 0 && isMuted) setIsMuted(false);
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : newVol;
    }
  };

  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (audioRef.current) {
      audioRef.current.volume = nextMute ? 0 : volume;
    }
  };

  useEffect(() => {
    return () => {
      stopSynthEngine();
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} loop />
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Expanded Panel */}
        {isExpanded && (
          <div className="mb-3 w-72 rounded-2xl border border-violet-500/30 bg-[#0f172a]/95 p-4 shadow-2xl backdrop-blur-xl transition-all duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Music className="w-4 h-4 text-violet-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-violet-300">Background Audio</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 font-medium">
                {isPlaying ? 'Playing' : 'Paused'}
              </span>
            </div>

            {/* Track Info */}
            <div className="my-3">
              <p className="text-xs text-slate-400">Current Track</p>
              <h4 className="text-sm font-bold text-white truncate">{currentTrack.title}</h4>
              <p className="text-[11px] text-violet-400 truncate">{currentTrack.artist}</p>
            </div>

            {/* Track Switcher */}
            <div className="space-y-1.5 mb-3">
              <p className="text-[11px] font-medium text-slate-400">Select Soundtrack:</p>
              {TRACKS.map((track, i) => (
                <button
                  key={track.id}
                  onClick={() => handleSelectTrack(i)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors flex items-center justify-between ${
                    currentTrackIndex === i
                      ? 'bg-gradient-to-r from-blue-600/30 to-violet-600/40 text-violet-200 border border-violet-500/30'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <span className="truncate">{track.title}</span>
                  {currentTrackIndex === i && isPlaying && (
                    <span className="flex items-center gap-0.5 h-3">
                      <span className="w-1 bg-violet-400 rounded-full eq-bar-1"></span>
                      <span className="w-1 bg-blue-400 rounded-full eq-bar-2"></span>
                      <span className="w-1 bg-violet-400 rounded-full eq-bar-3"></span>
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-2 pt-2 border-t border-white/10">
              <button
                onClick={toggleMute}
                className="text-slate-400 hover:text-white transition-colors"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-violet-500"
              />
              <span className="text-[11px] text-slate-400 font-mono w-7 text-right">
                {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
              </span>
            </div>
          </div>
        )}

        {/* Floating Capsule Bar */}
        <div className="flex items-center gap-2.5 rounded-full border border-violet-500/30 bg-[#0d1326]/90 p-1.5 pl-3.5 pr-2 shadow-xl shadow-purple-950/40 backdrop-blur-xl transition-all duration-300 hover:border-violet-400/50">
          {/* Animated Equalizer Waveform */}
          <div className="flex items-center gap-1 h-5 pr-1 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
            {isPlaying ? (
              <div className="flex items-end gap-1 h-4">
                <span className="w-1 bg-blue-400 rounded-full eq-bar-1"></span>
                <span className="w-1 bg-violet-400 rounded-full eq-bar-2"></span>
                <span className="w-1 bg-indigo-400 rounded-full eq-bar-3"></span>
                <span className="w-1 bg-pink-400 rounded-full eq-bar-4"></span>
              </div>
            ) : (
              <Music className="w-4 h-4 text-violet-400" />
            )}
          </div>

          {/* Track Summary / Title */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1.5 text-left text-xs font-medium text-slate-200 hover:text-white transition-colors max-w-[130px] sm:max-w-[170px]"
          >
            <span className="truncate">{currentTrack.title}</span>
            {isExpanded ? <ChevronDown className="w-3.5 h-3.5 text-slate-400" /> : <ChevronUp className="w-3.5 h-3.5 text-slate-400" />}
          </button>

          {/* Play / Pause Toggle Button */}
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
            className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-violet-600/30 transition-transform hover:scale-105 active:scale-95"
            title={isPlaying ? 'Pause Background Song' : 'Play Background Song'}
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
            {isPlaying && (
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-500"></span>
              </span>
            )}
          </button>
        </div>

        {/* First time hint bubble */}
        {!hasInteracted && (
          <div className="mt-2 text-[11px] bg-gradient-to-r from-blue-900/90 to-purple-900/90 text-blue-200 border border-violet-400/30 px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 animate-bounce">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>Click play for coding background music 🎵</span>
          </div>
        )}
      </div>
    </>
  );
};
