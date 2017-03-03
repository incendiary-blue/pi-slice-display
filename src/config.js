export function getConfig() {
    // //pislice.local
    const URL = "http://dev.pislice.com.10.10.73.156.xip.io:8888/";
    const API_ENDPOINT = URL + "/api/v1";

    return {
        "URL": URL,
        "API_ENDPOINT": API_ENDPOINT,
        "GET_CONTENT": API_ENDPOINT + "/getcontent",
        "IMAGE_PATH": API_ENDPOINT + '/file/image',
    }
}