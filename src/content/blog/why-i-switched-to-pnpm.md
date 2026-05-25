---
title: "Why I Switched to pnpm"
description: "After cleaning 20GB of node_modules folders, I finally switched to pnpm."
date: "2026-05-25"
category: "Productivity"
tags: ["pnpm", "node", "package-manager", "productivity"]
---

A few days after cleaning over 20GB of old `node_modules` folders with `npkill`, I realized something:

I was absolutely going to end up in the exact same situation again.

![meme](/images/blog/posts/pnpm-switch/monkey-coding.gif)

Because I create way too many random projects.

Some are serious. Some are just weekend experiments. Sometimes I clone repositories just to see how they’re structured internally. Other times I install an entirely new framework because a YouTube video made it look cool for five minutes.

The problem is that every single one of those projects comes with its own massive dependency folder.

Even when multiple projects use the exact same packages, npm still installs separate copies over and over again across different directories. That means dozens of duplicated dependencies quietly taking up disk space in the background.

After the cleanup, I finally decided to switch over to `pnpm`.

---

## So what exactly is pnpm?

`pnpm` is a package manager for JavaScript projects, similar to npm, Yarn, or Bun.

![why switch to pnpm](/images/blog/posts/pnpm-switch/why-switch-to-pnpm.webp)

The difference is how it stores dependencies.

Instead of creating fully separate copies of packages for every project, `pnpm` keeps them inside a shared global store on your machine and links them into projects when needed.

That means if ten different projects all depend on the same version of React, the package only gets stored once on disk.

That one design choice alone saves a ridiculous amount of storage.

---

## The thing that finally convinced me

Before switching, I assumed all package managers basically worked the same way underneath.

Install dependencies.
Get a `node_modules` folder.
Move on.

But after seeing how much duplicated junk had accumulated on my drive, I started looking deeper into how `pnpm` actually works.

The idea of sharing dependencies globally instead of endlessly duplicating them across projects just made way too much sense.

Especially for someone like me who constantly creates:
- side projects
- tutorial projects
- abandoned prototypes
- cloned repositories
- test apps that survive for three days

Which is... most web developers honestly.

---

## Installing pnpm

The easiest way to install it now is through Corepack, which already ships with modern versions of Node.js.

```
corepack enable pnpm
```

After that, you can verify everything works:

```
pnpm --version
```

---

## Migrating an existing project

Switching one of my existing projects was honestly easier than I expected.

Inside your project folder:

```
rm -rf node_modules package-lock.json
```

Then reinstall dependencies using `pnpm`:

```
pnpm install
```

That generates a `pnpm-lock.yaml` file and recreates your dependencies using pnpm’s linking system.

Most of my projects worked immediately without any changes.

---

## Things I noticed after switching

### Smaller disk usage

This was the biggest one for me.

My projects stopped duplicating the same dependencies everywhere, which means my storage usage grows much slower now.

### Faster installs

Dependency installation feels noticeably faster, especially across multiple projects using similar packages.

### Cleaner dependency management

`pnpm` is stricter about dependency resolution compared to npm, which actually helped me catch packages relying on undeclared dependencies.

At first it felt slightly annoying.

Now I kind of prefer it.

---

## The only slightly annoying part

Not every tutorial or documentation page uses `pnpm` commands.

A lot of examples online still default to npm:

```
npm install
npm run dev
```

So sometimes I mentally translate commands automatically now:

```
pnpm install
pnpm dev
```

Honestly though, after about two days, it became muscle memory.

---

## Final Thoughts

Switching to `pnpm` wasn’t some life-changing productivity upgrade.

But it *did* solve a very real problem I kept running into without thinking about it.

Less duplicated junk.
Less wasted storage.
Faster installs.
Cleaner projects.

And most importantly, my C drive is no longer glowing red every few months.

I probably should’ve switched earlier.