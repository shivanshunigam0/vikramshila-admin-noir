import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Edit, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const EnquiryView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock enquiry data
  const enquiry = {
    id: 1,
    fullName: "Amit Sharma",
    mobileNumber: "+91 9876543210",
    email: "amit.sharma@example.com",
    state: "Maharashtra",
    city: "Mumbai",
    pincode: "400001",
    selectedProduct: "Ace Gold Petrol",
    whatsappConsent: true,
    enquiryType: "Product Information",
    message: "I am interested in purchasing the Ace Gold Petrol for my small business. Please provide more details about pricing, financing options, and availability in Mumbai.",
    status: "new",
    priority: "medium",
    source: "Website Form",
    followUpDate: "2024-12-01",
    assignedTo: "Sales Team Mumbai",
    createdAt: "2024-11-28",
    updatedAt: "2024-11-28"
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
            onClick={() => navigate("/admin/enquiries")}
            className="border-border/50 hover:bg-accent/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Enquiries
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Enquiry Details</h1>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => navigate(`/admin/enquiries/${id}/edit`)}
            className="bg-primary hover:bg-primary/90"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit Enquiry
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Customer Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Full Name</label>
              <p className="text-foreground font-semibold text-lg">{enquiry.fullName}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                <Phone className="w-4 h-4" />
                Mobile Number
              </label>
              <p className="text-foreground font-medium">{enquiry.mobileNumber}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <p className="text-foreground">{enquiry.email}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Location
              </label>
              <p className="text-foreground">{enquiry.city}, {enquiry.state} - {enquiry.pincode}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Enquiry Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Status</label>
              <div className="mt-1">
                <Badge className={getStatusColor(enquiry.status)}>
                  {enquiry.status.charAt(0).toUpperCase() + enquiry.status.slice(1)}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Priority</label>
              <div className="mt-1">
                <Badge className={getPriorityColor(enquiry.priority)}>
                  {enquiry.priority.charAt(0).toUpperCase() + enquiry.priority.slice(1)}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Source</label>
              <p className="text-foreground">{enquiry.source}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Assigned To</label>
              <p className="text-foreground">{enquiry.assignedTo}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Follow-up Date</label>
              <p className="text-foreground">{enquiry.followUpDate}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">Product Interest</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">Selected Product</label>
            <p className="text-foreground font-semibold text-lg">{enquiry.selectedProduct}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Enquiry Type</label>
            <p className="text-foreground">{enquiry.enquiryType}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
              <MessageCircle className="w-4 h-4" />
              WhatsApp Consent
            </label>
            <div className="mt-1">
              <Badge variant={enquiry.whatsappConsent ? "default" : "secondary"}>
                {enquiry.whatsappConsent ? "Yes" : "No"}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">Customer Message</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/20 p-4 rounded-lg">
            <p className="text-foreground leading-relaxed italic">"{enquiry.message}"</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">Contact Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button 
            variant="outline"
            className="border-border/50 hover:bg-accent/20"
            onClick={() => window.open(`tel:${enquiry.mobileNumber}`)}
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Customer
          </Button>
          <Button 
            variant="outline"
            className="border-border/50 hover:bg-accent/20"
            onClick={() => window.open(`mailto:${enquiry.email}`)}
          >
            <Mail className="w-4 h-4 mr-2" />
            Send Email
          </Button>
          {enquiry.whatsappConsent && (
            <Button 
              variant="outline"
              className="border-border/50 hover:bg-accent/20"
              onClick={() => window.open(`https://wa.me/${enquiry.mobileNumber.replace(/\D/g, '')}`)}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          )}
        </CardContent>
      </Card>

      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">Timestamps</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">Created At</label>
            <p className="text-foreground">{enquiry.createdAt}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Last Updated</label>
            <p className="text-foreground">{enquiry.updatedAt}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnquiryView;