import {
    people01,
    people02,
    people03,
    facebook,
    instagram,
    linkedin,
    twitter,
    airbnb,
    binance,
    coinbase,
    dropbox,
    send,
    shield,
    star
} from "../assets";
import CardDeal from "../components/CardDeal.jsx";

export const navLinks = [
    {
        id: "home",
        title: "Home",
        titlefa: "خانه"
    },
    {
        id: "features",
        title: "Features",
        titlefa: "امکانات"
    },
    {
        id: "product",
        title: "Product",
        titlefa: "محصولات"
    },
    {
        id: "clients",
        title: "Clients",
        titlefa: "مشتریان"
    },
];

export const features = [
    {
        id: "feature-1",
        icon: star,
        title: "Rewards",
        content:
            "The best credit cards offer some tantalizing combinations of promotions and prizes",
        titlefa: "جوایز",
        contentfa:
            "بهترین کارت های اعتباری ترکیبی از تبلیغات و جوایز وسوسه انگیز را ارائه می دهند",
    },
    {
        id: "feature-2",
        icon: shield,
        title: "100% Secured",
        content:
            "We take proactive steps make sure your information and transactions are secure.",
        titlefa: "100% امن",
        contentfa:
            "ما اقدامات پیشگیرانه ای انجام می دهیم تا مطمئن شویم اطلاعات و تراکنش های شما ایمن هستند.",
    },
    {
        id: "feature-3",
        icon: send,
        title: "Balance Transfer",
        content:
            "A balance transfer credit card can save you a lot of money in interest charges.",
        titlefa: "انتقال متعادل",
        contentfa:
            "کارت اعتباری انتقال موجودی می تواند پول زیادی را در هزینه های بهره صرفه جویی کند.",
    },
];

export const feedback = [
    {
        id: "feedback-1",
        content:
            "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
        name: "Herman Jensen",
        namefa: "هرمان جنسن",
        title: "Founder & Leader",
        img: people01,
        contentfa:
            "پول فقط یک ابزار است. شما را به هر کجا که بخواهید می برد، اما جایگزین شما به عنوان راننده نخواهد شد.",
        titlefa: "بنیانگذار و رهبر",
    },
    {
        id: "feedback-2",
        content:
            "Money makes your life easier. If you're lucky to have it, you're lucky.",
        name: "Steve Mark",
        namefa: "استیو مارک",
        title: "Founder & Leader",
        img: people02,
        contentfa:
            "پول زندگی شما را آسان تر می کند. اگر خوش شانس هستید که آن را دارید، خوش شانس هستید.",
        titlefa: "بنیانگذار و رهبر",
    },
    {
        id: "feedback-3",
        content:
            "It is usually people in the money business, finance, and international trade that are really rich.",
        name: "Kenn Gallagher",
        namefa: "کن گالاگر",
        title: "Founder & Leader",
        img: people03,
        contentfa:
            "معمولاً این افراد در تجارت پول، امور مالی و تجارت بین‌المللی هستند که واقعاً ثروتمند هستند.",
        titlefa: "بنیانگذار و رهبر",
    },
];

export const stats = [
    {
        id: "stats-1",
        title: "User Active",
        value: "3800+",
        titlefa: "مشترک فعال",
    },
    {
        id: "stats-2",
        title: "Trusted by Company",
        value: "230+",
        titlefa: "معتمد",
    },
    {
        id: "stats-3",
        title: "Transaction",
        value: "$230M+",
        titlefa: "تراکنش",
    },
];

