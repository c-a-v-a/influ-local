import type { CompanyPost } from '$lib/types';
import database from '$lib/firebase';
import { ref, child, get, set } from 'firebase/database';
import { json } from '@sveltejs/kit';
import { generateUUID } from '$lib/utils';
import type { RequestEvent } from './$types';

export async function GET() {
    const r = ref(database);
    const snapshot = await get(child(r, 'posts'))
    let posts: Array<CompanyPost> = [];

    if (snapshot.exists()) {
        posts = snapshot.val() as Array<CompanyPost>;
    }

    return json(posts);
}

export async function POST(event: RequestEvent) {
    const post = await event.request.json() as CompanyPost;
    const uuid = generateUUID();
    const r = ref(database, `posts/${uuid}`);

    await set(r, post);

    return json([]);
}