import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FlaskConical, ArrowRight, BookOpen, Target, Zap, Activity, Brain, Users, Award, Clock, CheckCircle2, Play, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const stats = [
    { icon: Activity, label: "ECG Leads", value: "3", color: "from-primary to-accent" },
    { icon: Brain, label: "Learning Modules", value: "4", color: "from-accent to-primary" },
    { icon: Clock, label: "Avg. Duration", value: "45m", color: "from-primary to-accent" },
    { icon: Award, label: "Success Rate", value: "98%", color: "from-accent to-primary" },
  ];

  const features = [
    {
      icon: Target,
      title: "Precision Simulation",
      description: "Real-time ECG waveform generation with accurate augmented lead calculations",
      gradient: "from-primary/20 to-accent/20"
    },
    {
      icon: Zap,
      title: "Interactive Learning",
      description: "Hands-on electrode placement with instant visual feedback",
      gradient: "from-accent/20 to-primary/20"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Theory",
      description: "In-depth coverage of ECG principles and clinical applications",
      gradient: "from-primary/20 to-accent/20"
    },
    {
      icon: Users,
      title: "Self-Paced",
      description: "Learn at your own speed with unlimited practice sessions",
      gradient: "from-accent/20 to-primary/20"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 slide-in-up">
          <div className="relative">
            <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl glow-effect float-animation">
              <FlaskConical className="h-12 w-12 text-white" />
            </div>
            <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl -z-10 animate-pulse"></div>
          </div>
          
          <div className="space-y-6 max-w-4xl">
            <Badge variant="secondary" className="text-sm px-6 py-2 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse mr-2"></span>
              Experiment 3 - Bio-Medical Instrumentation
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Virtual ECG Laboratory
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Master the art of Electrocardiogram monitoring for augmented leads through interactive simulation and real-time feedback
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/lab">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-10 py-7 shadow-xl glow-effect">
                Start Lab Experience
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Dialog open={demoOpen} onOpenChange={setDemoOpen}>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 hover:bg-primary/5 hover:border-primary transition-all duration-300">
                  <Play className="mr-2 h-5 w-5" />
                  View Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl flex items-center gap-2">
                    <Video className="h-6 w-6 text-primary" />
                    ECG Augmented Leads Demo Videos
                  </DialogTitle>
                  <DialogDescription>
                    Watch these instructional videos to understand electrode placement and lead connections
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 mt-4">
                  {/* Augmented Leads Placement */}
                  <Card className="border-2 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-lg font-bold text-sm">All Leads</span>
                        How To Place Augmented Limb Leads in ECG
                      </CardTitle>
                      <CardDescription>
                        Complete guide on placing augmented limb leads (aVR, aVL, aVF)
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/sMaAxv5uy8A"
                          title="How To Place Augmented Limb Leads In ECG"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>
                      <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>Key Points:</strong> Essential guide for proper electrode placement and understanding augmented leads configuration
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* ECG Augmented Limb Leads Theory */}
                  <Card className="border-2 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-destructive/10 text-destructive rounded-lg font-bold text-sm">aVR</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-lg font-bold text-sm">aVL</span>
                        <span className="px-3 py-1 bg-accent/10 text-accent rounded-lg font-bold text-sm">aVF</span>
                        ECG Augmented Limb Leads Theory
                      </CardTitle>
                      <CardDescription>
                        Understanding the theoretical foundation of aVR, aVL, and aVF leads
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/1rSpcK50aIg"
                          title="ECG: The augmented limb leads aVF, aVR and aVL"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>
                      <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>Key Points:</strong> Comprehensive explanation of how augmented leads are derived and their clinical significance
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Connection Technique */}
                  <Card className="border-2 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Activity className="h-5 w-5 text-accent" />
                        Augmented Limb Leads Connection Technique
                      </CardTitle>
                      <CardDescription>
                        Detailed demonstration of positive and negative electrode connections
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/aVNDKkfNsfk"
                          title="Augmented limb leads; Connection of positive and negative electrode"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>
                      <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>Key Points:</strong> Step-by-step electrode connection for accurate augmented lead recordings
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 12 Lead ECG Animation */}
                  <Card className="border-2 border-accent/20 bg-gradient-to-br from-primary/5 to-accent/5">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Video className="h-5 w-5 text-accent" />
                        12 Lead ECG Explained - Complete Animation
                      </CardTitle>
                      <CardDescription>
                        Visual animation explaining the complete 12-lead ECG system
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/kwLbSx9BNbU"
                          title="12 Lead ECG Explained, Animation"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>
                      <div className="mt-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
                        <p className="text-sm text-muted-foreground">
                          <strong>Overview:</strong> Detailed animated explanation of all 12 ECG leads including limb and augmented leads
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* ECG Leads Fundamentals */}
                  <Card className="border-2 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Brain className="h-5 w-5 text-primary" />
                        ECG Leads Explained - Fundamentals
                      </CardTitle>
                      <CardDescription>
                        Understanding how ECG electrodes and leads work
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/xWZo4XRcK58"
                          title="ECG Leads Explained"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>
                      <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>Key Points:</strong> Foundational concepts of ECG technology and lead configurations
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="glass-panel border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <CardContent className="pt-6 text-center space-y-3">
                <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110`}>
                  <stat.icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{stat.value}</p>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <Badge variant="outline" className="text-sm px-4 py-1">Key Features</Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Why Choose Our Virtual Lab?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience cutting-edge simulation technology designed for medical students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="glass-panel border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 group overflow-hidden relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <CardHeader className="relative z-10">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110 group-hover:rotate-3">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Main Content Cards */}
      <main className="container mx-auto px-4 pb-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Experiment Overview */}
          <Card className="glass-panel shadow-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110 glow-effect">
                <FlaskConical className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-2xl">Experiment Overview</CardTitle>
              <CardDescription className="text-base">
                Learn about ECG monitoring and augmented leads
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  What You'll Monitor
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-lg font-semibold shadow-sm group-hover/item:shadow-md transition-shadow">aVR</span>
                    <span className="text-muted-foreground">Right arm augmented lead</span>
                  </li>
                  <li className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-lg font-semibold shadow-sm group-hover/item:shadow-md transition-shadow">aVL</span>
                    <span className="text-muted-foreground">Left arm augmented lead</span>
                  </li>
                  <li className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform">
                    <span className="px-3 py-1 bg-destructive/10 text-destructive rounded-lg font-semibold shadow-sm group-hover/item:shadow-md transition-shadow">aVF</span>
                    <span className="text-muted-foreground">Left foot augmented lead</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Learning Objectives */}
          <Card className="glass-panel shadow-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110 glow-effect">
                <Target className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-2xl">Learning Objectives</CardTitle>
              <CardDescription className="text-base">
                Key skills you'll develop in this lab
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <ul className="space-y-3 text-sm">
                {[
                  "Understand the derivation of augmented leads from limb electrodes",
                  "Master proper electrode placement techniques",
                  "Recognize normal ECG patterns in each augmented lead",
                  "Apply knowledge to clinical diagnostic scenarios"
                ].map((objective, idx) => (
                  <li key={idx} className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform">
                    <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-success/20 to-success/10 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm group-hover/item:shadow-md transition-all group-hover/item:scale-110">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                    </div>
                    <span className="text-muted-foreground">{objective}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Prerequisites */}
          <Card className="glass-panel shadow-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110 glow-effect">
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-2xl">Prerequisites</CardTitle>
              <CardDescription className="text-base">
                What you should know before starting
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <ul className="space-y-3 text-sm">
                {[
                  "Basic understanding of cardiovascular anatomy",
                  "Familiarity with electrical signals in the body",
                  "Knowledge of standard ECG lead placement (recommended)",
                  "Understanding of Einthoven's triangle concept"
                ].map((prereq, idx) => (
                  <li key={idx} className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2.5 flex-shrink-0 shadow-sm group-hover/item:shadow-md transition-all group-hover/item:scale-150"></div>
                    <span className="text-muted-foreground">{prereq}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <Card className="glass-panel shadow-2xl border-2 border-primary/30 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-gradient bg-[length:200%_auto]"></div>
          <CardContent className="py-16 text-center relative z-10">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Ready to Begin?
              </h2>
              <p className="text-lg text-muted-foreground">
                Start your journey into ECG monitoring and master augmented lead analysis
              </p>
              <Link to="/lab">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:scale-110 transition-all duration-300 text-lg px-12 py-7 shadow-xl glow-effect mt-4">
                  Launch Virtual Lab
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
