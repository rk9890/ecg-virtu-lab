import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ElectrodeSimulator } from "@/components/lab/ElectrodeSimulator";
import { WaveformDisplay } from "@/components/lab/WaveformDisplay";
import { TheorySection } from "@/components/lab/TheorySection";
import { ProcedureSection } from "@/components/lab/ProcedureSection";
import { Play, Pause, RotateCcw, BookOpen, FlaskConical } from "lucide-react";
import { toast } from "sonner";

const Lab = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [electrodesPlaced, setElectrodesPlaced] = useState({
    RA: false,
    LA: false,
    LL: false,
  });

  const handleStartSimulation = () => {
    const allPlaced = Object.values(electrodesPlaced).every((placed) => placed);
    
    if (!allPlaced) {
      toast.error("Please place all electrodes before starting");
      return;
    }
    
    setIsSimulating(true);
    toast.success("Simulation started");
  };

  const handlePauseSimulation = () => {
    setIsSimulating(false);
    toast.info("Simulation paused");
  };

  const handleReset = () => {
    setIsSimulating(false);
    setElectrodesPlaced({ RA: false, LA: false, LL: false });
    toast.info("Simulation reset");
  };

  const allElectrodesPlaced = Object.values(electrodesPlaced).every((placed) => placed);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <FlaskConical className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Bio-Medical Instrumentation Lab</h1>
                <p className="text-sm text-muted-foreground">Virtual Laboratory Environment</p>
              </div>
            </div>
            <Badge variant="secondary" className="text-sm">
              Experiment 3
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Monitoring of Electrocardiogram (ECG) for Augmented Leads
          </h2>
          <p className="text-lg text-muted-foreground">
            aVL, aVF and aVR Lead Analysis
          </p>
        </div>

        <Tabs defaultValue="simulator" className="space-y-6">
          <TabsList className="grid w-full max-w-2xl grid-cols-4">
            <TabsTrigger value="simulator">
              <FlaskConical className="h-4 w-4 mr-2" />
              Simulator
            </TabsTrigger>
            <TabsTrigger value="theory">
              <BookOpen className="h-4 w-4 mr-2" />
              Theory
            </TabsTrigger>
            <TabsTrigger value="procedure">Procedure</TabsTrigger>
            <TabsTrigger value="observations">Observations</TabsTrigger>
          </TabsList>

          <TabsContent value="simulator" className="space-y-6">
            {/* Control Panel */}
            <Card>
              <CardHeader>
                <CardTitle>Simulation Controls</CardTitle>
                <CardDescription>
                  Place electrodes and control the ECG simulation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Button
                    onClick={handleStartSimulation}
                    disabled={isSimulating || !allElectrodesPlaced}
                    variant="default"
                    size="lg"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Start Simulation
                  </Button>
                  <Button
                    onClick={handlePauseSimulation}
                    disabled={!isSimulating}
                    variant="secondary"
                    size="lg"
                  >
                    <Pause className="h-4 w-4 mr-2" />
                    Pause
                  </Button>
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    size="lg"
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                  <Separator orientation="vertical" className="h-10" />
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                      <div className={`h-3 w-3 rounded-full ${electrodesPlaced.RA ? 'bg-success' : 'bg-muted'}`} />
                      <span className="text-sm">RA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`h-3 w-3 rounded-full ${electrodesPlaced.LA ? 'bg-success' : 'bg-muted'}`} />
                      <span className="text-sm">LA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`h-3 w-3 rounded-full ${electrodesPlaced.LL ? 'bg-success' : 'bg-muted'}`} />
                      <span className="text-sm">LL</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Simulator Grid */}
            <div className="grid lg:grid-cols-2 gap-6">
              <ElectrodeSimulator
                electrodesPlaced={electrodesPlaced}
                setElectrodesPlaced={setElectrodesPlaced}
              />
              <WaveformDisplay isSimulating={isSimulating} />
            </div>
          </TabsContent>

          <TabsContent value="theory">
            <TheorySection />
          </TabsContent>

          <TabsContent value="procedure">
            <ProcedureSection />
          </TabsContent>

          <TabsContent value="observations">
            <Card>
              <CardHeader>
                <CardTitle>Observations & Results</CardTitle>
                <CardDescription>
                  Record your observations from the ECG simulation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Expected Results</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Lead aVR typically shows a predominantly negative deflection</li>
                    <li>Lead aVL shows positive deflections in normal sinus rhythm</li>
                    <li>Lead aVF shows positive deflections in normal sinus rhythm</li>
                    <li>The amplitude of each lead varies based on the electrode positioning</li>
                    <li>All three augmented leads together provide frontal plane view of cardiac activity</li>
                  </ul>
                </div>
                <Separator />
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Key Learning Points</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Understanding the derivation of augmented leads from limb electrodes</li>
                    <li>Recognition of normal ECG waveform patterns in each augmented lead</li>
                    <li>Importance of proper electrode placement for accurate readings</li>
                    <li>Clinical significance of augmented leads in diagnosing cardiac conditions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Lab;
