import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Edit, Wrench } from "lucide-react";

const ServiceView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock service data
  const service = {
    id: 1,
    title: "Comprehensive Vehicle Maintenance",
    description: "Our comprehensive vehicle maintenance service ensures your Tata Motors commercial vehicle runs at peak performance. We provide scheduled maintenance, preventive care, and expert diagnostics to maximize vehicle uptime and minimize operational costs.",
    icon: "/placeholder.svg",
    status: "active",
    serviceType: "Maintenance",
    duration: "2-4 hours",
    price: "₹2,500 - ₹5,000",
    features: [
      "Complete vehicle inspection",
      "Engine oil and filter change",
      "Brake system check",
      "Tire pressure and alignment",
      "Battery and electrical system check",
      "Cooling system maintenance"
    ],
    benefits: [
      "Extended vehicle life",
      "Improved fuel efficiency",
      "Reduced breakdown risks",
      "Maintained warranty coverage",
      "Expert technician service"
    ],
    availability: "Available at all authorized service centers",
    createdAt: "2024-08-01",
    updatedAt: "2024-08-15"
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/admin/services")}
            className="border-border/50 hover:bg-accent/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Service Details</h1>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => navigate(`/admin/services/${id}/edit`)}
            className="bg-primary hover:bg-primary/90"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit Service
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Service Icon</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center p-8">
              <div className="w-32 h-32 bg-muted/20 rounded-lg flex items-center justify-center">
                <Wrench className="w-16 h-16 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Service Title</label>
              <p className="text-foreground font-semibold text-lg">{service.title}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Service Type</label>
              <p className="text-foreground">{service.serviceType}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Duration</label>
              <p className="text-foreground">{service.duration}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Price Range</label>
              <p className="text-foreground font-semibold text-primary">{service.price}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Status</label>
              <div className="mt-1">
                <Badge variant={service.status === "active" ? "default" : "secondary"}>
                  {service.status}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">Description</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{service.description}</p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Service Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">Availability</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{service.availability}</p>
        </CardContent>
      </Card>

      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">Timestamps</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">Created At</label>
            <p className="text-foreground">{service.createdAt}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Last Updated</label>
            <p className="text-foreground">{service.updatedAt}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceView;