import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, Save } from "lucide-react";

const NewLaunchEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      title: "Ace Gold CNG Variant",
      description: "Introducing the new CNG variant of our popular Ace Gold series. This eco-friendly commercial vehicle offers enhanced fuel efficiency with CNG technology while maintaining the reliability and performance that Ace Gold is known for.",
      launchDate: "2024-11-15",
      expectedPrice: "4.25",
      targetMarket: "Small Commercial Vehicle segment focusing on eco-conscious businesses"
    }
  });

  const onSubmit = (data: any) => {
    console.log("Updated launch:", data);
    toast({
      title: "Launch Updated",
      description: "New launch details have been updated successfully.",
    });
    navigate(`/admin/launches/${id}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(`/admin/launches/${id}`)}
            className="border-border/50 hover:bg-accent/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Launch
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Edit New Launch</h1>
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
                      <FormLabel className="text-foreground">Launch Title</FormLabel>
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
                  name="expectedPrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Expected Price (in Lakhs)</FormLabel>
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
                  name="launchDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Launch Date</FormLabel>
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
                <CardTitle className="text-foreground">Launch Images</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full h-32 bg-muted/20 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Image 1</p>
                  </div>
                  <div className="w-full h-32 bg-muted/20 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Image 2</p>
                  </div>
                </div>
                <Input
                  type="file"
                  accept="image/*"
                  multiple
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
              <CardTitle className="text-foreground">Target Market</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="targetMarket"
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

          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Launch Videos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="w-full h-32 bg-muted/20 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Current Video Preview</p>
              </div>
              <Input
                type="file"
                accept="video/*"
                multiple
                className="bg-background/50 border-border/50 text-foreground"
              />
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate(`/admin/launches/${id}`)}
              className="border-border/50 hover:bg-accent/20"
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              <Save className="w-4 h-4 mr-2" />
              Update Launch
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default NewLaunchEdit;