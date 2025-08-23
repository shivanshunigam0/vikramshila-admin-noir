import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, Download, FileText, Printer, Calendar, Rocket } from "lucide-react";

const NewLaunchDocument = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDownloadPDF = () => {
    toast({
      title: "PDF Downloaded",
      description: "New launch document has been downloaded.",
    });
  };

  const handlePrint = () => {
    window.print();
    toast({
      title: "Print Dialog Opened",
      description: "Launch document is ready for printing.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(`/admin/launches/${id}`)}
            className="border-border/50 hover:bg-accent/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Launch
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Launch Documents</h1>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={handlePrint}
            variant="outline"
            className="border-border/50 hover:bg-accent/20"
          >
            <Printer className="w-4 h-4 mr-2" />
            Print
          </Button>
        </div>
      </div>

      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Launch Document
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Complete new product launch documentation with features, timeline, and marketing details.
          </p>
          <div className="p-4 bg-muted/20 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Ace_Gold_CNG_Launch_Document.pdf</p>
                <p className="text-sm text-muted-foreground">2.8 MB • Updated 2 days ago</p>
              </div>
              <Button
                onClick={handleDownloadPDF}
                size="sm"
                className="bg-primary hover:bg-primary/90"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">New Launch Report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 print:space-y-4">
          <div className="text-center border-b border-border/50 pb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Rocket className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">New Product Launch</h1>
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Ace Gold CNG Variant</h2>
            <div className="flex items-center justify-center gap-4">
              <Badge className="bg-blue-500 text-white">Upcoming</Badge>
              <span className="text-xl font-bold text-primary">₹4.25 Lakh (Expected)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Launch Details</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Launch Date:</span>
                  <span className="text-foreground font-medium">November 15, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="text-blue-500 font-medium">Upcoming</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Expected Price:</span>
                  <span className="text-foreground font-semibold">₹4.25 Lakh</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Development Timeline</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Planning Phase:</span>
                  <span className="text-green-500 font-medium">Completed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Development:</span>
                  <span className="text-green-500 font-medium">Completed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Testing:</span>
                  <span className="text-yellow-500 font-medium">In Progress</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Marketing:</span>
                  <span className="text-blue-500 font-medium">Planned</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Product Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              Introducing the new CNG variant of our popular Ace Gold series. This eco-friendly commercial 
              vehicle offers enhanced fuel efficiency with CNG technology while maintaining the reliability 
              and performance that Ace Gold is known for.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Key Features</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Advanced CNG Technology</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Enhanced Fuel Efficiency</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Reduced Emissions</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Same Reliable Performance</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Cost-effective Operation</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Target Market</h3>
            <p className="text-muted-foreground leading-relaxed">
              Small Commercial Vehicle segment focusing on eco-conscious businesses looking for 
              sustainable transportation solutions without compromising on performance and reliability.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Launch Strategy</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Pre-launch marketing campaign</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Dealer network preparation</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Customer test drive events</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Digital marketing campaigns</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-border/50 pt-4 text-center">
            <p className="text-sm text-muted-foreground">
              Generated on {new Date().toLocaleDateString()} | Vikramshila Automobiles Admin Panel
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewLaunchDocument;