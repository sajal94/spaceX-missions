export class SpaceXService {

    private baseUrl: string = 'https://api.spaceXdata.com/v3/launches?limit=100';

    public async getMissionData(queryParam?: string) {
        const url = queryParam ? `${this.baseUrl}&${queryParam}` : this.baseUrl
        return await fetch(url,
                { headers: { 'Content-Type': 'application/json' } }
            ).then((response) => {
                return response.json();
            });
    }
}