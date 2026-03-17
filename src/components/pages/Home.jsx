import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
const Home = () => {
    return (
        <div className="bg-background text-on-surface font-body">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center px-3 py-1 bg-primary-fixed text-on-primary-fixed-variant rounded-full text-xs font-bold tracking-wider uppercase">
                                New Version 2.0 Live
                            </div>
                            <h1 className="font-headline text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                                Architecting the <span className="text-primary">Future</span> of Workflow.
                            </h1>
                            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
                                Eliminate the friction of disconnected tools. Our platform provides a unified architectural glass through which your entire enterprise operates.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button className="px-8 py-4 bg-linear-to-br from-primary to-primary-container text-on-primary rounded-xl font-bold ambient-shadow hover:scale-[1.02] transition-transform">
                                    Start Free Trial
                                </button>
                                <button className="px-8 py-4 bg-surface-container-highest text-on-surface rounded-xl font-bold hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>play_circle</span>
                                    Watch Demo
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-[2.5rem] hero-gradient p-8 overflow-hidden ambient-shadow relative">
                                <img alt="Dashboard interface preview" className="w-full h-full object-cover rounded-2xl mix-blend-overlay opacity-60" data-alt="Modern high tech dashboard interface on blue background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2n4NWePAbdvYV0aGlDK750j2WzZnPFF_3_CljOoko76dwjZowPmti6mz-RT8M0-FVmcGmoLo4pqxz4AI5GqXe2uIAhoFm4YFRHn1wyvsnAZXhkgfW4IYnXqD80ClBYnsUS8omE1YF5-tqgOBWfiCQHtmKbwihu6MwXPWjtswvIEOQyI3w7pk7ahfOPfhf_WjpZNj0RrsHSuLG65CLul035V9RChGTXkCbvijOon5uyhuXdKBN-O3Bqn9oXrTRLJd1MAlzaWOOcls" />
                                <div className="absolute inset-0 flex items-center justify-center p-12">
                                    <div className="w-full h-full bg-surface-container-lowest/70 backdrop-blur-xl rounded-2xl ambient-shadow p-6">
                                        <div className="flex gap-2 mb-6">
                                            <div className="w-3 h-3 rounded-full bg-error/20"></div>
                                            <div className="w-3 h-3 rounded-full bg-secondary-container/20"></div>
                                            <div className="w-3 h-3 rounded-full bg-primary/20"></div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="h-4 bg-surface-container-high rounded-full w-3/4"></div>
                                            <div className="h-4 bg-surface-container-high rounded-full w-1/2"></div>
                                            <div className="grid grid-cols-3 gap-3 pt-4">
                                                <div className="h-24 bg-primary/10 rounded-xl"></div>
                                                <div className="h-24 bg-primary/10 rounded-xl"></div>
                                                <div className="h-24 bg-primary/10 rounded-xl"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Accent element */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-container/30 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </section>
                {/* Features Bento Grid */}
                <section className="py-24 bg-surface-container-low px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16">
                            <h2 className="font-headline text-3xl lg:text-5xl font-bold mb-6">Engineered for Precision.</h2>
                            <p className="text-on-surface-variant max-w-2xl">We focus on the infrastructure so you can focus on the innovation. Built with the speed of architectural glass and the strength of steel.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Large Feature */}
                            <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-3xl ambient-shadow flex flex-col justify-between min-h-[400px]">
                                <div>
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                                        <span className="material-symbols-outlined" data-icon="analytics">analytics</span>
                                    </div>
                                    <h3 className="font-headline text-2xl font-bold mb-4">Deep Inset Analytics</h3>
                                    <p className="text-on-surface-variant max-w-md">Real-time data synchronization across all your global endpoints with zero latency overhead.</p>
                                </div>
                                <div className="mt-8 pt-8 border-t border-outline-variant/10">
                                    <div className="flex gap-4 overflow-x-auto pb-2">
                                        <div className="px-4 py-2 bg-surface-container rounded-lg text-xs font-semibold">Active Monitoring</div>
                                        <div className="px-4 py-2 bg-surface-container rounded-lg text-xs font-semibold">SQL Integration</div>
                                        <div className="px-4 py-2 bg-surface-container rounded-lg text-xs font-semibold">Custom Hooks</div>
                                    </div>
                                </div>
                            </div>
                            {/* Small Feature 1 */}
                            <div className="bg-linear-to-br from-primary to-primary-container p-10 rounded-3xl text-on-primary flex flex-col justify-center">
                                <span className="material-symbols-outlined text-4xl mb-6" data-icon="security" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                                <h3 className="font-headline text-2xl font-bold mb-4">Vault Security</h3>
                                <p className="opacity-80">Military-grade encryption layered within our proprietary glass architecture.</p>
                            </div>
                            {/* Small Feature 2 */}
                            <div className="bg-surface-container-highest p-10 rounded-3xl flex flex-col justify-center">
                                <span className="material-symbols-outlined text-4xl mb-6 text-primary" data-icon="bolt">bolt</span>
                                <h3 className="font-headline text-2xl font-bold mb-4">Instant Sync</h3>
                                <p className="text-on-surface-variant">Changes propagate through your entire network in under 40ms.</p>
                            </div>
                            {/* Medium Feature */}
                            <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-3xl ambient-shadow flex flex-col md:flex-row gap-10 items-center">
                                <div className="flex-1">
                                    <h3 className="font-headline text-2xl font-bold mb-4">Collaborative Layering</h3>
                                    <p className="text-on-surface-variant mb-6">Built for teams who value clarity. Multiple layers of visibility control ensure everyone sees exactly what they need.</p>
                                    <a className="text-primary font-bold flex items-center gap-2" href="#">
                                        Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </a>
                                </div>
                                <div className="flex-1 w-full h-48 bg-surface-container rounded-2xl overflow-hidden">
                                    <img alt="Team collaborating" className="w-full h-full object-cover" data-alt="Modern professional team collaborating in a bright glass office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwm04qMnRfXL_VeQnvFn3GHFtQvFPKG18Ht_jY1310J1AguPtbatkbJ7Zfrn5cmw4v8sOFTxKkHXZvf4WNA81ghGUwD8esVwm0iaSmFH24TZ7nlLPEByO4WtEFz0LAHwAN3LbthCCAgTcxGZot_X8mcY9zr9WanykuLHiR_tmDdLFt4Dtq1gQO2FCLoQ6DY74hyTemgpKFPweTo-ATv9NHHyz6rsBBktTkP_EYwR6VB27rv7dnz_EwmfmpO0w08GT2jPccUOePDAg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Testimonial Section */}
                <section className="py-24 px-6 relative overflow-hidden">
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <span className="material-symbols-outlined text-6xl text-primary/20 mb-8" data-icon="format_quote" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                        <h2 className="font-headline text-3xl lg:text-4xl font-bold italic leading-snug mb-12">
                            &quot;The shift to NYSLEARNERS was like moving from a dark room to a building made of architectural glass. Everything is clearer, faster, and more intentional.&quot;
                        </h2>
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full border-4 border-surface-container-lowest overflow-hidden mb-4 ambient-shadow">
                                <img alt="Executive profile" className="w-full h-full object-cover" data-alt="Close up portrait of a professional male executive smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr2PbDcsdgEfHbLIxAuuzOfb61krWblQNmpRRIYoFHE0KiKHE3c8HuLta804guKy6ChZMfuLCBLftcsgPlcXpPQaWi3SSVvzeQoTxmbCBfCNHg6l7Eq4cu5JXZMNn4Ji3K6BlAMIz8Rq89UHZdsPAqhpETtvcjjpj880zTLQ-bPB1XG5v4qI_R2vd5f5OOJMEGn7J0rAw-3Du0H8eLvwGFXaPjN__iGX5BC1aUx6wF-RfQILi5mXU2_l2dIHyvPOrTwDzAI7W7o98" />
                            </div>
                            <p className="font-bold text-lg">Marcus Chen</p>
                            <p className="text-on-surface-variant text-sm">CTO, Global Tech Dynamics</p>
                        </div>
                    </div>
                    {/* Decorative Background Element */}
                    <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2"></div>
                    <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary-container/5 rounded-full blur-[100px] -translate-y-1/2"></div>
                </section>
                {/* CTA Section */}
                <section className="pb-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-center text-on-primary hero-gradient relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="font-headline text-4xl lg:text-6xl font-extrabold mb-8 tracking-tight">Ready to build on better foundations?</h2>
                                <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">Join over 1,500 companies who have redefined their digital workflow with our architectural approach.</p>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <button className="px-10 py-5 bg-surface-container-lowest text-primary rounded-xl font-extrabold text-lg ambient-shadow hover:scale-105 transition-transform">
                                        Get Started Now
                                    </button>
                                    <button className="px-10 py-5 border-2 border-on-primary/20 text-on-primary rounded-xl font-extrabold text-lg hover:bg-on-primary/10 transition-colors">
                                        Talk to Sales
                                    </button>
                                </div>
                            </div>
                            {/* Abstract Glass Shards */}
                            <div className="absolute top-0 right-0 w-96 h-full bg-white/5 skew-x-[-20deg] translate-x-32 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-full bg-white/5 skew-x-[-20deg] -translate-x-32 pointer-events-none"></div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default Home