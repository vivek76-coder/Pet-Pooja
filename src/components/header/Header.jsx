const Header = () => {
    return (
        <>
            {/* TopNavBar */}
            <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-16 flex items-center px-6 lg:px-12">
                <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
                    <div className="flex items-center gap-8">
                        <span className="font-headline font-extrabold text-xl tracking-tight text-primary">NYSLEARNERS</span>
                        <div className="hidden md:flex items-center gap-6">
                            <a className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors" href="#">Product</a>
                            <a className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors" href="#">Features</a>
                            <a className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors" href="#">Pricing</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="px-5 py-2.5 bg-linear-to-br from-primary to-primary-container text-on-primary rounded-xl text-sm font-semibold hover:opacity-90 transition-all">
                            Get Started
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header