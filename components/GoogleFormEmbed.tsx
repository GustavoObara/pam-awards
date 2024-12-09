const GoogleFormEmbed = () => {
    return (
        <div className="bg-zinc-50 rounded p-3">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf9mrLKSJPZF2tUPGAh7Yde53fGCu-Ib6Bv7K9Ak4qOBqntiQ/viewform?embedded=true" 
                width="" 
                height="730" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="min-w-[380px] sm:min-w-[630px]"
            >
                Carregando…
            </iframe>
        </div>
    );
};

export default GoogleFormEmbed;