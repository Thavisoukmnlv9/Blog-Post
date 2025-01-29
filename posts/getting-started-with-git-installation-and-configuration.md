---
title: 'Getting Started with Git – Installation & Configuration on Mac/Linux'
date: '2023-05-20'
description: 'Learn how to install and configure Git on macOS and Linux systems, including setting up SSH for GitHub.'
---

Git is an essential tool for developers, enabling efficient version control and collaboration. This guide will walk you through installing and configuring Git on macOS and Linux.

##  1. Installing Git

### On macOS

####  Install using Homebrew:

```bash
brew install git
```

####  Verify installation:

```bash
git --version
```

### On Linux

####  Install using package manager:

* Ubuntu/Debian:

    ```bash
    sudo apt update && sudo apt install git -y
    ```

* Fedora:

    ```bash
    sudo dnf install git -y
    ```

* Arch Linux:

    ```bash
    sudo pacman -S git
    ```
    
## 2. Configuring Git

####  After installation, set up your Git identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

####  After installation, set up your Git identity:

```bash
git config --list
```

## 3. Configuring Git

#### Generate an SSH key:

```bash
ssh-keygen -t ed25519 -C "your.email@example.com"
```

#### Add the key to the SSH agent:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

#### Copy the key and add it to GitHub:

```bash
cat ~/.ssh/id_ed25519.pub
```

* Go to GitHub → Settings → SSH and GPG keys → Add a new SSH key.

## Conclusion

You have now successfully installed and configured Git on your system. Next, let’s explore how to use Git for version control in a project.
