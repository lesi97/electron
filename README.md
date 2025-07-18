# Lesi Electron Shell

Here is a custom Electron template already setup with an app window using Vite, React, Typescript & TailwindCSS

This has been created to make initial setup of any future Electron applications easier

- [Github](https://github.com/lesi97/electron-shell)
- [Registry](https://npm.lesi.dev/-/web/detail/@c_lesi/electron)

## Installation

This package is self hosted so you must add a registry in your `.npmrc` file first
Your `.npmrc` file can be found at `~/.npmrc` on Mac and Linux or `C:\Users\%username%\.npmrc` on Windows
The line you must add is `@c_lesi:registry=https://npm.lesi.dev/`

The below commands will append this for you

### Mac/Linux

```bash
registry_line="c_lesi:registry=https://npm.lesi.dev/"; npmrc_path="${HOME}/.npmrc"; grep -Fxq "$registry_line" "$npmrc_path" 2>/dev/null || echo "$registry_line" >> "$npmrc_path"
```

### Windows

```powershell
$line = '@c_lesi:registry=https://npm.lesi.dev/'; $path = "$HOME\.npmrc"; $escaped = [regex]::Escape($line); if (-not (Test-Path $path)) { New-Item -ItemType File -Path $path -Force | Out-Null }; if (-not (Select-String -Path $path -Pattern $escaped -Quiet)) { Add-Content -Path $path -Value $line }
```

### Install with package manager

```bash
npx @c_lesi/electron
# or
pnpm exec @c_lesi/electron
# or
yarn create @c_lesi/electron
```
