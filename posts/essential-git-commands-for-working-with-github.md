---
title: 'Essential Git Commands for Working with GitHub'
date: '2023-05-20'
description: 'Git is a powerful version control system that helps developers track changes, collaborate, and manage code efficiently. If you’re working with GitHub, mastering these essential Git commands will streamline your workflow.'
---

Git is a powerful version control system that helps developers track changes, collaborate, and manage code efficiently. If you’re working with GitHub, mastering these essential Git commands will streamline your workflow.

# This guide covers:

* Initializing a repository
* Adding and committing changes
* Branching and merging
* Rebasing and handling conflicts
* Resetting changes
* Using Git efficiently with GitHub

##  1. Initializing a Git Repository

####  Before using Git, navigate to your project directory and run:

```bash
git init
```

####  This command creates a .git directory, making the folder a Git repository.

####  To check the status of your repo, use:


```bash
git status
```

## 2. Staging & Committing Changes

####  Adding Changes to Staging

#####  To track files, use:

```bash
git add filename
```

#####  To stage all modified and new files:

```bash
git add .
```

####  Committing Changes

#####  After staging, commit the changes with a meaningful message:

```bash
git commit -m "Add login functionality"
```

#####  To include all tracked files directly in a commit without staging:

```bash
git commit -a -m "Fixed bug in authentication"
```

####  Best Practices for Commit Messages

✅ Use imperative tone: "Fix bug" instead of "Fixed bug"

✅ Keep it short (50 chars or less in the subject) 

✅ Provide details in the body if needed

## 3. Working with Branches

#####  Branching allows multiple developers to work on features independently.

####  Creating and Switching Branches:

* Create a new branch:

```bash
git checkout -b feature-branch
```

* Switch to an existing branch:

```bash
git checkout feature-branch
```

####  Viewing Branches

* Switch to an existing branch:

```bash
git branch
```

* Show remote branches:

```bash
git branch -r
```
* Show all local & remote branches:

```bash
git branch -a
```

## 4. Pushing Code to GitHub

### To push changes to GitHub:

####  1. Add a remote repository (if not already added):

```bash
git remote add origin git@github.com:your-username/repo-name.git
```

####  2. Push changes for the first time:

```bash
git push -u origin feature-branch
```

####  3. Push updates:

```bash
git push
```

## 5. Merging & Rebasing

####  Merging a Branch

##### When a feature is ready, merge it into main:

```bash
git checkout main
git merge feature-branch
```
#### To keep a complete commit history:
##### Merge with --no-ff (No Fast Forward)

```bash
git merge --no-ff feature-branch -m "Merge feature-branch"
```

#### Rebasing a Branch

##### Rebasing keeps a linear history:

```bash
git checkout feature-branch
git rebase main
```

##### If conflicts occur, Git will pause rebase and show conflict markers (<<<<<<< HEAD). Resolve conflicts manually, then continue:

```bash
git add resolved-file
git rebase --continue
```

##### To abort a rebase:

```bash
git rebase --abort
```


## 6. Undoing Changes (Reset, Revert, Checkout)

### Undo Last Commit (Keep Changes in Staging)

```bash
git reset --soft HEAD~1
```

### Undo Last Commit (Discard Changes)

```bash
git reset --hard HEAD~1
```

### Undo Changes to a File
#### To revert a file to its last committed state:

```bash
git checkout -- filename
```

## 7. Checking History & Logs

### Viewing Commit History

```bash 
git log --oneline --graph --decorate --all
```

### Viewing Changes Between Commits

```bash 
git diff commit1 commit2
```

## 8. Deleting Branches

### After merging, delete the branch:

```bash 
git branch -d feature-branch
```

### To force-delete:

```bash 
git branch -D feature-branch
```

### To delete a remote branch:

```bash 
git push origin --delete feature-branch
```

## 9. Stashing Changes

### If you need to switch branches but don’t want to commit your changes, stash them:

```bash 
git stash
```

### To apply stashed changes later:

```bash 
git stash pop
```

## 10. Cloning a Repository

### To copy an existing repository:

```bash 
git clone git@github.com:username/repository.git
```

## Conclusion

### This guide covered essential Git commands for working with GitHub. Mastering these commands will improve your efficiency in version control and collaboration.

