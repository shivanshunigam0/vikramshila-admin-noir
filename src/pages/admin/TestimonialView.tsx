import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Edit, Star } from "lucide-react";

const TestimonialView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock testimonial data
  const testimonial = {
    id: 1,
    customerName: "Rajesh Kumar",
    location: "Mumbai, Maharashtra",
    rating: 5,
    testimonialText: "Outstanding service from Vikramshila Automobiles! The Ace Gold has been perfect for my small business deliveries. Excellent fuel efficiency and great after-sales support. Highly recommended!",
    productPurchased: "Ace Gold Petrol",
    purchaseDate: "2024-08-15",
    image: "/placeholder.svg",
    verified: true,
    createdAt: "2024-08-20",
    updatedAt: "2024-08-25"
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
            onClick={() => navigate("/admin/testimonials")}
            className="border-border/50 hover:bg-accent/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Testimonials
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Testimonial Details</h1>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => navigate(`/admin/testimonials/${id}/edit`)}
            className="bg-primary hover:bg-primary/90"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit Testimonial
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Customer Image</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src={testimonial.image}
              alt={testimonial.customerName}
              className="w-full h-64 object-cover rounded-lg bg-muted"
            />
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Customer Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Customer Name</label>
              <p className="text-foreground font-semibold text-lg">{testimonial.customerName}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Location</label>
              <p className="text-foreground">{testimonial.location}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Rating</label>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center">
                  {renderStars(testimonial.rating)}
                </div>
                <span className="text-foreground font-medium">({testimonial.rating}/5)</span>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Status</label>
              <div className="mt-1">
                <Badge variant={testimonial.verified ? "default" : "secondary"}>
                  {testimonial.verified ? "Verified" : "Pending"}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">Testimonial</CardTitle>
        </CardHeader>
        <CardContent>
          <blockquote className="text-foreground leading-relaxed text-lg italic border-l-4 border-primary pl-4">
            "{testimonial.testimonialText}"
          </blockquote>
        </CardContent>
      </Card>

      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">Purchase Details</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">Product Purchased</label>
            <p className="text-foreground font-medium">{testimonial.productPurchased}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Purchase Date</label>
            <p className="text-foreground">{testimonial.purchaseDate}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">Timestamps</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">Created At</label>
            <p className="text-foreground">{testimonial.createdAt}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Last Updated</label>
            <p className="text-foreground">{testimonial.updatedAt}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestimonialView;