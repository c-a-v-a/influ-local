type SocialName = 'Instagram'|'Facebook'|'TikTok';

type Category = 'Odzież' | 'Restauracje' | 'Rozrywka' | 'Artykuły sportowe' | 'Turystyka';

export interface Social {
    name: SocialName;
    link: string;
};

export interface Company {
    name: string;
    mail: string;
    localization: string;
    icon: string;
    posts: Array<CompanyPost>;
};

export interface Influencer {
    name: string;
    mail: string;
    socialMedia: [Social];
    icon: string;
};

export interface CompanyPost {
    name: string;
    description: string;
    influencers: Array<string>;
    price: string;
    creationDate: string;
    category: Category;
}

export interface Contract {
    company: string;
    influencer: string;
    title: string;
    price: string;
}

export interface FirebaseResponse<T> {
    [key: string]: T
}