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

const TestimonialEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      customerName: "Rajesh Kumar",
      location: "Mumbai, Maharashtra",
      rating: "5",
      testimonialText: "Outstanding service from Vikramshila Automobiles! The Ace Gold has been perfect for my small business deliveries. Excellent fuel efficiency and great after-sales support. Highly recommended!",
      productPurchased: "Ace Gold Petrol",
      purchaseDate: "2024-08-15",
      verified: "true"
    }
  });

  const onSubmit = (data: any) => {
    console.log("Updated testimonial:", data);
    toast({
      title: "Testimonial Updated",
      description: "Testimonial details have been updated successfully.",
    });
    navigate(`/admin/testimonials/${id}`);
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
          <h1 className="text-2xl font-bold text-foreground">Edit Testimonial</h1>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Customer Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="customerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Customer Name</FormLabel>
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
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Location</FormLabel>
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
                  name="rating"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Rating</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background/50 border-border/50 text-foreground">
                            <SelectValue placeholder="Select rating" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">1 Star</SelectItem>
                          <SelectItem value="2">2 Stars</SelectItem>
                          <SelectItem value="3">3 Stars</SelectItem>
                          <SelectItem value="4">4 Stars</SelectItem>
                          <SelectItem value="5">5 Stars</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="verified"
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
                          <SelectItem value="true">Verified</SelectItem>
                          <SelectItem value="false">Pending</SelectItem>
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
                <CardTitle className="text-foreground">Customer Image</CardTitle>
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
              <CardTitle className="text-foreground">Purchase Details</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="productPurchased"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Product Purchased</FormLabel>
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
                name="purchaseDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Purchase Date</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        type="date"
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
              <CardTitle className="text-foreground">Testimonial Text</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="testimonialText"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea 
                        {...field} 
                        rows={6}
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
              onClick={() => navigate(`/admin/testimonials/${id}`)}
              className="border-border/50 hover:bg-accent/20"
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              <Save className="w-4 h-4 mr-2" />
              Update Testimonial
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default TestimonialEdit;