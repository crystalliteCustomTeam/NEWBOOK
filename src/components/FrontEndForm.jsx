"use client"
// React Hook Form
import { useForm } from "react-hook-form"
// Zod
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
// Shadcnui
import { Form, FormControl, FormField, FormItem, FormMessage, Input, Textarea, FormLabel, Checkbox, FormDescription } from "@/components/shadcnui"
import { useState } from "react"
// Next
import { useRouter } from "next/navigation"
import Link from "next/link"

const formSchema = z.object({
    firstName: z.string().min(1, {
        message: "name cannot be empty",
    }),
    lastName: z.string(),
    phone: z.string({
        required_error: "phone is required",
        invalid_type_error: "phone must be a string",
    }).min(7, {
        message: "phone must be at least 7 characters.",
    }).max(14, {
        message: "phone must be at most 14 characters.",
    }).regex(/^\d+$/, {
        message: "phone number can only contain digits.",
    }),
    email: z.string().email({
        message: "please use a valid email",
    }),
    policy: z.boolean().default(false).optional(),
    nda: z.boolean().default(false).optional(),
    message: z.string(),
})

const FrontEndForm = ({ label = true, theme = false, lastName = false, policy = false, nda = false }) => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            policy: false,
            nda: false,
            message: ""
        }
    })
    const handleSubmit = async (values) => {
        setLoading(true)
        const filteredValues = Object.entries(values).reduce((acc, [key, value]) => {
            if (value !== '' && value !== false) {
                acc[key] = value
            }
            return acc
        }, {})

        console.log(filteredValues)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="grid grid-cols-1 gap-5">
                <div className="grid grid-cols-2 gap-5">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                {label && <FormLabel>Full Name <span className="text-primary">*</span></FormLabel>}
                                <FormControl>
                                    <Input placeholder={lastName ? "First Name" : "Type Name"} {...field} theme={theme} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {!lastName && <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                {label && <FormLabel>Email Address <span className="text-primary">*</span></FormLabel>}
                                <FormControl>
                                    <Input placeholder="Type Email" {...field} theme={theme} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />}
                    {lastName && <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                {label && <FormLabel>Last Name <span className="text-primary">*</span></FormLabel>}
                                <FormControl>
                                    <Input placeholder="Last Name" {...field} theme={theme} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />}
                </div>
                {lastName && <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            {label && <FormLabel>Email Address <span className="text-primary">*</span></FormLabel>}
                            <FormControl>
                                <Input placeholder="Type Email" {...field} theme={theme} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />}
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            {label && <FormLabel>Phone <span className="text-primary">*</span></FormLabel>}
                            <FormControl>
                                <Input placeholder="(000) 000-0000" {...field} theme={theme} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            {label && <FormLabel>Details</FormLabel>}
                            <FormControl>
                                <Textarea placeholder="Tell us about your project..." {...field} theme={theme} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {
                    policy && nda && (
                        <div className="grid grid-cols-1 md:flex items-center gap-5">
                            <FormField
                                control={form.control}
                                name="policy"
                                render={({ field }) => (
                                    <FormItem className="flex items-center gap-4 font-manrope">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="!mt-0">
                                            <FormDescription>
                                                I accept your <Link href="/" className="font-semibold underline underline-offset-4">Privacy Policy</Link>
                                            </FormDescription>
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="nda"
                                render={({ field }) => (
                                    <FormItem className="flex items-center gap-4 font-manrope">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="!mt-0">
                                            <FormDescription>
                                                Send me NDA
                                            </FormDescription>
                                        </div>
                                    </FormItem>
                                )}
                            />
                        </div>
                    )
                }
                <button type="submit" className={`inline-flex text-white items-center text-sm md:text-base leading-none px-3 md:px-0 h-[40px] w-[200px] md:h-[50px] rounded-xl bg-gradient justify-center uppercase transition-all duration-300 ${theme === "popup" ? " " : "mt-5"} hover:bg-black hover:border hover:border-white hover:[boxShadow:0px_5px_15px_rgba(255,_118,_117,_0.3)] hover:bg-none`}>
                    {loading ? "Loading..." : "Submit"}
                </button>
            </form>
        </Form>
    )
}

export default FrontEndForm