import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Edit, Calendar, Play } from "lucide-react";

const NewLaunchView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock new launch data
  const launch = {
    id: 1,
    title: "Ace Gold CNG Variant",
    description: "Introducing the new CNG variant of our popular Ace Gold series. This eco-friendly commercial vehicle offers enhanced fuel efficiency with CNG technology while maintaining the reliability and performance that Ace Gold is known for.",
    launchDate: "2024-11-15",
    status: "upcoming",
    images: ["/placeholder.svg", "/placeholder.svg"],
    videos: ["/placeholder.mp4"],
    keyFeatures: [
      "Advanced CNG Technology",
      "Enhanced Fuel Efficiency",
      "Reduced Emissions",
      "Same Reliable Performance",
      "Cost-effective Operation"
    ],
    targetMarket: "Small Commercial Vehicle segment focusing on eco-conscious businesses",
    expectedPrice: "₹4.25 Lakh (Expected)",
    createdAt: "2024-09-10",
    updatedAt: "2024-09-15"
  };

  const isLaunched = new Date() >= new Date(launch.launchDate);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/admin/launches")}
            className="border-border/50 hover:bg-accent/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to New Launches
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Launch Details</h1>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => navigate(`/admin/launches/${id}/edit`)}
            className="bg-primary hover:bg-primary/90"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit Launch
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Launch Images</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {launch.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${launch.title} ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg bg-muted"
                />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Launch Title</label>
              <p className="text-foreground font-semibold text-lg">{launch.title}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Expected Price</label>
              <p className="text-foreground font-semibold text-xl text-primary">{launch.expectedPrice}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Status</label>
              <div className="mt-1">
                <Badge variant={isLaunched ? "default" : "secondary"}>
                  {isLaunched ? "Launched" : "Upcoming"}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Launch Date
              </label>
              <p className="text-foreground font-medium">{launch.launchDate}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">Description</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{launch.description}</p>
        </CardContent>
      </Card>

      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">Key Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {launch.keyFeatures.map((feature, index) => (
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
          <CardTitle className="text-foreground">Launch Videos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {launch.videos.map((video, index) => (
              <div key={index} className="bg-muted/20 p-6 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-foreground font-medium">Launch Video {index + 1}</p>
                  <p className="text-sm text-muted-foreground">Click to play</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">Target Market</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{launch.targetMarket}</p>
        </CardContent>
      </Card>

      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">Timestamps</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">Created At</label>
            <p className="text-foreground">{launch.createdAt}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Last Updated</label>
            <p className="text-foreground">{launch.updatedAt}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewLaunchView;