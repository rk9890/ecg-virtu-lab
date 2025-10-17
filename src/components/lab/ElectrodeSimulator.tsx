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
    <Card>
      <CardHeader>
        <CardTitle>Electrode Placement</CardTitle>
        <CardDescription>
          Click on the body diagram to place electrodes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative bg-secondary/30 rounded-lg p-8 min-h-[500px] flex items-center justify-center">
          {/* Human Body Diagram */}
          <div className="relative w-full max-w-md mx-auto">
            {/* Head */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30" />
            
            {/* Torso */}
            <div className="absolute top-24 left-1/2 -translate-x-1/2 w-32 h-48 rounded-[40px] bg-primary/10 border-2 border-primary/30" />
            
            {/* Arms */}
            {/* Right Arm */}
            <div className="absolute top-28 right-[calc(50%+70px)] w-16 h-32 rounded-[20px] bg-primary/10 border-2 border-primary/30 rotate-12" />
            {/* Left Arm */}
            <div className="absolute top-28 left-[calc(50%+70px)] w-16 h-32 rounded-[20px] bg-primary/10 border-2 border-primary/30 -rotate-12" />
            
            {/* Legs */}
            {/* Right Leg */}
            <div className="absolute top-[280px] right-[calc(50%+10px)] w-20 h-48 rounded-[25px] bg-primary/10 border-2 border-primary/30" />
            {/* Left Leg */}
            <div className="absolute top-[280px] left-[calc(50%+10px)] w-20 h-48 rounded-[25px] bg-primary/10 border-2 border-primary/30" />

            {/* Electrode Buttons - Right Arm (RA) */}
            <div className="absolute top-32 right-[calc(50%+140px)]">
              <Button
                onClick={() => handlePlaceElectrode('RA')}
                variant={electrodesPlaced.RA ? "default" : "outline"}
                size="lg"
                className="rounded-full h-16 w-16 shadow-lg hover:scale-110 transition-transform"
              >
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold">RA</span>
                  {electrodesPlaced.RA && (
                    <div className="h-2 w-2 rounded-full bg-success mt-1 animate-pulse" />
                  )}
                </div>
              </Button>
              <Badge variant="secondary" className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                Right Arm
              </Badge>
            </div>

            {/* Electrode Buttons - Left Arm (LA) */}
            <div className="absolute top-32 left-[calc(50%+140px)]">
              <Button
                onClick={() => handlePlaceElectrode('LA')}
                variant={electrodesPlaced.LA ? "default" : "outline"}
                size="lg"
                className="rounded-full h-16 w-16 shadow-lg hover:scale-110 transition-transform"
              >
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold">LA</span>
                  {electrodesPlaced.LA && (
                    <div className="h-2 w-2 rounded-full bg-success mt-1 animate-pulse" />
                  )}
                </div>
              </Button>
              <Badge variant="secondary" className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                Left Arm
              </Badge>
            </div>

            {/* Electrode Buttons - Left Leg (LL) */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
              <Button
                onClick={() => handlePlaceElectrode('LL')}
                variant={electrodesPlaced.LL ? "default" : "outline"}
                size="lg"
                className="rounded-full h-16 w-16 shadow-lg hover:scale-110 transition-transform"
              >
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold">LL</span>
                  {electrodesPlaced.LL && (
                    <div className="h-2 w-2 rounded-full bg-success mt-1 animate-pulse" />
                  )}
                </div>
              </Button>
              <Badge variant="secondary" className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                Left Leg
              </Badge>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-semibold mb-2 text-sm">Instructions:</h4>
          <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
            <li>Click on RA button to place electrode on Right Arm</li>
            <li>Click on LA button to place electrode on Left Arm</li>
            <li>Click on LL button to place electrode on Left Leg</li>
            <li>All three electrodes must be placed to start simulation</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
