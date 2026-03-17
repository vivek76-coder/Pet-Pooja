const Footer = () => {
    return (
        <>
            {/* Footer */}
            <footer className="bg-surface-container-lowest py-16 px-6 border-t border-outline-variant/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="md:col-span-2">
                            <span className="font-headline font-extrabold text-2xl tracking-tight text-primary mb-6 block">NYSLEARNERS</span>
                            <p className="text-on-surface-variant max-w-sm leading-relaxed">
                                Leading the transition toward high-end digital environments through intentional design and architectural engineering.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 text-on-surface">Company</h4>
                            <ul className="space-y-4">
                                <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                                <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a></li>
                                <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 text-on-surface">Connect</h4>
                            <div className="flex gap-4">
                                <a className="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" href="#">
                                    <span className="material-symbols-outlined text-lg">public</span>
                                </a>
                                <a className="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" href="#">
                                    <span className="material-symbols-outlined text-lg">share</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-sm text-on-surface-variant">© 2024 NYSLEARNERS Inc. All rights reserved.</p>
                        <div className="flex gap-8 text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                            <span>London</span>
                            <span>New York</span>
                            <span>Singapore</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer