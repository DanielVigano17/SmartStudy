export default function getUrl(path? : string) : string
{
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "";
    const normalizedPath = path && !path.startsWith("/") ? `/${path}` : path || "";
    return `${baseUrl}${normalizedPath}`
}