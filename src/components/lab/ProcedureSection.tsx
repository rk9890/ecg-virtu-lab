import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export const ProcedureSection = () => {
  const steps = [
    {
      title: "Prepare the Subject",
      description: "Ensure the subject is relaxed and in a comfortable position, preferably lying down or seated.",
      substeps: [
        "Explain the procedure to the subject",
        "Ask the subject to remove any jewelry or metal objects",
        "Ensure the subject's skin is clean and dry"
      ]
    },
    {
      title: "Place the Electrodes",
      description: "Position the electrodes on the specified locations on the body.",
      substeps: [
        "Clean the skin with alcohol swabs at electrode sites",
        "Place RA electrode on the right arm (wrist or upper arm)",
        "Place LA electrode on the left arm in corresponding position",
        "Place LL electrode on the left leg (ankle or lower leg)",
        "Ensure good contact between electrode and skin"
      ]
    },
    {
      title: "Connect to ECG Device",
      description: "Attach the electrode leads to the ECG monitoring device.",
      substeps: [
        "Connect RA (white) lead to right arm electrode",
        "Connect LA (black) lead to left arm electrode",
        "Connect LL (red) lead to left leg electrode",
        "Verify all connections are secure"
      ]
    },
    {
      title: "Start Recording",
      description: "Begin the ECG recording and monitor the waveforms.",
      substeps: [
        "Turn on the ECG device",
        "Select augmented leads mode (aVR, aVL, aVF)",
        "Start the recording",
        "Instruct the subject to remain still and breathe normally",
        "Record for at least 10-15 seconds for each lead"
      ]
    },
    {
      title: "Analyze the Results",
      description: "Examine the recorded waveforms and identify key features.",
      substeps: [
        "Observe the P, QRS, and T waves in each lead",
        "Note the polarity of deflections in each augmented lead",
        "Compare the waveforms across all three augmented leads",
        "Identify any abnormalities or irregularities",
        "Calculate heart rate from the recording"
      ]
    },
    {
      title: "Document Findings",
      description: "Record observations and measurements from the ECG.",
      substeps: [
        "Label each waveform recording",
        "Note the amplitude and duration of key waves",
        "Document any abnormal findings",
        "Save or print the ECG tracings",
        "Clean and store equipment properly"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Experimental Procedure</CardTitle>
          <CardDescription>
            Step-by-step guide for monitoring ECG augmented leads
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index !== steps.length - 1 && (
                  <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-border" />
                )}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow pb-8">
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-3">{step.description}</p>
                    <ul className="space-y-2">
                      {step.substeps.map((substep, subIndex) => (
                        <li key={subIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{substep}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Safety Precautions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-warning/10 border border-warning/20 rounded-lg">
              <Badge variant="outline" className="bg-warning/10 text-warning">⚠️</Badge>
              <p className="text-sm">
                Ensure all equipment is properly grounded to prevent electrical hazards
              </p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-warning/10 border border-warning/20 rounded-lg">
              <Badge variant="outline" className="bg-warning/10 text-warning">⚠️</Badge>
              <p className="text-sm">
                Check for any skin allergies before applying electrode gel or adhesive
              </p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-warning/10 border border-warning/20 rounded-lg">
              <Badge variant="outline" className="bg-warning/10 text-warning">⚠️</Badge>
              <p className="text-sm">
                Do not perform ECG on subjects with active implanted devices without proper authorization
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