export const footerLinks = [
    {
        title: "Useful Links",
        titlefa: "لینک های مرتبط",
        links: [
            {
                name: "Content",
                namefa: "محتوا",
                link: "https://www.hoobank.com/content/",
            },
            {
                name: "How it Works",
                namefa: "چگونه کار میکند",
                link: "https://www.hoobank.com/how-it-works/",
            },
            {
                name: "Create",
                namefa: "ایجاد",
                link: "https://www.hoobank.com/create/",
            },
            {
                name: "Explore",
                namefa: "جستجو",
                link: "https://www.hoobank.com/explore/",
            },
            {
                name: "Terms & Services",
                namefa: "شرایط و خدمات",
                link: "https://www.hoobank.com/terms-and-services/",
            },
        ],
    },
    {
        title: "Community",
        titlefa: "ارتباطات",
        links: [
            {
                name: "Help Center",
                namefa: "مرکز تماس",
                link: "https://www.hoobank.com/help-center/",
            },
            {
                name: "Partners",
                namefa: "شرکا",
                link: "https://www.hoobank.com/partners/",
            },
            {
                name: "Suggestions",
                namefa: "پیشنهادات",
                link: "https://www.hoobank.com/suggestions/",
            },
            {
                name: "Blog",
                namefa: "بلاگ",
                link: "https://www.hoobank.com/blog/",
            },
            {
                name: "Newsletters",
                namefa: "روزنامه",
                link: "https://www.hoobank.com/newsletters/",
            },
        ],
    },
    {
        title: "Partner",
        titlefa: "شرکا",
        links: [
            {
                name: "Our Partner",
                namefa: "شرکای ما",
                link: "https://www.hoobank.com/our-partner/",
            },
            {
                name: "Become a Partner",
                namefa: "با شریک شوید",
                link: "https://www.hoobank.com/become-a-partner/",
            },
        ],
    },
];

export const socialMedia = [
    {
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/",
    },
    {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/",
    },
    {
        id: "social-media-3",
        icon: twitter,
        link: "https://www.twitter.com/",
    },
    {
        id: "social-media-4",
        icon: linkedin,
        link: "https://www.linkedin.com/",
    },
];

export const clients = [
    {
        id: "client-1",
        logo: airbnb,
    },
    {
        id: "client-2",
        logo: binance,
    },
    {
        id: "client-3",
        logo: coinbase,
    },
    {
        id: "client-4",
        logo: dropbox,
    },
];
export const HeroContent = [
    {
        content: "Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.",
        contentfa: "تیم کارشناسان ما از روشی برای شناسایی کارت های اعتباری که به احتمال زیاد مطابق با نیازهای شما هستند، استفاده می کند. ما نرخ های درصد سالانه، هزینه های سالانه را بررسی می کنیم.",
    }
];
export const FounderContent = [
    {
        content: "Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.",
        contentfa: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    }
];
export const BusinessContent = [
    {
        content: "With the right credit card, you can improve your financial life bybuilding credit, earning rewards and saving money. But with hundreds of credit cards on the market.",
        contentfa: "با کارت اعتباری مناسب، می توانید زندگی مالی خود را با ایجاد اعتبار، کسب پاداش و پس انداز پول بهبود بخشید. اما با صدها کارت اعتباری در بازار.",
    }
];
export const CardDealContent = [
    {
        content: "Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.",
        contentfa: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    }
];
export const TestimonialsContent = [
    {
        content: "Everything you need to accept card payments and grow your businessanywhere on the planet.",
        contentfa: "همه چیزهایی که برای پذیرش پرداخت های کارتی و رشد کسب و کار خود نیاز دارید و در هر نقطه از کره زمین.",
    }
];
export const CtaContent = [
    {
        content: "Let’s try our service now!",
        contentfa: "همین حالا خدمات مارا استفاده کنید!",
    },
    {
        content: "Everything you need to accept card payments and grow your business anywhere on the planet.",
        contentfa: "همه چیزهایی که برای پذیرش پرداخت های کارتی و رشد کسب و کار خود نیاز دارید و در هر نقطه از کره زمین.",
    },
];
export const FooterContent = [
    {
        content: "A new way to make the payments easy, reliable and secure.",
        contentfa: "روشی جدید برای آسان کردن، قابل اطمینان و ایمن کردن پرداخت ها.",
    },
    {
        content: "2021 Hoobank. All Rights Reserved.",
        contentfa: "تمامی حقوق این سایت برای هو بانک محفوظ می باشد 2021",
    },
];