<script lang="ts">
    async function a() {
        const r = await fetch('/api/post', { method: 'POST', headers: {
            'content-type': 'application/json'
        }, body: JSON.stringify({
            name: 'Tytul',
            description: 'Desc',
            influencers: [],
            selected: [],
            price: '100-150',
            creationDate: '11.12.2023'
        })});
        const val = await r.json();

        console.log(val);
    }
</script>

<h1 on:click={a}>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
