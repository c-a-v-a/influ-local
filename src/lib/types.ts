type SocialName = 'Instagram' | 'Facebook' | 'TikTok';

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
    influencers: [string] | [];
    selected: [string] | [];
    price: string;
    creationDate: string;
    category: string
}

export interface Contract {
    company: string;
    influencer: string;
    description: string;
}

export interface FirebaseResponse<T> {
    [key: string]: T
}