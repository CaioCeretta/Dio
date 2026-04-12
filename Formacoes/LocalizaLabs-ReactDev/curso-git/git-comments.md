## Basic Commands

cd / takes us back to c: base directory

tab alto complete complex names in case there is a child.

silence on success is a git concept that when everything successfully happen, nothing is displayed on screen.

echo hello > : that > is a redirect command, so it gets the return of the echo, and put it into the file we determined
after the arrow

When using windows, we can use a command named `del`, however, this command only deletes files. So if we try to delete
a folder using del, the folder will remain, but with the files inside of it deleted. The correct command for deleting
a folder in windows would be `rmdir folderName /S /Q`, where /S adjusts the parsing of commands with quotes, and the
/Q is a quiet mode, turning off the command echoes.

## Installing Git

Explanation of the options to choose when installing git

1. Click next and choose where to install
2. Verify if the options of Windows Explorer Integration, git bash here and git gui here are checked
3. Choose the default editor, usually is Vim.
4. Adding the name of the initial branch in the new repositories:
  It says that git use the default branch as "master", but nowadays this name has been replaced to "main", which means that
  we can let git decide (use master) or override the default branch name with the name we want, such as main
5. Adjusting our path environment: We usually use git from the command line and also from 3rd party software, this option
  is recommended because it adds only some git wrappers to our PATH and avoid cluttering our environment with optional
  UNIX tools. And we are going to be able to use the cmd, power shell and any third party looking for Git in PATH. The 
  other options are to restrict the git only to the git bash and the other, to install the optional tools
6. Choose the SSH executable, this option hardly changes from the default bundled OpenSSH
7. To use the default OpenSSL library for the server certificates.\
8. This option is about how git determines the line-breaks. Different OSs have different types of line breaks. And in
this option we choose which character git will interpret as one. We can use the windows character, the unix derived systems.
9. Terminal emulator usually doesn't change from the default
10. Git pull, also doesn't change
11.  Credential Helper: Git Credential Manager Core
12.  Extra options can remain both checked
13.  Experimental we can let it unchecked.


## Understanding Git under the hood

### SHA1

SHA1 is an encryption algorithm. It means secure hash algorithm, it is a set of hash functions, designed by the NSA
(National Security Agency) dos EUA

That encryption results in a set of scrambled characters of 40 digits from a given string. If we modify a single comma
from that same string, and generate that SHA1 again, the result will be completely different, and so on.

e.g. 
```bash
$ openssl sha1 hello.txt
SHA1(hello.txt)= 5d7e3445ae9c65746735acfc9c45ea3f0d66d61e
```

by simply adding a dot to the encrypted string:

```bash
SHA1(hello.txt)= dfeb5e4a56bb7011ada1ca2d0b3a741cabea0445
```

and removing that dot it comes back to how it was.

```bash
$ openssl sha1 hello.txt
SHA1(hello.txt)= 5d7e3445ae9c65746735acfc9c45ea3f0d66d61e
```

This means that it doesn't work like bcrypt, for example. Which adds a random "dirt" to that hashed value.


## Internal git objects: Blobs, Trees, Commits

$ echo 'conteudo' | git hash-object --stdin
fc31e91b26cf85a55e072476de7f263c89260eb1

$ echo 'conteudo' | openssl sha1
SHA1(stdin)= 65b0d0dda479cc03cce59528e28961e498155f5c

Both of these are SHA-1 hashes, but the difference on the results is due to the fact that git doesn't only generate the
hash after the concent. It adds a header before performing the calculus.

Git is a system of object storing, and for it, every file is a "blob". Before passing data through SHA-1, it concatenates
the following information:

1. type of the object (in this case, `blob`)
2. The white space
3. The content size in bytes
4. A null character (`\o`)
5. The content itself.

#### Git's Formula

On that example, git is calculating: `$$sha1(\text{"blob 9\0conteudo\n"})$$`

The number 9 represents the 8 characters of 'conteudo' plus the new line character, which is automatically added by echo.

## Github

The username and the email we use in our github account, should be the same as the ones we set up in its configuration.

It's worth remembering that the commits that were made using a given email and name, and in case we choose to modify it.
We won't be able to modify the author of these commits because of all that process, that the commits are linked with
eacher other, that the author is part of the SHA1, and so on. This means that, if we set up a name and an email on the
git config, but by the time we created our github account, we used a different e-mail and name, when we try to push something
to github, github would refuse to push because of permissions. Unless they are colaborators/members of the repo.

To point our local repo to the remote one, we execute

`git remote add origin 'giturl'`

## Solving Git Merge Conflicts

A merge conflict happens when two people modify the same line of the same file and try to save their work to GitHub. Git
doesn't know which version is "correct," so it stops and asks you to decide.

### Scenario

Initial State: You and a teammate both have the same code from the livro-receitas repo.

The Conflict: Your teammate edits the README, commits, and pushes to GitHub. Meanwhile, you edit the exact same line in
your local README.

The Rejection: You try to git push, but GitHub rejects it. It tells you that the remote contains work you don't have yet.

The Pull: You run git pull to get the updates. Git tries to merge them automatically but fails because of the overlapping
changes.

### Anatomy of a Conflict

When you open the conflicted file (e.g., README.md), Git marks the trouble spot with special symbols:

Markdown
Livro de receitas
Strogonoff de Frango

<<<<<<< HEAD
Pave
=======
Bolo de cenoura
>>>>>>> [commit-sha]

<<<<<<< HEAD: Starts the section containing your local changes.

=======: The divider between your code and the incoming code.

>>>>>>>: The end of the section containing the code from GitHub.

### How to Fix It

To resolve the conflict, you manually edit the file to look exactly how you want it. You must remove the Git symbols during this process.

If you want to keep both recipes, change the file to:

```markdown
Livro de receitas
Strogonoff de Frango
Pave
Bolo de cenoura
```

### Finalizing
Once the file is cleaned up:

Add the resolved file: git add README.md

Commit the resolution: git commit -m "Fix merge conflict in README"

Push to GitHub: git push origin [branch-name]








