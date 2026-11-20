# Add Snow Creator to Git

## New GitHub repository

Create an empty repository, for example `snow-creator`, without initializing a README. Extract this ZIP and open PowerShell or a terminal in `Snow-Creator-Web` (the folder containing package.json).

Replace YOUR-USERNAME and the repository name:

```sh
git init
git add .
git commit -m "Add Snow Creator web studio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/snow-creator.git
git push -u origin main
```

Use your normal Git/GitHub authentication. No account tokens are included.

## Existing repository

Copy the project files into your checkout. Keep its `.git` directory; merge README/package.json/.gitignore if it already contains another app.

```sh
git status
git add .
git commit -m "Add Snow Creator web studio"
git push
```

Review `git status` for unrelated changes first. Skip `git init` and `git remote add` for an existing repository.

## Preview and test

```sh
npm start
npm test
```

Keep `dist/` tracked; static hosts should publish it without a build step. Hosting this repository does not add paid access automatically.
