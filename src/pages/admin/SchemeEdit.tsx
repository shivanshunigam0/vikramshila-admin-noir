import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, Save } from "lucide-react";

const SchemeEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      title: "Festival Special Offer",
      description: "Get special discounts on all commercial vehicles during the festival season. This offer includes reduced EMI options, extended warranty, and free service packages.",
      startDate: "2024-10-01",
      endDate: "2024-10-31",
      discount: "15% Off",
      terms: "Terms and conditions apply. Offer valid for limited period only. Cannot be clubbed with other offers."
    }
  });

  const onSubmit = (data: any) => {
    console.log("Updated scheme:", data);
    toast({
      title: "Scheme Updated",
      description: "Scheme details have been updated successfully.",
    });
    navigate(`/admin/schemes/${id}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(`/admin/schemes/${id}`)}
            className="border-border/50 hover:bg-accent/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Scheme
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Edit Scheme</h1>
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
                      <FormLabel className="text-foreground">Scheme Title</FormLabel>
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
                  name="discount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Discount Offer</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="e.g., 15% Off, ₹50,000 Off"
                          className="bg-background/50 border-border/50 text-foreground"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Start Date</FormLabel>
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

                  <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">End Date</FormLabel>
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
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Scheme Banner</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-full h-64 bg-muted/20 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Current Banner Preview</p>
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
              <CardTitle className="text-foreground">Terms & Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea 
                        {...field} 
                        rows={3}
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
              onClick={() => navigate(`/admin/schemes/${id}`)}
              className="border-border/50 hover:bg-accent/20"
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              <Save className="w-4 h-4 mr-2" />
              Update Scheme
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SchemeEdit;