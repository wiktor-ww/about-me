type Link<T> = {
    path: T;
    title: T;
}

export const Links: Link<string>[] = [
    { path: "/projects", title: "projects" },
    { path: "/home", title: "home" },
    { path: "/blog", title: "blog" }
]
