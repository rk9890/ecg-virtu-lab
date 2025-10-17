import { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WaveformDisplayProps {
  isSimulating: boolean;
}

export const WaveformDisplay = ({ isSimulating }: WaveformDisplayProps) => {
  const canvasRefs = {
    aVR: useRef<HTMLCanvasElement>(null),
    aVL: useRef<HTMLCanvasElement>(null),
    aVF: useRef<HTMLCanvasElement>(null),
  };

  useEffect(() => {
    if (!isSimulating) return;

    const drawWaveform = (canvas: HTMLCanvasElement, leadType: 'aVR' | 'aVL' | 'aVF') => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;
      
      // Clear canvas
      ctx.fillStyle = '#f0f9ff';
      ctx.fillRect(0, 0, width, height);
      
      // Draw grid
      ctx.strokeStyle = '#e0e0e0';
      ctx.lineWidth = 1;
      
      // Vertical lines
      for (let x = 0; x < width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      
      // Draw center line
      ctx.strokeStyle = '#b0b0b0';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();

      let x = 0;
      const animate = () => {
        if (!isSimulating) return;

        // Clear only the waveform area
        ctx.fillStyle = '#f0f9ff';
        ctx.fillRect(x, 0, 5, height);
        
        // Redraw grid in cleared area
        ctx.strokeStyle = '#e0e0e0';
        ctx.lineWidth = 1;
        for (let gx = Math.floor(x / 20) * 20; gx < x + 5; gx += 20) {
          ctx.beginPath();
          ctx.moveTo(gx, 0);
          ctx.lineTo(gx, height);
          ctx.stroke();
        }
        
        for (let gy = 0; gy < height; gy += 20) {
          ctx.beginPath();
          ctx.moveTo(x, gy);
          ctx.lineTo(x + 5, gy);
          ctx.stroke();
        }

        // Draw waveform based on lead type
        ctx.strokeStyle = leadType === 'aVR' ? '#ef4444' : '#0ea5e9';
        ctx.lineWidth = 2;
        
        const t = x / 10;
        let y = centerY;
        
        // Simulate different ECG patterns for each lead
        if (leadType === 'aVR') {
          // aVR is typically negative
          const pWave = Math.sin(t * 0.5) * -15;
          const qrsComplex = Math.sin(t * 2) * -40;
          const tWave = Math.sin(t * 0.3 + 3) * -20;
          y = centerY + pWave + qrsComplex + tWave;
        } else if (leadType === 'aVL') {
          // aVL positive
          const pWave = Math.sin(t * 0.5) * 20;
          const qrsComplex = Math.sin(t * 2) * 50;
          const tWave = Math.sin(t * 0.3 + 3) * 25;
          y = centerY - (pWave + qrsComplex + tWave);
        } else if (leadType === 'aVF') {
          // aVF positive
          const pWave = Math.sin(t * 0.5) * 25;
          const qrsComplex = Math.sin(t * 2) * 55;
          const tWave = Math.sin(t * 0.3 + 3) * 30;
          y = centerY - (pWave + qrsComplex + tWave);
        }

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 2, y);
        ctx.stroke();

        x += 2;
        if (x >= width) {
          x = 0;
        }

        requestAnimationFrame(animate);
      };

      animate();
    };

    // Set canvas dimensions
    Object.values(canvasRefs).forEach(ref => {
      if (ref.current) {
        ref.current.width = ref.current.offsetWidth;
        ref.current.height = 150;
      }
    });

    // Start animations
    if (canvasRefs.aVR.current) drawWaveform(canvasRefs.aVR.current, 'aVR');
    if (canvasRefs.aVL.current) drawWaveform(canvasRefs.aVL.current, 'aVL');
    if (canvasRefs.aVF.current) drawWaveform(canvasRefs.aVF.current, 'aVF');
  }, [isSimulating]);

  return (
    <Card className="glass-panel shadow-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
      <CardHeader className="border-b border-primary/10 bg-gradient-to-r from-primary/5 to-accent/5">
        <CardTitle className="text-2xl flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-white text-sm">📊</span>
          </div>
          ECG Waveform Display
        </CardTitle>
        <CardDescription>
          Real-time augmented lead recordings
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        {/* aVR Lead */}
        <div className="space-y-3 slide-in-up">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <Badge variant="outline" className="bg-gradient-to-r from-red-50 to-red-100 text-red-700 border-red-300 shadow-md px-4 py-1.5 text-sm font-semibold">
              Lead aVR (Augmented Vector Right)
            </Badge>
            <span className="text-xs text-muted-foreground glass-panel px-3 py-1 rounded-full font-mono">aVR = -(I + II)/2</span>
          </div>
          <canvas
            ref={canvasRefs.aVR}
            className="w-full border-2 border-red-200 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 shadow-inner hover:shadow-lg transition-shadow duration-300"
          />
        </div>

        {/* aVL Lead */}
        <div className="space-y-3 slide-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <Badge variant="outline" className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-blue-300 shadow-md px-4 py-1.5 text-sm font-semibold">
              Lead aVL (Augmented Vector Left)
            </Badge>
            <span className="text-xs text-muted-foreground glass-panel px-3 py-1 rounded-full font-mono">aVL = I - II/2</span>
          </div>
          <canvas
            ref={canvasRefs.aVL}
            className="w-full border-2 border-blue-200 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 shadow-inner hover:shadow-lg transition-shadow duration-300"
          />
        </div>

        {/* aVF Lead */}
        <div className="space-y-3 slide-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <Badge variant="outline" className="bg-gradient-to-r from-green-50 to-green-100 text-green-700 border-green-300 shadow-md px-4 py-1.5 text-sm font-semibold">
              Lead aVF (Augmented Vector Foot)
            </Badge>
            <span className="text-xs text-muted-foreground glass-panel px-3 py-1 rounded-full font-mono">aVF = II - I/2</span>
          </div>
          <canvas
            ref={canvasRefs.aVF}
            className="w-full border-2 border-green-200 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 shadow-inner hover:shadow-lg transition-shadow duration-300"
          />
        </div>

        {!isSimulating && (
          <div className="flex items-center justify-center p-8 glass-panel rounded-xl border-2 border-dashed border-primary/30">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="animate-pulse">⏸️</span>
              Place all electrodes and click <strong className="text-primary">"Start Simulation"</strong> to view waveforms
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
