import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, Save, Wrench } from "lucide-react";

const ServiceEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      title: "Comprehensive Vehicle Maintenance",
      description: "Our comprehensive vehicle maintenance service ensures your Tata Motors commercial vehicle runs at peak performance. We provide scheduled maintenance, preventive care, and expert diagnostics to maximize vehicle uptime and minimize operational costs.",
      serviceType: "Maintenance",
      duration: "2-4 hours",
      priceMin: "2500",
      priceMax: "5000",
      status: "active",
      availability: "Available at all authorized service centers"
    }
  });

  const onSubmit = (data: any) => {
    console.log("Updated service:", data);
    toast({
      title: "Service Updated",
      description: "Service details have been updated successfully.",
    });
    navigate(`/admin/services/${id}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(`/admin/services/${id}`)}
            className="border-border/50 hover:bg-accent/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Service
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Edit Service</h1>
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
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Service Title</FormLabel>
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
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Service Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background/50 border-border/50 text-foreground">
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Maintenance">Maintenance</SelectItem>
                          <SelectItem value="Repair">Repair</SelectItem>
                          <SelectItem value="Inspection">Inspection</SelectItem>
                          <SelectItem value="Emergency">Emergency</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Service Duration</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="e.g., 2-4 hours"
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
                <CardTitle className="text-foreground">Service Icon</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center p-8">
                  <div className="w-32 h-32 bg-muted/20 rounded-lg flex items-center justify-center">
                    <Wrench className="w-16 h-16 text-primary" />
                  </div>
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
              <CardTitle className="text-foreground">Price Range</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="priceMin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Minimum Price (₹)</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        type="number"
                        className="bg-background/50 border-border/50 text-foreground"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="priceMax"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Maximum Price (₹)</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        type="number"
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
              <CardTitle className="text-foreground">Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="availability"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea 
                        {...field} 
                        rows={2}
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
              onClick={() => navigate(`/admin/services/${id}`)}
              className="border-border/50 hover:bg-accent/20"
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              <Save className="w-4 h-4 mr-2" />
              Update Service
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ServiceEdit;