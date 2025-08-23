import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Edit, Trash2 } from "lucide-react";

const ProductView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock product data - replace with actual API call
  const product = {
    id: 1,
    name: "Ace Gold Petrol",
    category: "SCV Cargo",
    price: "₹3.99 Lakh",
    image: "/placeholder.svg",
    status: "active",
    description: "The Ace Gold Petrol is a reliable small commercial vehicle designed for urban logistics and last-mile delivery. With its efficient petrol engine and compact design, it offers excellent maneuverability in city traffic while providing adequate cargo space for small businesses.",
    specifications: {
      engine: "694cc Petrol Engine",
      power: "35 HP",
      torque: "70 Nm",
      gearbox: "5-Speed Manual",
      fuel_tank: "35 Liters",
      payload: "550 kg"
    },
    createdAt: "2024-01-15",
    updatedAt: "2024-01-20"
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/admin/products")}
            className="border-border/50 hover:bg-accent/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Product Details</h1>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => navigate(`/admin/products/${id}/edit`)}
            className="bg-primary hover:bg-primary/90"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit Product
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Product Image</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src={product.image}
              alt={product.name}
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
              <label className="text-sm font-medium text-muted-foreground">Product Name</label>
              <p className="text-foreground font-semibold">{product.name}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Category</label>
              <p className="text-foreground">{product.category}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Price</label>
              <p className="text-foreground font-semibold text-lg">{product.price}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Status</label>
              <div className="mt-1">
                <Badge variant={product.status === "active" ? "default" : "secondary"}>
                  {product.status}
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
          <p className="text-muted-foreground leading-relaxed">{product.description}</p>
        </CardContent>
      </Card>

      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">Specifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between p-3 rounded-lg bg-muted/20">
                <span className="font-medium text-foreground capitalize">
                  {key.replace('_', ' ')}
                </span>
                <span className="text-muted-foreground">{value}</span>
              </div>
            ))}
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
            <p className="text-foreground">{product.createdAt}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Last Updated</label>
            <p className="text-foreground">{product.updatedAt}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductView;