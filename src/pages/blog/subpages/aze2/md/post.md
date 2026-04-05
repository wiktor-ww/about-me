
<br>

## introduction

<br>


this post will show you how:

- i wrote the homepage
- what errors i encountered doing this (yeah, many of them)
- what i used from my other projects etc.

<br>

also this post will contain:

- paste of some code elements
- stack of the page
- and more..

<br>

*for nerds: if you want to read the source code, [here you go](https://github.com/wiktor-ww/about-me)*

<br>
<br>

## let's start

<br>

let's be honest, the old version of this website was horrible. it didn't contain
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
- effects etc.

<br>
    
but for a long run it would look like trash. that's why i decided to prioritize
optimization and UX instead.

<br>
<br>

## what i used to code my homepage

<br>

i don't know if it's just me but i don't feel like using frameworks just for 
simple homepage — it's just my preference i guess. but that's not the point.

<br>
    
for this website i used:

- TAILWINDCSS
- TypeScript
- HTML
- CSS
- and some libraries

<br>
    
but the strong majority of the code is written using TypeScript, there's 
almost no pure HTML written. in this post i will show you some parts of the code,
but of course not everything because you would need to read it for
atleast hour or more lol

<br>
    
*and of course info for the nerds:* the whole website is only a single page (SPA),
it means that there's only one HTML file for every page.

<br>
<br>

## key methods i used

<br>

1. the whole project is based on string-like build. but how does it work? every
component or page returns a string that gets send to a router that sends it to
a render fuction that inserts the string to `index.html`. there's also an app file
which puts together all components into one big string that gets sent to a router.

<br>

maybe it will be more readable with arrows:

<br>

`component → app function → router → render function → index.html`

<br>
<br>
    
## $ render function

<br>

a paste from the render function:

<br>

```typescript
function Render(ren: string) {
    let page = document.querySelector<HTMLDivElement>("#app");
    page!.innerHTML = ren;

    {/* other stuff */}
}
```

<br>

the function selects an `#app` element inside `index.html` and inserts the ready 
build string from a router. easy to use in other components and it's scalable

<br>
<br>

## $ router function

<br>

a paste from the router function:

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

as you can see the router is pretty basic, nothing special. <br>
it uses the document's location path name to detect what page should be displayed and
every page is split into several `app` files (i mentioned them before).

<br>
    
### issue

my first issue was with the router file. if i'd insert every subpage
for every post there it would make the readability worse and it
also would drive me crazyy.

<br>
    
so i've decided to split the page's URL into several pieces so i can pick the `id`
for the posts and `the main directory` for the main pages.

<br>
    
### solution
    
my first solution was to create another **switch** inside the `AppBlog` file. <br>
sure, it worked fine but there was one catch; if i'd create more posts <br>
inserting them into the switch would make it unreadable. <br>
so i decided to replace it with a new idea: use the object as a list of pages<br>

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

a paste from the navbar function:

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

and here the **path** that we seen before comes to play. have you seen these white
background stuff when you were **for example** on my contact page? <br>
this is how it works behind the scenes

<br>
    
first we create a **map** because we don't want to type everything by ourselves. <br>
inside the map we create **constants** for better readability and agility and <br>
we use them for checking if **path** matches with our predefined **list**.
