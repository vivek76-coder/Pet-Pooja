import React from 'react';
import PossLayout from '../PossLayout.jsx'
const Billing = () => {
    return (
        <PossLayout>
            <main>
                {/* Hero Section */}
                <section className="relative pt-24 pb-32 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                        <div className="z-10">
                            <span className="inline-block py-1 px-3 mb-6 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-xs font-bold tracking-widest uppercase">The Industry Standard</span>
                            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-8 leading-[1.1]">
                                Restaurant billing software that is <span className="text-primary italic">10x faster.</span>
                            </h1>
                            <p className="text-lg text-on-surface-variant mb-10 max-w-md leading-relaxed">
                                The ultimate POS built for speed, accuracy, and operational excellence. Powering thousands of outlets globally.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="hero-gradient px-8 py-4 text-base font-bold text-on-primary rounded-md shadow-xl hover:scale-[1.02] transition-transform">Take a free demo</button>
                                <button className="px-8 py-4 text-base font-bold text-on-surface bg-surface-container-lowest rounded-md ambient-shadow border border-outline-variant/10">View Pricing</button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                            <div className="relative bg-surface-container-lowest p-4 rounded-xl ambient-shadow transform md:rotate-2 border border-outline-variant/5">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk6FC9KeAkHtx95nblJUVT2fc6npHKh_pFUYe6RK1g6VWv2-2Kfh_wvCs8UaIo6txJkG7SNjIvLwt4Mbu01CxjwadFHrmVNwvcLwEhUkxmNclV2jyKRsIC9hYCYXgK3RX8zqOv3S7BLbfObE5SDoorNUft6bjFfXXwcWqGz5R_VwwTgjtwTTpCjiS23c8_-5XkaY-WgTpZxHySL9qAJp5SwAzZbfYluwvs06hxuLAwD8D1H1pUiYlAqs0UGsdwyIJbhjxFD70dgpo"
                                    alt="Petpooja POS Interface"
                                    className="rounded-lg w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-surface-container-highest p-6 rounded-xl ambient-shadow max-w-[240px]">
                                <p className="text-xs font-bold text-primary mb-2 tracking-widest uppercase">Real-time Stats</p>
                                <p className="text-2xl font-headline font-extrabold text-on-surface">99.9% Uptime</p>
                                <p className="text-xs text-on-surface-variant mt-1">Reliability built for scale.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Highlights: Bento Grid */}
                <section className="py-24 bg-surface-container-low">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-16">
                            <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4">Core Capabilities</h2>
                            <p className="text-on-surface-variant max-w-xl">Every tool you need to manage your restaurant floor, kitchen, and back-office with surgical precision.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
                            <div className="md:col-span-8 bg-surface-container-lowest p-8 rounded-xl ambient-shadow flex flex-col justify-between">
                                <div>
                                    <span className="material-symbols-outlined text-primary text-4xl mb-6">receipt_long</span>
                                    <h3 className="text-2xl font-headline font-bold mb-3">Customizable bill format</h3>
                                    <p className="text-on-surface-variant max-w-sm">Design invoices that match your brand identity. Support for multi-lingual labels and custom branding.</p>
                                </div>
                                <div className="mt-8 flex gap-2">
                                    <div className="h-2 w-12 bg-primary rounded-full"></div>
                                    <div className="h-2 w-4 bg-primary/20 rounded-full"></div>
                                    <div className="h-2 w-4 bg-primary/20 rounded-full"></div>
                                </div>
                            </div>
                            <div className="md:col-span-4 bg-primary-container p-8 rounded-xl ambient-shadow text-on-primary-container">
                                <span className="material-symbols-outlined text-3xl mb-6">print</span>
                                <h3 className="text-2xl font-headline font-bold mb-3">Station-wise KOT</h3>
                                <p className="text-on-primary-container/80">Route orders instantly to specific kitchen sections to eliminate confusion and delay.</p>
                            </div>
                            <div className="md:col-span-4 bg-surface-container-high p-8 rounded-xl ambient-shadow">
                                <span className="material-symbols-outlined text-primary text-3xl mb-6">grid_view</span>
                                <h3 className="text-xl font-headline font-bold mb-3">Table Management</h3>
                                <p className="text-sm text-on-surface-variant">Visual floor plans with real-time table status, mergers, and split-billing support.</p>
                            </div>
                            <div className="md:col-span-8 bg-surface-container-lowest p-8 rounded-xl ambient-shadow flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-1">
                                    <span className="material-symbols-outlined text-primary text-3xl mb-6">percent</span>
                                    <h3 className="text-xl font-headline font-bold mb-3">Taxes &amp; Discounts</h3>
                                    <p className="text-sm text-on-surface-variant">Automate complex tax structures and scheduled promotional discounts effortlessly.</p>
                                </div>
                                <div className="w-full md:w-1/2 bg-surface p-4 rounded-lg border border-outline-variant/10">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Active Rule</span>
                                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] rounded font-bold">LIVE</span>
                                    </div>
                                    <p className="text-sm font-bold">Happy Hour - 20% OFF</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick & Simple Section */}
                <section className="py-32">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4">Quick &amp; Simple Implementation</h2>
                            <p className="text-on-surface-variant max-w-2xl mx-auto">Getting started shouldn't be a chore. We've optimized every step of the onboarding process.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="text-center group">
                                <div className="w-20 h-20 bg-surface-container mx-auto mb-8 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                    <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
                                </div>
                                <h4 className="text-xl font-headline font-bold mb-4">Instant Setup</h4>
                                <p className="text-sm text-on-surface-variant leading-relaxed">Cloud-based architecture means you can be up and running in under 30 minutes with zero local server costs.</p>
                            </div>
                            <div className="text-center group">
                                <div className="w-20 h-20 bg-surface-container mx-auto mb-8 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                    <span className="material-symbols-outlined text-primary text-3xl">touch_app</span>
                                </div>
                                <h4 className="text-xl font-headline font-bold mb-4">Zero Training Required</h4>
                                <p className="text-sm text-on-surface-variant leading-relaxed">An interface so intuitive that your staff can start billing from the very first minute without manual help.</p>
                            </div>
                            <div className="text-center group">
                                <div className="w-20 h-20 bg-surface-container mx-auto mb-8 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                    <span className="material-symbols-outlined text-primary text-3xl">support_agent</span>
                                </div>
                                <h4 className="text-xl font-headline font-bold mb-4">24/7 Human Support</h4>
                                <p className="text-sm text-on-surface-variant leading-relaxed">Real people, real fast. Our support team is available around the clock to ensure your operations never stop.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Social Proof */}
                <section className="py-24 bg-on-surface text-surface">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div>
                                <p className="text-primary-fixed text-sm font-bold tracking-[0.2em] uppercase mb-6">Market Leader</p>
                                <h2 className="font-headline text-6xl font-extrabold tracking-tight mb-8">75,000+</h2>
                                <p className="text-2xl font-headline font-semibold text-surface-variant mb-12">Happy customers worldwide trust Petpooja for their daily operations.</p>
                                <div className="bg-surface-container-low/10 p-8 rounded-xl border border-surface-variant/10">
                                    <p className="text-lg italic text-surface-variant mb-6 leading-relaxed">"Switching to Petpooja was the single best decision for our growth. The speed of billing during peak hours is unmatched."</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-surface-variant/20 overflow-hidden">
                                            <img
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOHsaDhpflG4KcaPX3ZfXxqlC7j3Xqfi_WCCnagZ933yJ1cu4rP1_5qfxDGZKHvy3zcAjAVsnBhKZp456kYKzwyYGuunymyzeunQvmGdMbSk69f2JpOpufdZ7wYVC-Fey8h2upQn6BwMb2M6KHxzocLGrm7cgEX9vc8m-8e8knJJMDWPugCKtWmXul-_53Jj_VoDQZHvaaWX66QGymvBA8fLxA7vwQ1tDv-k2z7v6wr3r_B1Db8Tex-NyOjHbKUJPoKcXve7oA8CE"
                                                alt="Founder Portrait"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-bold text-surface">Founder</p>
                                            <p className="text-sm text-surface-variant">Urban Canteen</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="aspect-square bg-surface-variant/5 rounded-xl border border-surface-variant/5 flex items-center justify-center p-8">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA9ZBqVp3tIBj4UP82DRmQq06PISqsS051Sx_PBKPWuyDOJ6irDxLwgcW2g58LckFXZJfcJ3Bn_9tQnCUw1DAt7A8yrjml1RZK5oLKqufmGH_ynv0ShZHFm1dpgEoUdNwS9L3n_mxKbOQshplFo9plV4_8vypowi_y8MsxnWvOXpoNXrYfJtEW7FOGKHa1z3nOiY1xrgkFePbPa29n9FdYkfhphKHQebIa49AF9M7eTzUcOLXrNDLkRDVpewffDXRQAUTitTfdocs"
                                        alt="Restaurant Partner"
                                        className="w-full h-full object-cover rounded opacity-40 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="aspect-square bg-surface-variant/5 rounded-xl border border-surface-variant/5 flex items-center justify-center p-8 mt-12">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA66ArDvmm-ip-tFxPULTrSCZ0Skz1Qbq2aU9RSp3BTkwae4PwcPE4cI5i_wxIdKl6NM_6ONJJczHXeMyr9htARKLCbAoLSdTqSNBEpy4WKX4HER_kxZx4orD19l29ZIIxhWCFDg3C5qByxxqjSlWDVdZk07HNap2HLjQoJLlPmNhJ4Ktv2qYKsbDYrW62RtQOT1sBiZuaG9_QY9QNs8y7Pe9St073xHCLbXbh2WDwjSWWUMkoqGu_bC-dz5FZfh7s_axJ2LBZjhOw"
                                        alt="Restaurant Partner"
                                        className="w-full h-full object-cover rounded opacity-40 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-32 bg-surface">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="font-headline text-4xl font-extrabold tracking-tight text-center mb-16">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="p-6 bg-surface-container-low rounded-xl">
                                <div className="flex justify-between items-center cursor-pointer">
                                    <h4 className="font-bold text-on-surface">Can I use Petpooja without internet?</h4>
                                    <span className="material-symbols-outlined text-primary">expand_more</span>
                                </div>
                                <p className="mt-4 text-sm text-on-surface-variant leading-relaxed">Yes, Petpooja is designed to work offline. All your data syncs automatically to the cloud as soon as connection is restored.</p>
                            </div>
                            <div className="p-6 bg-surface-container-low rounded-xl">
                                <div className="flex justify-between items-center cursor-pointer">
                                    <h4 className="font-bold text-on-surface">Is hardware included in the demo?</h4>
                                    <span className="material-symbols-outlined text-primary">expand_more</span>
                                </div>
                            </div>
                            <div className="p-6 bg-surface-container-low rounded-xl">
                                <div className="flex justify-between items-center cursor-pointer">
                                    <h4 className="font-bold text-on-surface">Does it support online order integrations?</h4>
                                    <span className="material-symbols-outlined text-primary">expand_more</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-24 px-6">
                    <div className="max-w-5xl mx-auto hero-gradient p-16 rounded-[2rem] text-center text-on-primary shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/5 opacity-20 pointer-events-none"></div>
                        <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-8 relative z-10">Ready to scale your restaurant?</h2>
                        <p className="text-xl text-on-primary/80 mb-12 max-w-2xl mx-auto relative z-10">Join 75,000+ outlets and modernize your billing today. No credit card required for the demo.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                            <button className="bg-surface-container-lowest text-primary px-10 py-5 text-lg font-bold rounded-md shadow-xl hover:scale-[1.05] transition-transform">Schedule a free demo</button>
                            <button className="border-2 border-on-primary/30 hover:bg-on-primary/10 px-10 py-5 text-lg font-bold rounded-md transition-all">Pricing Plans</button>
                        </div>
                    </div>
                </section>
            </main>
        </PossLayout>

    );
};

export default Billing;
