import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Edit, Calendar } from "lucide-react";

const SchemeView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock scheme data
  const scheme = {
    id: 1,
    title: "Festival Special Offer",
    description: "Get special discounts on all commercial vehicles during the festival season. This offer includes reduced EMI options, extended warranty, and free service packages.",
    startDate: "2024-10-01",
    endDate: "2024-10-31",
    banner: "/placeholder.svg",
    status: "active",
    discount: "15% Off",
    features: [
      "Up to 15% discount on ex-showroom price",
      "Zero down payment options",
      "Extended warranty up to 5 years",
      "Free service for first 2 years",
      "Roadside assistance included"
    ],
    terms: "Terms and conditions apply. Offer valid for limited period only. Cannot be clubbed with other offers.",
    createdAt: "2024-09-15",
    updatedAt: "2024-09-20"
  };

  const isActive = new Date() >= new Date(scheme.startDate) && new Date() <= new Date(scheme.endDate);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/admin/schemes")}
            className="border-border/50 hover:bg-accent/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Schemes
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Scheme Details</h1>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => navigate(`/admin/schemes/${id}/edit`)}
            className="bg-primary hover:bg-primary/90"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit Scheme
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Scheme Banner</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src={scheme.banner}
              alt={scheme.title}
              className="w-full h-64 object-cover rounded-lg bg-muted"
            />
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Scheme Title</label>
              <p className="text-foreground font-semibold text-lg">{scheme.title}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Discount</label>
              <p className="text-foreground font-semibold text-xl text-primary">{scheme.discount}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Status</label>
              <div className="mt-1">
                <Badge variant={isActive ? "default" : "secondary"}>
                  {isActive ? "Active" : "Inactive"}
                </Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Start Date
                </label>
                <p className="text-foreground">{scheme.startDate}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  End Date
                </label>
                <p className="text-foreground">{scheme.endDate}</p>
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
          <p className="text-muted-foreground leading-relaxed">{scheme.description}</p>
        </CardContent>
      </Card>

      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">Key Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {scheme.features.map((feature, index) => (
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
          <CardTitle className="text-foreground">Terms & Conditions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{scheme.terms}</p>
        </CardContent>
      </Card>

      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">Timestamps</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">Created At</label>
            <p className="text-foreground">{scheme.createdAt}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Last Updated</label>
            <p className="text-foreground">{scheme.updatedAt}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SchemeView;