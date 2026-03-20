import React from 'react';

const PossLayout = ({ children }) => {
    return (
        <div className="bg-surface font-body text-on-surface antialiased">
            {/* TopNavBar */}
            <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,74,198,0.06)]">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="text-2xl font-bold text-slate-900 font-headline tracking-tight">Petpooja</div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a className="text-slate-600 hover:text-blue-600 transition-colors font-manrope font-medium" href="#">Features</a>
                        <a className="text-slate-600 hover:text-blue-600 transition-colors font-manrope font-medium" href="#">Inventory</a>
                        <a className="text-slate-600 hover:text-blue-600 transition-colors font-manrope font-medium" href="#">Online Ordering</a>
                        <a className="text-slate-600 hover:text-blue-600 transition-colors font-manrope font-medium" href="#">Reports</a>
                        <a className="text-slate-600 hover:text-blue-600 transition-colors font-manrope font-medium" href="#">Pricing</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="bg-primary text-on-primary px-6 py-2.5 rounded-md font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/20">
                            Book a Demo
                        </button>
                    </div>
                </div>
            </nav>

            { children }

            {/* Footer */}
            <footer className="w-full py-12 bg-slate-50 dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <div className="text-lg font-bold text-slate-900 dark:text-white mb-6 font-headline">Petpooja</div>
                            <p className="text-slate-500 text-xs leading-relaxed max-w-xs">Leading restaurant management software providing holistic solutions for F&amp;B businesses of all sizes.</p>
                        </div>
                        <div>
                            <h5 className="text-sm font-bold mb-6 text-on-surface uppercase tracking-wider">Product</h5>
                            <ul className="space-y-4">
                                <li><a className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-manrope" href="#">Inventory Management</a></li>
                                <li><a className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-manrope" href="#">Online Ordering</a></li>
                                <li><a className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-manrope" href="#">Petpooja Pay</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-sm font-bold mb-6 text-on-surface uppercase tracking-wider">Company</h5>
                            <ul className="space-y-4">
                                <li><a className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-manrope" href="#">About Us</a></li>
                                <li><a className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-manrope" href="#">Contact Us</a></li>
                                <li><a className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-manrope" href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-sm font-bold mb-6 text-on-surface uppercase tracking-wider">Legal</h5>
                            <ul className="space-y-4">
                                <li><a className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-manrope" href="#">Privacy Policy</a></li>
                                <li><a className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-manrope" href="#">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-slate-500 text-sm font-manrope">© 2024 Petpooja. All rights reserved.</div>
                        <div className="flex gap-6">
                            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-xl">share</span></a>
                            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-xl">public</span></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PossLayout;
