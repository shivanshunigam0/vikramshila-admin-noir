import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, Download, FileText, Printer, Phone, Mail, MapPin, MessageCircle, User } from "lucide-react";

const EnquiryDocument = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDownloadPDF = () => {
    toast({
      title: "PDF Downloaded",
      description: "Enquiry document has been downloaded.",
    });
  };

  const handlePrint = () => {
    window.print();
    toast({
      title: "Print Dialog Opened",
      description: "Enquiry document is ready for printing.",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new": return "bg-blue-500 text-white";
      case "contacted": return "bg-yellow-500 text-white";
      case "qualified": return "bg-green-500 text-white";
      case "closed": return "bg-gray-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-500 text-white";
      case "medium": return "bg-yellow-500 text-white";
      case "low": return "bg-green-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(`/admin/enquiries/${id}`)}
            className="border-border/50 hover:bg-accent/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Enquiry
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Enquiry Documents</h1>
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
            Enquiry Document
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Complete customer enquiry report with contact details, product interest, and follow-up information.
          </p>
          <div className="p-4 bg-muted/20 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Customer_Enquiry_Report.pdf</p>
                <p className="text-sm text-muted-foreground">1.1 MB • Updated today</p>
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
          <CardTitle className="text-foreground">Customer Enquiry Report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 print:space-y-4">
          <div className="text-center border-b border-border/50 pb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <User className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">Customer Enquiry</h1>
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Amit Sharma</h2>
            <div className="flex items-center justify-center gap-4">
              <Badge className={getStatusColor("new")}>New</Badge>
              <Badge className={getPriorityColor("medium")}>Medium Priority</Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Name:</span>
                  <span className="text-foreground font-medium">Amit Sharma</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Mobile:</span>
                  <span className="text-foreground font-medium">+91 9876543210</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Email:</span>
                  <span className="text-foreground">amit.sharma@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Location:</span>
                  <span className="text-foreground">Mumbai, Maharashtra - 400001</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Enquiry Details</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Product Interest:</span>
                  <span className="text-foreground font-medium">Ace Gold Petrol</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Enquiry Type:</span>
                  <span className="text-foreground">Product Information</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Source:</span>
                  <span className="text-foreground">Website Form</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">WhatsApp Consent:</span>
                  <Badge variant="default">Yes</Badge>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Customer Message</h3>
            <div className="bg-muted/20 p-4 rounded-lg">
              <p className="text-foreground leading-relaxed italic">
                "I am interested in purchasing the Ace Gold Petrol for my small business. Please provide 
                more details about pricing, financing options, and availability in Mumbai."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Management Details</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <Badge className={getStatusColor("new")}>New</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Priority:</span>
                  <Badge className={getPriorityColor("medium")}>Medium</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Assigned To:</span>
                  <span className="text-foreground">Sales Team Mumbai</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Follow-up Date:</span>
                  <span className="text-foreground">December 01, 2024</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Timeline</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Enquiry Date:</span>
                  <span className="text-foreground">November 28, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Updated:</span>
                  <span className="text-foreground">November 28, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Response Time:</span>
                  <span className="text-green-500 font-medium">Pending</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Recommended Actions</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Contact customer within 24 hours</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Provide detailed product brochure</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Schedule test drive appointment</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Discuss financing options</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">Connect with nearest Mumbai dealership</span>
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

export default EnquiryDocument;