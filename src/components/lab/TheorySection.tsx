import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export const TheorySection = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Introduction to ECG Augmented Leads</CardTitle>
          <CardDescription>
            Understanding the fundamentals of augmented limb leads in electrocardiography
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">What is an Electrocardiogram (ECG)?</h3>
            <p className="text-muted-foreground leading-relaxed">
              An electrocardiogram (ECG or EKG) is a recording of the electrical activity of the heart. 
              The potentials originated in the individual fibers of heart muscle are added to produce the 
              ECG waveform. The ECG reflects the rhythmic electrical depolarization and repolarization of 
              the myocardium (heart muscle) associated with the contractions of the atria and ventricles.
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-3">Augmented Limb Leads</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Leads aVR, aVL, and aVF are 'augmented limb leads'. They are derived from the same three 
              electrodes as leads I, II, and III. However, they view the heart from different angles 
              (or vectors) because the negative electrode for these leads is a modification of Wilson's 
              central terminal.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                <Badge className="mb-2 bg-red-600">aVR</Badge>
                <h4 className="font-semibold mb-2">Augmented Vector Right</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Positive electrode on the right arm. Negative electrode is a combination of 
                  left arm and left leg electrodes.
                </p>
                <div className="bg-white p-2 rounded font-mono text-sm">
                  aVR = -(I + II)/2
                </div>
              </div>

              <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                <Badge className="mb-2 bg-blue-600">aVL</Badge>
                <h4 className="font-semibold mb-2">Augmented Vector Left</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Positive electrode on the left arm. Negative electrode is a combination of 
                  right arm and left leg electrodes.
                </p>
                <div className="bg-white p-2 rounded font-mono text-sm">
                  aVL = I - II/2
                </div>
              </div>

              <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                <Badge className="mb-2 bg-green-600">aVF</Badge>
                <h4 className="font-semibold mb-2">Augmented Vector Foot</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Positive electrode on the left leg. Negative electrode is a combination of 
                  right arm and left arm electrodes.
                </p>
                <div className="bg-white p-2 rounded font-mono text-sm">
                  aVF = II - I/2
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-3">Clinical Significance</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Together with leads I, II, and III, augmented limb leads aVR, aVL, and aVF form the 
              basis of the hexaxial reference system, which is used to calculate the heart's 
              electrical axis in the frontal plane.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>The augmented leads provide a frontal plane view of cardiac electrical activity</li>
              <li>They help in diagnosing various cardiac conditions including myocardial infarction</li>
              <li>Lead aVR is unique as it typically shows predominantly negative deflections</li>
              <li>Leads aVL and aVF are particularly useful in determining the electrical axis</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Electrode Placement</CardTitle>
          <CardDescription>
            Standard positions for limb lead electrodes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4">
              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <Badge variant="outline">RA</Badge>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Right Arm</h4>
                  <p className="text-sm text-muted-foreground">
                    On the right arm, avoiding bony prominences. Typically placed on the wrist or upper arm.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <Badge variant="outline">LA</Badge>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Left Arm</h4>
                  <p className="text-sm text-muted-foreground">
                    In the same location as RA, but on the left arm this time.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <Badge variant="outline">LL</Badge>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Left Leg</h4>
                  <p className="text-sm text-muted-foreground">
                    On the left leg, avoiding bony prominences. Usually placed on the ankle or lower leg.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
