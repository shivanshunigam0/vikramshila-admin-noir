import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, Download, FileText, Printer } from "lucide-react";

const ProductDocument = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDownloadPDF = () => {
    toast({
      title: "PDF Downloaded",
      description: "Product specification document has been downloaded.",
    });
  };

  const handleDownloadBrochure = () => {
    toast({
      title: "Brochure Downloaded",
      description: "Product brochure has been downloaded.",
    });
  };

  const handlePrint = () => {
    window.print();
    toast({
      title: "Print Dialog Opened",
      description: "Product document is ready for printing.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(`/admin/products/${id}`)}
            className="border-border/50 hover:bg-accent/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Product
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Product Documents</h1>
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

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Specification Document
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Complete technical specifications and features document for the product.
            </p>
            <div className="p-4 bg-muted/20 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Product_Spec_Sheet.pdf</p>
                  <p className="text-sm text-muted-foreground">2.3 MB • Updated 2 days ago</p>
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
            <CardTitle className="text-foreground flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Product Brochure
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Marketing brochure with images, features, and pricing information.
            </p>
            <div className="p-4 bg-muted/20 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Product_Brochure.pdf</p>
                  <p className="text-sm text-muted-foreground">5.7 MB • Updated 1 week ago</p>
                </div>
                <Button
                  onClick={handleDownloadBrochure}
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
      </div>

      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">Product Specification Report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 print:space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Basic Information</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Product Name:</span>
                  <span className="text-foreground font-medium">Ace Gold Petrol</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category:</span>
                  <span className="text-foreground">SCV Cargo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Price:</span>
                  <span className="text-foreground font-semibold">₹3.99 Lakh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="text-foreground">Active</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Technical Specifications</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Engine:</span>
                  <span className="text-foreground">694cc Petrol</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Power:</span>
                  <span className="text-foreground">35 HP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Torque:</span>
                  <span className="text-foreground">70 Nm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payload:</span>
                  <span className="text-foreground">550 kg</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              The Ace Gold Petrol is a reliable small commercial vehicle designed for urban logistics 
              and last-mile delivery. With its efficient petrol engine and compact design, it offers 
              excellent maneuverability in city traffic while providing adequate cargo space for small businesses.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Key Features</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Fuel-efficient petrol engine</li>
              <li>Compact design for city driving</li>
              <li>Reliable 5-speed manual transmission</li>
              <li>35-liter fuel tank capacity</li>
              <li>550 kg payload capacity</li>
              <li>Excellent after-sales service network</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDocument;