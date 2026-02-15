"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Contact2Props {
    title?: string;
    description?: string;
    phone?: string;
    email?: string;
    web?: { label: string; url: string };
}

export const Contact2 = ({
    title = "Contact Us",
    description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
    phone = "+91 98765 43210",
    email = "jamesbadmintonacademy@gmail.com",
    web = { label: "jamesbadmintonacademy.com", url: "https://jamesbadmintonacademy.com" },
}: Contact2Props) => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = () => {
        const { firstname, lastname, email, subject, message } = formData;
        const fullName = `${firstname} ${lastname}`.trim();

        const text = `*New Key Enquiry from Website*
Name: ${fullName}
Email: ${email}
Subject: ${subject}
Message: ${message}`;

        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/919745216499?text=${encodedText}`, '_blank');
    };

    return (
        <section id="contact" className="relative py-32 overflow-hidden">
            {/* Mesh Gradient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl mix-blend-multiply animate-blob" />
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000" />
                <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-100/50 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-4000" />
            </div>

            <div className="w-full px-4 md:px-8 relative z-10">
                <div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Column 1: Contact Info */}
                    <div className="flex flex-col justify-between gap-10">
                        <div className="text-center lg:text-left">
                            <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl text-foreground">
                                {title}
                            </h1>
                            <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
                        </div>
                        <div className="w-full bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-sm">
                            <h3 className="mb-4 text-xl font-semibold text-foreground">
                                Contact Details
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-muted-foreground text-sm">
                                    <span className="font-semibold text-foreground min-w-[50px]">Phone:</span>
                                    <span>{phone}</span>
                                </li>
                                <li className="flex items-center gap-3 text-muted-foreground text-sm">
                                    <span className="font-semibold text-foreground min-w-[50px]">Email:</span>
                                    <a href={`mailto:${email}`} className="hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4 truncate">
                                        {email}
                                    </a>
                                </li>
                                <li className="flex items-center gap-3 text-muted-foreground text-sm">
                                    <span className="font-semibold text-foreground min-w-[50px]">Web:</span>
                                    <a href={web.url} target="_blank" className="hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4 truncate">
                                        {web.label}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 2: Contact Form */}
                    <div className="flex flex-col gap-6 rounded-2xl border bg-white/80 backdrop-blur-md p-8 shadow-lg">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="grid w-full items-center gap-2">
                                <Label htmlFor="firstname" className="text-sm font-medium">First Name</Label>
                                <Input
                                    type="text"
                                    id="firstname"
                                    placeholder="John"
                                    className="bg-white/50"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="grid w-full items-center gap-2">
                                <Label htmlFor="lastname" className="text-sm font-medium">Last Name</Label>
                                <Input
                                    type="text"
                                    id="lastname"
                                    placeholder="Doe"
                                    className="bg-white/50"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="grid w-full items-center gap-2">
                            <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="john@example.com"
                                className="bg-white/50"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid w-full items-center gap-2">
                            <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                            <Input
                                type="text"
                                id="subject"
                                placeholder="How can we help?"
                                className="bg-white/50"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid w-full gap-2">
                            <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                            <Textarea
                                placeholder="Type your message here..."
                                id="message"
                                className="min-h-[150px] bg-white/50 resize-none"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>
                        <Button
                            className="w-full h-12 text-base font-medium shadow-md hover:shadow-lg transition-all mt-2"
                            onClick={handleSubmit}
                        >
                            Send Message
                        </Button>
                    </div>

                    {/* Column 3: Map */}
                    <div className="flex flex-col gap-6 h-full min-h-[400px]">
                        <div className="h-full w-full rounded-2xl border bg-white/60 backdrop-blur-sm shadow-md overflow-hidden relative p-2">
                            <iframe
                                title="Cochin Sports Arena"
                                className="h-full w-full rounded-xl"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps?q=James%20Badminton%20Academy%20Kochi&z=16&output=embed"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
