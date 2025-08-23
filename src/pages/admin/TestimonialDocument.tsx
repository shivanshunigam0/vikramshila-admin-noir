import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, Download, FileText, Printer, Star, Quote } from "lucide-react";

const TestimonialDocument = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDownloadPDF = () => {
    toast({
      title: "PDF Downloaded",
      description: "Testimonial document has been downloaded.",
    });
  };

  const handlePrint = () => {
    window.print();
    toast({
      title: "Print Dialog Opened",
      description: "Testimonial document is ready for printing.",
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(`/admin/testimonials/${id}`)}
            className="border-border/50 hover:bg-accent/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Testimonial
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Testimonial Documents</h1>
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
            Testimonial Document
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Customer testimonial report with complete details and verification status.
          </p>
          <div className="p-4 bg-muted/20 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Customer_Testimonial_Report.pdf</p>
                <p className="text-sm text-muted-foreground">1.2 MB • Updated 1 day ago</p>
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
          <CardTitle className="text-foreground">Customer Testimonial Report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 print:space-y-4">
          <div className="text-center border-b border-border/50 pb-6">
            <h1 className="text-3xl font-bold text-foreground mb-2">Customer Testimonial</h1>
            <div className="flex items-center justify-center gap-4">
              <Badge className="bg-green-500 text-white">Verified</Badge>
              <div className="flex items-center gap-1">
                {renderStars(5)}
                <span className="text-foreground font-medium ml-2">(5/5)</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Customer Information</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Name:</span>
                  <span className="text-foreground font-medium">Rajesh Kumar</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="text-foreground">Mumbai, Maharashtra</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Product:</span>
                  <span className="text-foreground">Ace Gold Petrol</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Purchase Date:</span>
                  <span className="text-foreground">August 15, 2024</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Testimonial Details</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rating:</span>
                  <div className="flex items-center">
                    {renderStars(5)}
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="text-green-500 font-medium">Verified</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Submitted:</span>
                  <span className="text-foreground">August 20, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Updated:</span>
                  <span className="text-foreground">August 25, 2024</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Quote className="w-5 h-5" />
              Customer Testimonial
            </h3>
            <div className="bg-muted/20 p-6 rounded-lg">
              <blockquote className="text-foreground leading-relaxed text-lg italic">
                "Outstanding service from Vikramshila Automobiles! The Ace Gold has been perfect for my small business deliveries. Excellent fuel efficiency and great after-sales support. Highly recommended!"
              </blockquote>
              <div className="mt-6 text-right">
                <p className="text-foreground font-semibold">— Rajesh Kumar</p>
                <p className="text-muted-foreground">Mumbai, Maharashtra</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Experience Highlights</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Excellent service quality</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Perfect for business use</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Outstanding fuel efficiency</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Great after-sales support</span>
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

export default TestimonialDocument;