interface SiteConfig {
  name: string;
  description: string;
  url: string;
  links: {
    facebook: string;
    instagram: string;
    whatsapp: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  services: {
    title: string;
    description: string;
    icon: string;
  }[];
}

const siteConfig: SiteConfig = {
  name: "Mehta Graphics",
  description: "Premium Custom Printing Solutions - Laptop Skins, Mobile Covers, Stickers & Custom T-Shirts",
  url: "https://mehtagraphics.com",
  links: {
    facebook: "https://facebook.com/mehtagraphics",
    instagram: "https://instagram.com/mehtagraphics",
    whatsapp: "https://wa.me/+91XXXXXXXXXX",
  },
  contact: {
    phone: "+91 XXXXX XXXXX",
    email: "contact@mehtagraphics.com",
    address: "Your Business Address, City, State, India"
  },
  services: [
    {
      title: "Custom Laptop Skins",
      description: "Personalized high-quality vinyl skins for all laptop models with professional installation",
      icon: "laptop",
    },
    {
      title: "Mobile Covers & Skins",
      description: "Custom designed protective cases and skins for all smartphone brands",
      icon: "smartphone",
    },
    {
      title: "Custom Stickers",
      description: "Premium quality stickers with lamination for durability and professional finish",
      icon: "sticker",
    },
    {
      title: "T-Shirt Printing",
      description: "Custom t-shirt printing with high-quality materials and long-lasting prints",
      icon: "tshirt",
    },
  ],
};

export default siteConfig;
