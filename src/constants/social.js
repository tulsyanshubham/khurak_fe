const { contactInfo } = require("./footer_data");

export const socialData = [
    {
        containerClass: "col-span-1 lg:col-span-2 h-full bg-pink-500 min-h-[500px] lg:min-h-[300px]",
        heading: "Follow Khuraak on Instagram",
        description: "Stay updated with our latest healthy recipes and vibrant food photography. Join our community of food lovers!",
        imageSrc: "/images/social/instagram_light.jpg",
        imageAlt: "Instagram preview",
        imageClassName: "absolute lg:-right-[22%] top-10 object-contain rounded-2xl",
        link: contactInfo.social.instagram,
    },
    {
        containerClass: "col-span-1 bg-blue-800 min-h-[300px] xl:min-h-[300px]",
        heading: "Connect with Khuraak on LinkedIn",
        description: "Discover how Khuraak is revolutionizing healthy eating. Learn about our mission, vision, and growth opportunities.",
        imageSrc: "",
        imageAlt: "LinkedIn preview",
        imageClassName: "absolute -right-6 lg:-right-[15%] -bottom-10 object-contain rounded-xl",
        link: contactInfo.social.linkedin,
    },
    {
        containerClass: "col-span-1 bg-red-500 min-h-[300px]",
        heading: "Explore Khuraak on Pinterest",
        description: "Discover a treasure trove of beautifully curated healthy recipes and meal-planning ideas to inspire your cooking journey.",
        imageSrc: "",
        imageAlt: "Pinterest preview",
        imageClassName: "absolute -right-8 lg:-right-[20%] -bottom-10 object-contain rounded-xl",
        link: contactInfo.social.pinterest,
    },
    {
        containerClass: "col-span-1 bg-blue-700 lg:col-span-2 min-h-[300px]",
        heading: "Like Khuraak on Facebook",
        description: "Connect with our vibrant community, share your favorite recipes, and join discussions about mindful eating.",
        imageSrc: "/images/social/facebook.jpg",
        imageAlt: "Facebook preview",
        imageClassName: "absolute -right-6 md:-right-[20%] lg:-right-[12%] top-10 object-contain rounded-lg",
        link: contactInfo.social.facebook
    },
    {
        containerClass: "col-span-1 lg:col-span-2 bg-red-600 min-h-[500px] lg:min-h-[300px]",
        heading: "Subscribe to Khuraak on YouTube",
        description: "Watch step-by-step tutorials for delicious healthy meals and tips for maintaining a balanced diet.",
        imageSrc: "/images/social/youtube_light.jpg",
        imageAlt: "YouTube preview",
        imageClassName: "absolute -right-4 lg:-right-[12%] filter drop-shadow-xl top-10 object-contain rounded-2xl",
        link: contactInfo.social.youtube
    },
    {
        containerClass: "col-span-1 min-h-[300px] bg-blue-500",
        heading: "Follow Khuraak on X (Twitter)",
        description: "Get quick updates, healthy tips, and join trending conversations about clean eating and a balanced lifestyle.",
        imageSrc: "",
        imageAlt: "X preview",
        imageClassName: "absolute -right-10 filter contrast-125 -bottom-10 object-contain rounded-xl",
        link: contactInfo.social.twitter
    },
];