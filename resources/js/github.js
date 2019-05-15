class Github {
    constructor(){
        this.client_id = '00ecb3123efabd287d54';
        this.client_secret = '2f03946f275d8fa55c40815a19d28751657cd406';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?
        client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}
        /repos?per_page=${this.repos_count}&sort=${this.repos_sort}&
        client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}

