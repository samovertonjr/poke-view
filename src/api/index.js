export async function fetchios(...args) {
    const res = await fetch(...args);
    return await res.json();
}