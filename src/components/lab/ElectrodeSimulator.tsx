import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface ElectrodeSimulatorProps {
  electrodesPlaced: {
    RA: boolean;
    LA: boolean;
    LL: boolean;
  };
  setElectrodesPlaced: React.Dispatch<React.SetStateAction<{
    RA: boolean;
    LA: boolean;
    LL: boolean;
  }>>;
}

export const ElectrodeSimulator = ({ electrodesPlaced, setElectrodesPlaced }: ElectrodeSimulatorProps) => {
  const handlePlaceElectrode = (position: 'RA' | 'LA' | 'LL') => {
    setElectrodesPlaced(prev => ({
      ...prev,
      [position]: !prev[position]
    }));
    
    if (!electrodesPlaced[position]) {
      toast.success(`${position} electrode placed`);
    } else {
      toast.info(`${position} electrode removed`);
    }
  };

  return (
    <Card className="glass-panel shadow-xl border-2 border-accent/20 hover:border-accent/40 transition-all duration-300">
      <CardHeader className="border-b border-accent/10 bg-gradient-to-r from-accent/5 to-primary/5">
        <CardTitle className="text-2xl flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center">
            <span className="text-white text-sm">📍</span>
          </div>
          Electrode Placement
        </CardTitle>
        <CardDescription>
          Click on the body diagram to place electrodes
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-background rounded-2xl p-8 min-h-[500px] flex items-center justify-center border-2 border-primary/10 shadow-inner">
          {/* Human Body Diagram */}
          <div className="relative w-full max-w-md mx-auto float-animation">
            {/* Head */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/40 shadow-lg backdrop-blur-sm" />
            
            {/* Torso */}
            <div className="absolute top-24 left-1/2 -translate-x-1/2 w-32 h-48 rounded-[40px] bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/40 shadow-xl backdrop-blur-sm" />
            
            {/* Arms */}
            {/* Right Arm */}
            <div className="absolute top-28 right-[calc(50%+70px)] w-16 h-32 rounded-[20px] bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/40 rotate-12 shadow-lg backdrop-blur-sm" />
            {/* Left Arm */}
            <div className="absolute top-28 left-[calc(50%+70px)] w-16 h-32 rounded-[20px] bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/40 -rotate-12 shadow-lg backdrop-blur-sm" />
            
            {/* Legs */}
            {/* Right Leg */}
            <div className="absolute top-[280px] right-[calc(50%+10px)] w-20 h-48 rounded-[25px] bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/40 shadow-lg backdrop-blur-sm" />
            {/* Left Leg */}
            <div className="absolute top-[280px] left-[calc(50%+10px)] w-20 h-48 rounded-[25px] bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/40 shadow-lg backdrop-blur-sm" />

            {/* Electrode Buttons - Right Arm (RA) */}
            <div className="absolute top-32 right-[calc(50%+140px)]">
              <Button
                onClick={() => handlePlaceElectrode('RA')}
                variant={electrodesPlaced.RA ? "default" : "outline"}
                size="lg"
                className={`rounded-full h-16 w-16 shadow-xl hover:scale-125 transition-all duration-300 ${
                  electrodesPlaced.RA ? 'bg-gradient-to-br from-success to-success/80 glow-effect' : ''
                }`}
              >
                <div className="flex flex-col items-center">
                  <span className="text-sm font-bold">RA</span>
                  {electrodesPlaced.RA && (
                    <div className="h-2 w-2 rounded-full bg-white mt-1 pulse-glow" />
                  )}
                </div>
              </Button>
              <Badge variant="secondary" className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md glass-panel">
                Right Arm
              </Badge>
            </div>

            {/* Electrode Buttons - Left Arm (LA) */}
            <div className="absolute top-32 left-[calc(50%+140px)]">
              <Button
                onClick={() => handlePlaceElectrode('LA')}
                variant={electrodesPlaced.LA ? "default" : "outline"}
                size="lg"
                className={`rounded-full h-16 w-16 shadow-xl hover:scale-125 transition-all duration-300 ${
                  electrodesPlaced.LA ? 'bg-gradient-to-br from-success to-success/80 glow-effect' : ''
                }`}
              >
                <div className="flex flex-col items-center">
                  <span className="text-sm font-bold">LA</span>
                  {electrodesPlaced.LA && (
                    <div className="h-2 w-2 rounded-full bg-white mt-1 pulse-glow" />
                  )}
                </div>
              </Button>
              <Badge variant="secondary" className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md glass-panel">
                Left Arm
              </Badge>
            </div>

            {/* Electrode Buttons - Left Leg (LL) */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
              <Button
                onClick={() => handlePlaceElectrode('LL')}
                variant={electrodesPlaced.LL ? "default" : "outline"}
                size="lg"
                className={`rounded-full h-16 w-16 shadow-xl hover:scale-125 transition-all duration-300 ${
                  electrodesPlaced.LL ? 'bg-gradient-to-br from-success to-success/80 glow-effect' : ''
                }`}
              >
                <div className="flex flex-col items-center">
                  <span className="text-sm font-bold">LL</span>
                  {electrodesPlaced.LL && (
                    <div className="h-2 w-2 rounded-full bg-white mt-1 pulse-glow" />
                  )}
                </div>
              </Button>
              <Badge variant="secondary" className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md glass-panel">
                Left Leg
              </Badge>
            </div>
          </div>
        </div>

        <div className="mt-6 p-5 glass-panel rounded-xl border border-primary/20 shadow-lg">
          <h4 className="font-semibold mb-3 text-base flex items-center gap-2">
            <span className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs">ℹ️</span>
            Instructions
          </h4>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">→</span>
              <span>Click on <strong>RA</strong> button to place electrode on Right Arm</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">→</span>
              <span>Click on <strong>LA</strong> button to place electrode on Left Arm</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">→</span>
              <span>Click on <strong>LL</strong> button to place electrode on Left Leg</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success mt-0.5">✓</span>
              <span>All three electrodes must be placed to start simulation</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
