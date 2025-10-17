import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { FlaskConical, BookOpen, GraduationCap, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
              <FlaskConical className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Virtual Lab</h1>
              <p className="text-sm text-muted-foreground">Bio-Medical Instrumentation</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Welcome Section */}
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-2">
              Experiment 3
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              ECG Augmented Leads Laboratory
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interactive virtual environment for learning and practicing ECG monitoring 
              for augmented leads aVL, aVF, and aVR
            </p>
          </div>

          {/* Main Card */}
          <Card className="border-2 shadow-xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl">Experiment Overview</CardTitle>
              <CardDescription className="text-base">
                Monitoring of Electrocardiogram (ECG) for Augmented Leads
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-6 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <FlaskConical className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Interactive Simulation</h3>
                  <p className="text-sm text-muted-foreground">
                    Place electrodes and observe real-time ECG waveforms for all three augmented leads
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-accent/5 rounded-lg border border-accent/10">
                  <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <BookOpen className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Comprehensive Theory</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn the principles behind augmented leads and their clinical significance
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-success/5 rounded-lg border border-success/10">
                  <div className="h-16 w-16 rounded-full bg-success/10 flex items-center justify-center mb-4">
                    <GraduationCap className="h-8 w-8 text-success" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Step-by-Step Procedure</h3>
                  <p className="text-sm text-muted-foreground">
                    Follow detailed instructions for proper electrode placement and ECG recording
                  </p>
                </div>
              </div>

              {/* Learning Objectives */}
              <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-lg">Learning Objectives</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Understand the concept of augmented limb leads (aVR, aVL, aVF)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Learn proper electrode placement for limb leads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Recognize normal ECG waveform patterns in augmented leads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Apply mathematical formulas to derive augmented leads from standard limb leads</span>
                  </li>
                </ul>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center pt-4">
                <Button
                  onClick={() => navigate("/lab")}
                  size="lg"
                  className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                >
                  Start Virtual Lab
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">About This Experiment</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  This virtual laboratory provides an interactive platform to learn and practice 
                  ECG monitoring techniques specifically for augmented leads. These leads provide 
                  crucial information about cardiac electrical activity from the frontal plane.
                </p>
                <p>
                  The augmented leads (aVR, aVL, aVF) are derived mathematically from the standard 
                  limb leads and offer unique perspectives on heart function, essential for 
                  diagnosing various cardiac conditions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Basic understanding of cardiac anatomy and physiology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Familiarity with standard ECG waveforms (P, QRS, T waves)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Knowledge of electrical principles in biomedical instrumentation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-12 py-6 bg-card/50">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Bio-Medical Instrumentation Virtual Laboratory</p>
          <p className="mt-1">School of Bioengineering</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
