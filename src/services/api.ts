
export const getApiResponse = async (url: string) => {
    try {
        const res = await fetch(url);        
        return res.json();
    } catch (err) {
        console.error(err);
    }
}