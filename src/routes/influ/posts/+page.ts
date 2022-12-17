import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
    const res = await fetch(`/api/company`);
    const item = await res.json();

    return { item };
}) satisfies PageLoad;