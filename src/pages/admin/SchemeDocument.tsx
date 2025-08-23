import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, Download, FileText, Printer, Calendar } from "lucide-react";

const SchemeDocument = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDownloadPDF = () => {
    toast({
      title: "PDF Downloaded",
      description: "Scheme details document has been downloaded.",
    });
  };

  const handlePrint = () => {
    window.print();
    toast({
      title: "Print Dialog Opened",
      description: "Scheme document is ready for printing.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(`/admin/schemes/${id}`)}
            className="border-border/50 hover:bg-accent/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Scheme
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Scheme Documents</h1>
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
            Scheme Document
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Complete scheme details with terms, conditions, and offer information.
          </p>
          <div className="p-4 bg-muted/20 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Festival_Special_Offer.pdf</p>
                <p className="text-sm text-muted-foreground">1.8 MB • Updated 3 days ago</p>
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
          <CardTitle className="text-foreground">Scheme Details Report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 print:space-y-4">
          <div className="text-center border-b border-border/50 pb-6">
            <h1 className="text-3xl font-bold text-foreground mb-2">Festival Special Offer</h1>
            <div className="flex items-center justify-center gap-4">
              <Badge className="bg-primary text-primary-foreground">Active</Badge>
              <span className="text-2xl font-bold text-primary">15% Off</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Offer Period</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Start Date:</span>
                  <span className="text-foreground font-medium">October 01, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">End Date:</span>
                  <span className="text-foreground font-medium">October 31, 2024</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Scheme Status</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="text-green-500 font-medium">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="text-foreground">31 Days</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              Get special discounts on all commercial vehicles during the festival season. 
              This offer includes reduced EMI options, extended warranty, and free service packages.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Key Benefits</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Up to 15% discount on ex-showroom price</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Zero down payment options</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Extended warranty up to 5 years</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Free service for first 2 years</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Roadside assistance included</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Terms & Conditions</h3>
            <p className="text-muted-foreground leading-relaxed">
              Terms and conditions apply. Offer valid for limited period only. Cannot be clubbed with other offers.
              Valid ID proof required. Financing subject to approval. Contact nearest dealership for complete details.
            </p>
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

export default SchemeDocument;