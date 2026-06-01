'use client';

import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-card border-t border-border">
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="text-2xl font-bold gradient-text mb-2">Caarma Tech</div>
                        <p className="text-muted-foreground text-sm">
                            Empowering students with industry-ready tech skills and mentorship from a 10+ year veteran.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Courses</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="#courses" className="hover:text-primary transition-colors">
                                    Cloud Computing
                                </Link>
                            </li>
                            <li>
                                <Link href="#courses" className="hover:text-primary transition-colors">
                                    DevOps Bootcamp
                                </Link>
                            </li>
                            <li>
                                <Link href="#courses" className="hover:text-primary transition-colors">
                                    AI Engineering
                                </Link>
                            </li>
                            <li>
                                <Link href="#courses" className="hover:text-primary transition-colors">
                                    Full Stack Dev
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                <Mail size={16} />
                                <a href="mailto:hello@anirudh.io">support@carmacare.com</a>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                <Phone size={16} />
                                <a href="tel:+919876543210">+91 8979620136</a>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin size={16} />
                                <span>India</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground text-center md:text-left">
                            © {currentYear} Carmaa Tech. All rights reserved.
                        </p>

                        <div className="flex items-center gap-4">
                            {/* <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter size={20} />
                            </a> */}
                            <a
                                href="https://www.linkedin.com/in/anirudh-dobhal/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                          
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
