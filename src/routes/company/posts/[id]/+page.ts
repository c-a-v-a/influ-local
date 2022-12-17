import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
    const res = await fetch(`/api/company`);
    const item = await res.json();

    const resInflu = await fetch(`/api/influencer`);
    const Influs = await resInflu.json();

    return { item, Influs };
}) satisfies PageLoad;