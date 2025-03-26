
export default function Partners() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img width="400" src="/img/florida.png" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Partners
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://discord.com/invite/8SGBpdBhCq">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/attachments/1352225624579637248/1354415390943350804/0f8Bs0G.png?ex=67e53521&is=67e3e3a1&hm=05d1a77071f025f495121d46d836560437cc6b268c9d994e72b7b2423bbf0a0c&" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Elevate Your bot with Google Cloud-Host</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                    Looking for high-performance, secure, and scalable hosting for your Discord bot? Google Cloud-powered hosting, ensuring 24/7 uptime, low latency, and seamless performance. Whether you need hosting for a small bot or a high-traffic multipurpose bot.
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>

                </div>
                <div className="py-10"></div>
        </>
    );
};
