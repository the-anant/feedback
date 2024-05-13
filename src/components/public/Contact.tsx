import { contactFormSchema } from "@/schemas/contactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDebounceCallback } from "usehooks-ts";
import { number, z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "../ui/use-toast";

export default function Newsletter() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const debounced = useDebounceCallback(setEmail, 1000);
  const router = useRouter();

  // Zod implementation
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: "",
      mobile: '',
      topic: '',
      description: '',

    },
  });


  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    setIsSubmiting(true);

    console.log(data)
        toast({
        title: "Success",
        description:"Submition successfull",
      });
    // try {

    //   toast({
    //     title: "Success",
    //     description:"Login successfull",
    //   });
    //   if(!response?.url){
    //     toast({
    //         title:"Login Failed",
    //         description:"Incorrect username or Password",
    //         variant:"destructive"
    //     })
    //   }
    //   if(response?.url){
    //     router.replace('/dashboard')
    //   }
    //   router.replace(`/`);
    // } catch (error: any) {
    //   console.error("Error in SIgnUp of User", error);
    //   const axiosError = error as AxiosError<ApiResponse>;
    //   let errorMessage = axiosError.response?.data.message;
    //   toast({
    //     title: "Signin failed",
    //     description: errorMessage,
    //     variant: "destructive",
    //   });
    //   setIsSubmiting(false);
    // }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <section id="contact">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Contact{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Us
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Lorem ipsum dolor sit amet consectetur.
        </p>

        <Form {...form}>
          <form className=" w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <FormField control={form.control} name="firstname" render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input placeholder="anant" {...field} onChange={(e) => { field.onChange(e) }} />
                  </FormControl>
                </FormItem>
              )}></FormField>
              <FormField control={form.control} name="lastname" render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input placeholder="anant" {...field} onChange={(e) => { field.onChange(e) }} />
                  </FormControl>
                </FormItem>
              )}></FormField>
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="email"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                    />
                  </FormControl>

                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>WhatsApp Number(with countery code)</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="+91 1234567890"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="topic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Topic</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Why do you want to contact us?"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Dscribe your Topic or Message</FormLabel>
                  <FormControl>
                    <Textarea

                      placeholder="I want to....."
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full mt-4" disabled={isSubmiting}>
              {isSubmiting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please Wait
                  ....
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
}
