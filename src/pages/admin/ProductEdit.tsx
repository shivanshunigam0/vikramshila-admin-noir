import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, Save } from "lucide-react";

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      name: "Ace Gold Petrol",
      category: "SCV Cargo",
      price: "3.99",
      description: "The Ace Gold Petrol is a reliable small commercial vehicle designed for urban logistics and last-mile delivery.",
      engine: "694cc Petrol Engine",
      power: "35 HP",
      torque: "70 Nm",
      gearbox: "5-Speed Manual",
      fuel_tank: "35 Liters",
      payload: "550 kg",
      status: "active"
    }
  });

  const onSubmit = (data: any) => {
    console.log("Updated product:", data);
    toast({
      title: "Product Updated",
      description: "Product details have been updated successfully.",
    });
    navigate(`/admin/products/${id}`);
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
          <h1 className="text-2xl font-bold text-foreground">Edit Product</h1>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Product Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-background/50 border-border/50 text-foreground"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background/50 border-border/50 text-foreground">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="SCV Cargo">SCV Cargo</SelectItem>
                          <SelectItem value="SCV Passenger">SCV Passenger</SelectItem>
                          <SelectItem value="Pickup">Pickup</SelectItem>
                          <SelectItem value="Truck">Truck</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Price (in Lakhs)</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="number"
                          step="0.01"
                          className="bg-background/50 border-border/50 text-foreground"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Status</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background/50 border-border/50 text-foreground">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Product Image</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-full h-64 bg-muted/20 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Current Image Preview</p>
                </div>
                <Input
                  type="file"
                  accept="image/*"
                  className="bg-background/50 border-border/50 text-foreground"
                />
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Description</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea 
                        {...field} 
                        rows={4}
                        className="bg-background/50 border-border/50 text-foreground"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Specifications</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="engine"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Engine</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-background/50 border-border/50 text-foreground"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="power"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Power</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-background/50 border-border/50 text-foreground"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="torque"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Torque</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-background/50 border-border/50 text-foreground"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gearbox"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Gearbox</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-background/50 border-border/50 text-foreground"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fuel_tank"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Fuel Tank</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-background/50 border-border/50 text-foreground"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="payload"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Payload</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-background/50 border-border/50 text-foreground"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate(`/admin/products/${id}`)}
              className="border-border/50 hover:bg-accent/20"
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              <Save className="w-4 h-4 mr-2" />
              Update Product
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProductEdit;