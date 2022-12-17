import type { CompanyPost } from '$lib/types';
import database from '$lib/firebase';
import { ref, child, get, set, remove } from 'firebase/database';
import { json } from '@sveltejs/kit';
import { generateUUID } from '$lib/utils';
import type { RequestEvent } from './$types';

export async function DELETE(event: RequestEvent) {
    const body = await event.request.json();
    const companyId = body.company;
    const postId = body.post;

    if (!companyId || !postId) {
        return json({error: true})
    }

    const r = ref(database, `companies/${companyId}/posts/${postId}`);

    remove(r)

    return json({error: false});
}

export async function PUT(event: RequestEvent) {
    const body = await event.request.json();
    const companyId = body.company;
    const postId = body.post;
    const userId = body.user;

    if (!companyId || !postId || !userId) {
        return json({error: true})
    }

    const r = ref(database, `companies/${companyId}/posts/${postId}/influencers`);
    const snapshot = await get(r);

    if (snapshot.exists()) {
        const arr = snapshot.val();

        arr.push(userId);

        set(r, arr);
    } else {
        set(r, [userId])
    }

    return json({error: false})
}

export async function POST(event: RequestEvent) {
    const body = await event.request.json();
    const post = body.post as CompanyPost;
    const companyId = body.company;
    const uuid = generateUUID();
    const r = ref(database, `companies/${companyId}/posts/${uuid}`);

    await set(r, post);

    return json({});
}