export function getConfig() {
    // //pislice.local
    const URL = "//localhost:8000";
    const API_ENDPOINT = URL + "/api/v1";

    return {
        "URL": URL,
        "API_ENDPOINT": API_ENDPOINT,
        "GET_CONTENT": API_ENDPOINT + "/getcontent",
        "IMAGE_PATH": URL + '/file/image',
    }
}