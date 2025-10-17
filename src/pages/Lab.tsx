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
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5">
      {/* Header */}
      <header className="border-b border-border/50 glass-panel shadow-lg sticky top-0 z-50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg glow-effect transform hover:scale-110 transition-all duration-300">
                <FlaskConical className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Bio-Medical Instrumentation Lab
                </h1>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-success animate-pulse"></span>
                  Virtual Laboratory Environment
                </p>
              </div>
            </div>
            <Badge variant="secondary" className="text-sm shadow-md hover:shadow-lg transition-shadow">
              Experiment 3
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 slide-in-up">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Monitoring of Electrocardiogram (ECG) for Augmented Leads
            </h2>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl -z-10 opacity-50"></div>
          </div>
          <p className="text-lg text-muted-foreground mt-2 flex items-center gap-2">
            <span className="px-3 py-1 bg-primary/10 rounded-full text-primary font-medium">aVL</span>
            <span className="px-3 py-1 bg-accent/10 rounded-full text-accent font-medium">aVF</span>
            <span className="px-3 py-1 bg-destructive/10 rounded-full text-destructive font-medium">aVR</span>
            Lead Analysis
          </p>
        </div>

        <Tabs defaultValue="simulator" className="space-y-6">
          <TabsList className="grid w-full max-w-2xl grid-cols-4 glass-panel p-1.5 shadow-lg">
            <TabsTrigger 
              value="simulator" 
              className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
            >
              <FlaskConical className="h-4 w-4 mr-2" />
              Simulator
            </TabsTrigger>
            <TabsTrigger 
              value="theory"
              className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Theory
            </TabsTrigger>
            <TabsTrigger 
              value="procedure"
              className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
            >
              Procedure
            </TabsTrigger>
            <TabsTrigger 
              value="observations"
              className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
            >
              Observations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="simulator" className="space-y-6 slide-in-up">
            {/* Control Panel */}
            <Card className="glass-panel shadow-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader className="border-b border-primary/10 bg-gradient-to-r from-primary/5 to-accent/5">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Play className="h-4 w-4 text-white" />
                  </div>
                  Simulation Controls
                </CardTitle>
                <CardDescription>
                  Place electrodes and control the ECG simulation
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    onClick={handleStartSimulation}
                    disabled={isSimulating || !allElectrodesPlaced}
                    variant="default"
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md"
                  >
                    <Play className="h-5 w-5 mr-2" />
                    Start Simulation
                  </Button>
                  <Button
                    onClick={handlePauseSimulation}
                    disabled={!isSimulating}
                    variant="secondary"
                    size="lg"
                    className="hover:scale-105 transition-all duration-300 shadow-md"
                  >
                    <Pause className="h-5 w-5 mr-2" />
                    Pause
                  </Button>
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    size="lg"
                    className="hover:bg-destructive/10 hover:border-destructive hover:scale-105 transition-all duration-300 shadow-md"
                  >
                    <RotateCcw className="h-5 w-5 mr-2" />
                    Reset
                  </Button>
                  <Separator orientation="vertical" className="h-10" />
                  <div className="flex items-center gap-4 glass-panel px-4 py-2 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className={`h-4 w-4 rounded-full ${electrodesPlaced.RA ? 'bg-success pulse-glow' : 'bg-muted'} transition-all duration-300`} />
                      <span className="text-sm font-medium">RA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`h-4 w-4 rounded-full ${electrodesPlaced.LA ? 'bg-success pulse-glow' : 'bg-muted'} transition-all duration-300`} />
                      <span className="text-sm font-medium">LA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`h-4 w-4 rounded-full ${electrodesPlaced.LL ? 'bg-success pulse-glow' : 'bg-muted'} transition-all duration-300`} />
                      <span className="text-sm font-medium">LL</span>
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
