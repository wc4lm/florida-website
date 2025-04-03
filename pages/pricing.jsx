export default function Pricing() {
    return (
        <div className="w-full my-10 text-white">
            <h1 className="text-4xl font-extrabold text-center">Florida Premium</h1>
            <p className="text-center text-gray-400 mt-2">Powerful & Reliable. Secure The Future of Discord security automations.</p>

            <div className="lg:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                
                {/* Sentinel Plan */}
                <div className="bg-neutral-900/80 p-6 rounded-xl border border-neutral-700">
                    <h2 className="text-2xl font-bold">🛡 Sentinel</h2>
                    <p className="text-gray-400">1 Server</p>
                    <p className="text-xl font-semibold text-amber-400 mt-2">₹255 <span className="text-gray-400">/month</span></p>
                    <p className="text-gray-400 mt-1">Essential protection for your server</p>
                    <ul className="mt-4 space-y-2 text-gray-300">
                        <li>✔ Unlimited Custom Limits</li>
                        <li>✔ Unlimited Whitelists</li>
                        <li>✔ Owner Features</li>
                        <li>✔ Premium Bot Access</li>
                        <li>✔ Premium Servers</li>
                        <li>✔ VIP Perks</li>
                    </ul>
                    <a href="https://discord.com/invite/8SGBpdBhCq" target="_blank" rel="noopener noreferrer">
                        <button className="w-full mt-5 border border-white text-white py-2 rounded-md hover:bg-gray-200 hover:text-black">
                            Upgrade to Sentinel
                        </button>
                    </a>
                </div>

                {/* Guardian Plan */}
                <div className="bg-neutral-900/80 p-6 rounded-xl border border-neutral-700 relative">
                    <div className="absolute top-2 right-2 bg-white text-black text-xs px-2 py-1 rounded-md">Most Popular</div>
                    <h2 className="text-2xl font-bold">👑 Guardian</h2>
                    <p className="text-gray-400">5 Servers</p>
                    <p className="text-xl font-semibold text-amber-400 mt-2">₹596 <span className="text-gray-400">/month</span></p>
                    <p className="text-gray-400 mt-1">Advanced security for multiple servers</p>
                    <ul className="mt-4 space-y-2 text-gray-300">
                        <li>✔ Unlimited Custom Limits</li>
                        <li>✔ Unlimited Whitelists</li>
                        <li>✔ Owner Features</li>
                        <li>✔ Premium Bot Access</li>
                        <li>✔ Premium Servers</li>
                        <li>✔ VIP Perks</li>
                    </ul>
                    <a href="https://discord.com/invite/8SGBpdBhCq" target="_blank" rel="noopener noreferrer">
                        <button className="w-full mt-5 bg-white text-black py-2 rounded-md hover:bg-gray-200">
                            Upgrade to Guardian
                        </button>
                    </a>
                </div>

                {/* Custom Bot Plan */}
                <div className="bg-neutral-900/80 p-6 rounded-xl border border-neutral-700 relative">
                    <div className="absolute top-2 right-2 bg-blue-500 text-xs px-2 py-1 rounded-md">Ultimate Protection</div>
                    <h2 className="text-2xl font-bold">🤖 Custom Bot</h2>
                    <p className="text-gray-400">∞ Servers</p>
                    <p className="text-xl font-semibold text-amber-400 mt-2">₹853 <span className="text-gray-400">/month</span></p>
                    <p className="text-gray-400 mt-1">Your own dedicated security solution</p>
                    <ul className="mt-4 space-y-2 text-gray-300">
                        <li>✔ Dedicated Security Bot</li>
                        <li>✔ Unlimited Everything</li>
                        <li>✔ Owner Features</li>
                        <li>✔ Enterprise Servers</li>
                        <li>✔ Direct Developer Access</li>
                    </ul>
                    <a href="https://discord.com/invite/8SGBpdBhCq" target="_blank" rel="noopener noreferrer">
                        <button className="w-full mt-5 border border-white text-white py-2 rounded-md hover:bg-gray-200 hover:text-black">
                            Upgrade to Custom Bot
                        </button>
                    </a>
                </div>

            </div>

            <div className="text-center mt-10">
                <p className="text-gray-400">Ready to elevate your Discord experience?</p>
                <a href="https://discord.com/invite/8SGBpdBhCq" target="_blank" rel="noopener noreferrer">
                    <button className="mt-3 px-5 py-2 bg-amber-500 rounded-md text-black font-semibold hover:bg-amber-600">
                        Get Premium
                    </button>
                </a>
            </div>
        </div>
    );
}
