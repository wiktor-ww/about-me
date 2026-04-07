type Link<T> = {
    path: T;
    title: T;
}

export const Links: Link<string>[] = [
    { path: "/contact", title: "contact" },
    { path: "/home", title: "home" },
    { path: "/blog", title: "blog" }
]
