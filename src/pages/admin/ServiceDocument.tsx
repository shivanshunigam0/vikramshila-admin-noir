import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, Download, FileText, Printer, Wrench, Clock, IndianRupee } from "lucide-react";

const ServiceDocument = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDownloadPDF = () => {
    toast({
      title: "PDF Downloaded",
      description: "Service document has been downloaded.",
    });
  };

  const handlePrint = () => {
    window.print();
    toast({
      title: "Print Dialog Opened",
      description: "Service document is ready for printing.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(`/admin/services/${id}`)}
            className="border-border/50 hover:bg-accent/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Service
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Service Documents</h1>
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
            Service Document
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Complete service documentation with features, pricing, and procedures.
          </p>
          <div className="p-4 bg-muted/20 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Comprehensive_Vehicle_Maintenance.pdf</p>
                <p className="text-sm text-muted-foreground">1.5 MB • Updated 1 day ago</p>
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
          <CardTitle className="text-foreground">Service Information Report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 print:space-y-4">
          <div className="text-center border-b border-border/50 pb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Wrench className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">Service Information</h1>
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Comprehensive Vehicle Maintenance</h2>
            <div className="flex items-center justify-center gap-4">
              <Badge className="bg-green-500 text-white">Active</Badge>
              <span className="text-xl font-bold text-primary">₹2,500 - ₹5,000</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Service Details</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Service Type:</span>
                  <span className="text-foreground font-medium">Maintenance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="text-foreground font-medium">2-4 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <IndianRupee className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Price Range:</span>
                  <span className="text-foreground font-medium">₹2,500 - ₹5,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="text-green-500 font-medium">Active</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Availability</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">Available at all authorized service centers</p>
                <div className="mt-4">
                  <h4 className="font-medium text-foreground mb-2">Service Hours:</h4>
                  <p className="text-muted-foreground text-sm">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground text-sm">Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Service Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our comprehensive vehicle maintenance service ensures your Tata Motors commercial vehicle 
              runs at peak performance. We provide scheduled maintenance, preventive care, and expert 
              diagnostics to maximize vehicle uptime and minimize operational costs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Service Features</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Complete vehicle inspection</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Engine oil and filter change</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Brake system check</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Tire pressure and alignment</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Battery and electrical system check</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Cooling system maintenance</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Key Benefits</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Extended vehicle life</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Improved fuel efficiency</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Reduced breakdown risks</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Maintained warranty coverage</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Expert technician service</span>
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

export default ServiceDocument;