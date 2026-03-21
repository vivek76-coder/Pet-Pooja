import React from 'react';
import PossLayout from './PossLayout.jsx'
const Poss = () => {
    return (
        <PossLayout>
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-surface py-24 md:py-32">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="z-10">
                            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full font-label">The Operating System for Restaurants</span>
                            <h1 className="text-5xl md:text-7xl font-extrabold font-headline leading-tight tracking-tighter text-on-surface mb-8">
                                The Only <span className="text-primary italic">Billing</span> Software You'll Ever Need.
                            </h1>
                            <p className="text-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
                                Join 75,000+ restaurants that scale effortlessly with India's most trusted, all-in-one restaurant management platform. Simple. Powerful. Architectural.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-md font-bold text-lg shadow-xl shadow-primary/30 transition-transform active:scale-95">Get Started Free</button>
                                <button className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-md font-bold text-lg hover:bg-surface-dim transition-colors">Watch Demo</button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                            <div className="glass-card p-4 rounded-2xl shadow-2xl relative overflow-hidden">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5HTO9RXqHWPq79ClmaQETFcgY0k8OjX1oAdGOa3PEK8vx-DaXaK4aOQxTHHZ6rZwH0_2o0LZCklRaL6C0oKIQoSSWiJBxP9SBgqR3JGR-PirHQP1h_HTbucWswnumDy_W9Iv8UO8qHf7-2Jd7FIVG6nKSGcxgRdOKS5p4CvG2S5sfyoZR42ZM_Qq_sJ7nUVaJDsmBl6zjHrV8albUyngEiaxGmZod94cgcsCrED1kMNZ-8LCiqdtpO7lkc5w8wgF_ukudirHsnac"
                                    alt="Petpooja Dashboard Interface"
                                    className="rounded-xl w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Bento Grid */}
                <section className="bg-surface-container-low py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-16">
                            <h2 className="text-4xl font-bold font-headline mb-4 tracking-tight">An all-rounder restaurant billing software</h2>
                            <p className="text-on-surface-variant max-w-2xl">Meticulously designed for every operational nuance. No more friction, just flow.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                            {/* Custom Bills */}
                            <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-2xl shadow-sm flex flex-col justify-between group">
                                <div className="max-w-md">
                                    <span className="material-symbols-outlined text-primary text-4xl mb-6">receipt_long</span>
                                    <h3 className="text-2xl font-bold font-headline mb-4">Customizable Bills</h3>
                                    <p className="text-on-surface-variant">Design professional invoices that match your brand's aesthetic. Add logos, personalized messages, and dynamic tax structures instantly.</p>
                                </div>
                                <div className="mt-8 rounded-xl overflow-hidden shadow-inner bg-surface">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR3vUOaVjc4PCYuQHL7DlBFF799Wuy_C8RhYAu37MTPUMK8vDTmCSl_jLcQG1mPLLJ8-fVhO0zdsHJiZmLtZNt-DeBuZZgaafjs1buIFtsD0Y6bcizotEI45dZBu0XRPg0RzVPtXncipKFCDORCRfpzpLphT0d6Tx7Cuy9QaElD6a4EfzIMkuvBCyAz5aky1X9l35npR_Rnf2P_X383tu7-NynkfY6HegXNk5IYWVJ1mzaizBZWuWHN_rcp27bpwIYkvwwGvGhISo"
                                        alt="Billing customization"
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                            {/* Multi-Terminal */}
                            <div className="md:col-span-4 bg-primary text-on-primary p-10 rounded-2xl shadow-xl flex flex-col justify-between">
                                <div>
                                    <span className="material-symbols-outlined filled text-4xl mb-6">devices</span>
                                    <h3 className="text-2xl font-bold font-headline mb-4">Multi-terminal Billing</h3>
                                    <p className="opacity-80">Sync unlimited terminals across your outlet with real-time cloud updates. Scale as you grow.</p>
                                </div>
                                <div className="mt-8 text-6xl font-black opacity-10">SYNC</div>
                            </div>
                            {/* KOT Printing */}
                            <div className="md:col-span-4 bg-surface-container-lowest p-10 rounded-2xl shadow-sm flex flex-col">
                                <span className="material-symbols-outlined text-primary text-4xl mb-6">print</span>
                                <h3 className="text-2xl font-bold font-headline mb-4">Station-wise KOT</h3>
                                <p className="text-on-surface-variant">Route orders directly to kitchen stations. Minimize errors and maximize speed.</p>
                            </div>
                            {/* Table Management */}
                            <div className="md:col-span-8 bg-surface-container-high p-10 rounded-2xl shadow-sm flex items-center gap-8">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold font-headline mb-4">Table Management</h3>
                                    <p className="text-on-surface-variant">Visual floor plans, reservation tracking, and live table status indicators for peak efficiency.</p>
                                </div>
                                <div className="hidden sm:block w-1/2 h-40 bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/10">
                                    <div className="grid grid-cols-3 gap-2 h-full">
                                        <div className="bg-primary/20 rounded-lg animate-pulse"></div>
                                        <div className="bg-primary rounded-lg"></div>
                                        <div className="bg-primary/10 rounded-lg"></div>
                                        <div className="bg-primary rounded-lg"></div>
                                        <div className="bg-primary/40 rounded-lg"></div>
                                        <div className="bg-primary/10 rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick & Simple Operations */}
                <section className="py-24 bg-surface overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="relative">
                                <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-tr from-primary/10 to-transparent blur-3xl scale-150"></div>
                                <div className="relative glass-card border border-outline-variant/15 p-2 rounded-2xl">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYqFHxhkcy4M5g1LlTtlNFwSwVV90yvrGWqMRZp0-IyweM7lAhOMVhYUnBEq-u-VrCoCgdLZ9O2NEaG2jOnIvF_Gr0RM7E-K-zNWWSB4cMTC5gl5mPHM0BmvIrYBr7StTPoh5JsZ_QN-y4884_tgTTSiux2-M-3aAOH8bILUNjya6QC_0od3v0LZvDSkPePZVeCQcMPibqsQcZWlIYD7milzsPWXgc5X1cx-HZ66hcLWDZLHG4VV30jgWoOzQwkDhOQ9A-SjfySAI"
                                        alt="Ease of use"
                                        className="rounded-xl shadow-lg"
                                    />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-4xl md:text-5xl font-extrabold font-headline mb-8 tracking-tight">Quick &amp; simple.<br /><span className="text-primary">Zero learning curve.</span></h2>
                                <div className="space-y-10">
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-primary">speed</span>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold font-headline mb-2">Instant Setup</h4>
                                            <p className="text-on-surface-variant leading-relaxed">Go live in less than 30 minutes with our pre-configured menu templates and intuitive UI.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-primary">touch_app</span>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold font-headline mb-2">3-Click Billing</h4>
                                            <p className="text-on-surface-variant leading-relaxed">Minimize queues with our streamlined checkout flow designed for high-volume environments.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ecosystem Section */}
                <section className="py-24 bg-surface-container-low">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-bold font-headline mb-4">Do a lot more</h2>
                            <p className="text-on-surface-variant">The POS is just the beginning. Unlock the full potential of your business.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Inventory */}
                            <div className="group p-8 bg-surface-container-lowest rounded-2xl hover:shadow-2xl transition-all duration-500">
                                <div className="mb-6 w-14 h-14 bg-blue-50 text-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined filled">inventory_2</span>
                                </div>
                                <h4 className="text-2xl font-bold font-headline mb-3">Inventory Management</h4>
                                <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">Track every gram of raw material. Automate purchase orders and manage central kitchens effortlessly.</p>
                                <a className="text-primary font-bold text-sm flex items-center gap-2 group-hover:underline" href="#">
                                    Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                            {/* Online Ordering */}
                            <div className="group p-8 bg-surface-container-lowest rounded-2xl hover:shadow-2xl transition-all duration-500">
                                <div className="mb-6 w-14 h-14 bg-blue-50 text-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined filled">shopping_cart</span>
                                </div>
                                <h4 className="text-2xl font-bold font-headline mb-3">Online Order Management</h4>
                                <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">Manage Zomato, Swiggy, and direct orders from a single dashboard. Real-time menu updates across all channels.</p>
                                <a className="text-primary font-bold text-sm flex items-center gap-2 group-hover:underline" href="#">
                                    Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                            {/* CRM */}
                            <div className="group p-8 bg-surface-container-lowest rounded-2xl hover:shadow-2xl transition-all duration-500">
                                <div className="mb-6 w-14 h-14 bg-blue-50 text-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined filled">group</span>
                                </div>
                                <h4 className="text-2xl font-bold font-headline mb-3">CRM &amp; Loyalty</h4>
                                <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">Understand customer behavior. Run targeted SMS campaigns and personalized loyalty programs.</p>
                                <a className="text-primary font-bold text-sm flex items-center gap-2 group-hover:underline" href="#">
                                    Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Social Proof */}
                <section className="py-24 bg-surface">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="bg-primary rounded-3xl p-12 md:p-20 text-on-primary relative overflow-hidden flex flex-col items-center text-center">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                            <h2 className="text-4xl md:text-6xl font-extrabold font-headline mb-8 relative z-10">75,000+ happy customers</h2>
                            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mb-12 relative z-10 font-medium">Join the largest community of food entrepreneurs in India and revolutionize your operations today.</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-4xl relative z-10">
                                <div>
                                    <div className="text-4xl font-bold mb-1">150+</div>
                                    <div className="text-sm opacity-70 uppercase tracking-widest font-bold">Cities</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold mb-1">20M+</div>
                                    <div className="text-sm opacity-70 uppercase tracking-widest font-bold">Monthly Orders</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold mb-1">99.9%</div>
                                    <div className="text-sm opacity-70 uppercase tracking-widest font-bold">Uptime</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold mb-1">24/7</div>
                                    <div className="text-sm opacity-70 uppercase tracking-widest font-bold">Support</div>
                                </div>
                            </div>
                            <button className="mt-16 bg-white text-primary px-10 py-4 rounded-md font-bold text-lg hover:shadow-2xl transition-all active:scale-95">Get Started Now</button>
                        </div>
                    </div>
                </section>
            </main>
        </PossLayout>
    );
};

export default Poss;
