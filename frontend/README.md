# Setup

to get this repo working on your machine, follow these steps (depending on your OS):

[//]: # (TODO)

To setup environment using Windows, install WSL: https://learn.microsoft.com/en-us/windows/wsl/install

Then install Node.js on WSL to prevent WSL from using the Window's install of Node.js: https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl

# Contributing

1. Find an issue to work on or that you are assigned

2. Create a branch for the issue named

   > `{issue-number}/{description}` 

   Where `issue-number` is the number associated with the issue (ie. `#1`) and the `description` is a brief description
   of the issue

2. Create a commit for each batch of related changes (that is, the smallest changes that cannot be seperated)

3. Name the commit following the format 

   > {type}({scope}): {description}

   Where `type` is `bug, chore, feature, ...`, `scope` is something like `api, fe, be, ...` and `description` is
   specifically what the commit changes.
4. Complete issue, and then create a pull request describing your changes. The PR description must
   contain `resolves {issue-number}`

# Structure

- `app` -- contains all views for the application
- `assets` -- contains all static assets, like fonts
- `components` -- contains components that are used to make up views in `app`
- `constants` -- anything that stays contant within `app`, like the colours used