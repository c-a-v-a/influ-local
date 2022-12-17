import type { Company, CompanyPost, FirebaseResponse } from '$lib/types';
import database from '$lib/firebase';
import { ref, child, get, set } from 'firebase/database';
import { json } from '@sveltejs/kit';
import { generateUUID } from '$lib/utils';
import type { RequestEvent } from './$types';

export async function GET(event: RequestEvent) {
    const param = event.url.searchParams.get('id');
    const refRoute = param === null ? 'companies' : `companies/${param}`;

    const r = ref(database);
    const snapshot = await get(child(r, refRoute))
    let posts: FirebaseResponse<Company> = {}

    if (snapshot.exists()) {
        if (param != null)
            posts[param] = snapshot.val();
        else
            posts = snapshot.val();
    }

    return json(posts);
}

export async function POST(event: RequestEvent) {
    const post = await event.request.json() as CompanyPost;
    const uuid = generateUUID();
    const r = ref(database, `companies/${uuid}`);

    await set(r, post);

    return json({});
}