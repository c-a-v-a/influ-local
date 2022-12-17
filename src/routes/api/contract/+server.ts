import type { CompanyPost, Contract, FirebaseResponse } from '$lib/types';
import database from '$lib/firebase';
import { remove, ref, child, get, set } from 'firebase/database';
import { json } from '@sveltejs/kit';
import { generateUUID } from '$lib/utils';
import type { RequestEvent } from './$types';

export async function GET(event: RequestEvent) {
    const param = event.url.searchParams.get('id');
    const refRoute = param === null ? 'contracts' : `contracts/${param}`;

    const r = ref(database);
    const snapshot = await get(child(r, refRoute))
    let posts: FirebaseResponse<Contract> = {};

    if (snapshot.exists()) {
        if (param != null)
            posts[param] = snapshot.val();
        else
            posts = snapshot.val();
    }

    return json(posts);
}

export async function POST(event: RequestEvent) {
    const body = await event.request.json();
    const contract = body.contract as Contract;
    const postId = body.post;
    const uuid = generateUUID();
    const r = ref(database, `contracts/${uuid}`);

    await set(r, contract);

    const postR = ref(database, `companies/${contract.company}/posts/${postId}/influencers`);
    const selectedR = ref(database, `companies/${contract.company}/posts/${postId}/selected`)

    const snapshot = await get(postR);
    if (snapshot.exists()) {
        let arr = snapshot.val();
        arr.splice(arr.indexOf(contract.influencer), 1);

        set(postR, arr);
    }

    const selected = await get(selectedR);
    if (selected.exists()) {
        let arr = snapshot.val();
        arr.push(contract.influencer)

        set(postR, arr);
    } else {
        set(postR, [contract.influencer])
    }

    return json({});
}

export async function DELETE(event: RequestEvent) {
    const body = await event.request.json();
    const contractId = body.contract;

    if (!contractId) {
        return json({error: true})
    }

    const r = ref(database, `contracts/${contractId}`);

    remove(r);

    return json({error: false});
}