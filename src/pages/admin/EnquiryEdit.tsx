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

const EnquiryEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      fullName: "Amit Sharma",
      mobileNumber: "+91 9876543210",
      email: "amit.sharma@example.com",
      state: "Maharashtra",
      city: "Mumbai",
      pincode: "400001",
      selectedProduct: "Ace Gold Petrol",
      enquiryType: "Product Information",
      status: "new",
      priority: "medium",
      assignedTo: "Sales Team Mumbai",
      followUpDate: "2024-12-01",
      message: "I am interested in purchasing the Ace Gold Petrol for my small business. Please provide more details about pricing, financing options, and availability in Mumbai."
    }
  });

  const onSubmit = (data: any) => {
    console.log("Updated enquiry:", data);
    toast({
      title: "Enquiry Updated",
      description: "Enquiry details have been updated successfully.",
    });
    navigate(`/admin/enquiries/${id}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(`/admin/enquiries/${id}`)}
            className="border-border/50 hover:bg-accent/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Enquiry
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Edit Enquiry</h1>
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
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Full Name</FormLabel>
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
                  name="mobileNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Mobile Number</FormLabel>
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email"
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
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">City</FormLabel>
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
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">State</FormLabel>
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
                </div>

                <FormField
                  control={form.control}
                  name="pincode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Pincode</FormLabel>
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

            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Enquiry Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="contacted">Contacted</SelectItem>
                          <SelectItem value="qualified">Qualified</SelectItem>
                          <SelectItem value="closed">Closed</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Priority</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background/50 border-border/50 text-foreground">
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="assignedTo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Assigned To</FormLabel>
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
                  name="followUpDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Follow-up Date</FormLabel>
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
          </div>

          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Product Interest</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="selectedProduct"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Selected Product</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-background/50 border-border/50 text-foreground">
                          <SelectValue placeholder="Select product" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Ace Gold Petrol">Ace Gold Petrol</SelectItem>
                        <SelectItem value="Magic Express">Magic Express</SelectItem>
                        <SelectItem value="Yodha Pickup">Yodha Pickup</SelectItem>
                        <SelectItem value="Ultra T.7">Ultra T.7</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="enquiryType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Enquiry Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-background/50 border-border/50 text-foreground">
                          <SelectValue placeholder="Select enquiry type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Product Information">Product Information</SelectItem>
                        <SelectItem value="Price Inquiry">Price Inquiry</SelectItem>
                        <SelectItem value="Test Drive">Test Drive</SelectItem>
                        <SelectItem value="Service Support">Service Support</SelectItem>
                        <SelectItem value="Finance Options">Finance Options</SelectItem>
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
              <CardTitle className="text-foreground">Customer Message</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="message"
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

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate(`/admin/enquiries/${id}`)}
              className="border-border/50 hover:bg-accent/20"
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              <Save className="w-4 h-4 mr-2" />
              Update Enquiry
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EnquiryEdit;