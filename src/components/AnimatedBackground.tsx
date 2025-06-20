import { UNICODE_CHAR, UNICODE_CHAR_2, UNICODE_CHAR_3 } from '../globals';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 text-primary/10 text-8xl transform -translate-x-1/2 -translate-y-1/2">
        <span className="animate-pulse" style={{ animationDuration: '8s' }}>{UNICODE_CHAR}</span>
      </div>
      <div className="absolute top-3/4 right-1/4 text-accent/10 text-6xl transform translate-x-1/2 -translate-y-1/2">
        <span className="animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}>{UNICODE_CHAR_2}</span>
      </div>
      <div className="absolute top-1/4 right-1/4 text-primary/10 text-8xl transform translate-x-1/2 -translate-y-1/2">
        <span className="animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}>{UNICODE_CHAR_3}</span>
      </div>
    </div>
  );
}
