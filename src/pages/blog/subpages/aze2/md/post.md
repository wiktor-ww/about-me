
<br>

## introduction

<br>


this post will show you how:

- i wrote the homepage
- what errors i encountered doing this (yeah, there were many)
- what i reused from my other projects

<br>

also this post will contain:

- code snippets
- the stack i used
- and more..

<br>

*for nerds: if you want to read the source code, [here you go](https://github.com/wiktor-ww/about-me)*

<br>
<br>

## let's start

<br>

let's be honest, the old version of this website was horrible. it didn't include
basic features such as: [old version](https://github.com/wiktor-ww/about-me/tree/old/mirror)

- list of projects
- contact
- links
- and other important stuff

<br>

so i decided to rewrite the whole website and redesign it to my likings.

<br>
<br>

## my first idea

<br>

at first i wanted my website to have:

- gradient buttons
- intersection observer
- some particles
- various effects

<br>
    
but for a long run it would be unreadable. that's why i decided to prioritize
optimization and UX instead.

<br>
<br>

## what i used to code my homepage

<br>

i don't know if it's just me but i don't feel using big frameworks just for 
simple homepage — it's just my preference i guess. but that's not the point.

<br>
    
for this website i used:

- TAILWINDCSS
- TypeScript
- HTML
- CSS
- and few libraries

<br>
    
but the strong majority of the code is written in TypeScript, there's 
almost no pure HTML. i'll show some parts of the code here,
but not everything because going through all of it would probably take over an hour.

<br>
    
*and of course info for nerds:* the whole website is only a single page **(SPA)**,
it means that there's only one HTML file for every page.

<br>
<br>

## key methods i used

<br>

the whole project is based on string-based rendering. 

<br>
    
but how does it work? every component or page returns a string, <br>
which is then passed to a router. the router sends it to a <br>
render fuction which injects the string into `index.html`. <br>
there's also an app file that combines all <br> 
components into one big string.

<br>

it looks like this:

<br>

`component → app function → router → render function → index.html`

<br>
<br>
    
## $ render function

<br>

render function is pretty simple:

<br>

```typescript
function Render(ren: string) {
    let page = document.querySelector<HTMLDivElement>("#app");
    page!.innerHTML = ren;

    {/* other stuff */}
}
```

<br>

the function selects the `#app` element and injects the ready <br>
generated HTML string. simple and reusable.

<br>
<br>

## $ router function

<br>

the router is also pretty simple:

<br>
    
```typescript
function Router() {
    let path = document.location.pathname;
    let parts = path.split("/");
    let base = "/" + (parts[1] || "");
    let id = parts[2];

    switch (base) {
        case "/":
        case "/home":
            Render(AppHome(path));
            {/* typewriter function */}
            break;
        case "/blog":
            Render(AppBlog(path, id));
            break;
        {/* other cases */}
    }
{/* navigate functons */}
};
```
<br>

it uses the document's location path name to detect what page should be rendered.

<br>
    
### issue

my first issue was with the router file.

<br>
    
if i added every blog post directly into the main router <br>
it would quickly become unreadable and hard to maintain (im lazy) <br>

<br>
    
### solution
    
my first solution was to create another **switch** inside the `AppBlog` file.

<br>
    
sure, it worked fine but there was one catch; if i'd create more posts <br>
injecting them into the switch would make it messy again. <br>
so i decided to replace it with a new idea: using an object as a route map<br>

<br>
    
```typescript
let pageContent = articleList[id]?.() || Home();
// this is a recreation
```

<br>
    
page content changes whenever id of the page you visit changes. <br>
simple and surely better than the last idea.

<br>
    
<br>
<br>

`AppHome(path)` → contains the main page string and as you may see it uses the
path variable. remember that, it's gonna be important.

<br>
    
`AppBlog(path, id)` → works the same as function above, but do you see that `"id"`
variable? it's used for subpages.

<br>
<br>

## $ navbar function

<br>

code snippet from the navbar function:

<br>
    
```typescript
const links = Links.map(l => {
        const isActive = l.path === path;
        const activeClass = isActive ? "activel" : "";

        return `


        <p>
          <a href="${l.path}" class="${activeClass}">
            ${l.title}
          </a>
        </p>
        `
    }).join("");

    return /* html */`
    <div class="max-w-3xl mx-auto">
        <div class="flex justify-center mt-5 flex-row gap-5">
            ${links}
        </div>
    </div>
```

<br>

and here the **path** that we seen before comes to play.

<br>
    
have you seen these white background stuff when you were **for example** <br>
on my contact page? this is how it works under the hood

<br>
    
first we create a **map** because we don't want to type everything by ourselves. <br>
inside the map we create **constants** for better readability and <br>
we use them for checking if **path** matches with our predefined **list**.

<br>

it works as a **global component** — it means that it's used by other components.

<br>
<br>
    
## blog

<br>

as you can see there are new **subpages** unlike old version. <br>
i will post some blogs here talking about my projects or <br>
some websites that i'd rewrite if i maintained them. <br>

<br>
<br>
<br>

## end

<br>

i think that's it for this post '-'

<br>
    
links for nerds:

- [github](https://github.com/wiktor-ww)
- [old version](https://github.com/wiktor-ww/about-me/tree/old/mirror/)
- [new version](https://github.com/wiktor-ww/about-me/)
- [my website](https://wiktor-ww.vercel.app/)

<br>


<!--
code snippets sources:

- [render](https://github.com/wiktor-ww/about-me/blob/055bfa736b679c79167433a95de6704149acc355/src/render/render.mts#L1-L19)
- [router](https://github.com/wiktor-ww/about-me/blob/055bfa736b679c79167433a95de6704149acc355/src/Router.ts#L1-L62)
- [navbar](https://github.com/wiktor-ww/about-me/blob/055bfa736b679c79167433a95de6704149acc355/src/global/Nav.ts#L1-L29)
- [blog](https://github.com/wiktor-ww/about-me/blob/055bfa736b679c79167433a95de6704149acc355/src/pages/blog/App.mts#L13)
 -->



<br>
