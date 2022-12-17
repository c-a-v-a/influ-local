type SocialName = 'Instagram'|'Facebook'|'TikTok';

export interface Social {
    name: SocialName;
    link: string;
};

export interface Company {
    name: string;
    mail: string;
    localization: string;
};

export interface Influencer {
    name: string;
    mail: string;
    socialMedia: [Social];
};

export interface CompanyPost {
    name: string;
    description: string;
    influencers: [string];
    selected: [string];
    price: string;
    creationDate: string;
}

export interface Brief {
    company: string;
    influencer: string;
    description: string;
}