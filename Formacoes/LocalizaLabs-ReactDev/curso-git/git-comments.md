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

### Blobs

By simply running an `echo 'conteudo' | git hash-object --stdin`

stdin is just because that function is expecting to receive a file but we are sending a text to it.

The difference of running that command and the command using the openssl command. Is that they use a different set of
characters. This happens because git's specific objects are stored inside an object named `Blob`. This object contains
metadata inside of it.

A blob contain the object type, a string/file size, a \0, and the content itself

`echo -e 'blob 9\0conteudo' | openssl sha1` === `echo 'conteudo' | git hash-object --stdin`

This means that, 

### Trees

Trees store blobs. Blob is the basic composition block, and the trees store and points to different types of blobs and
to commits.

Trees are responsible for storing the files and creating the structure to look for them. Each tree has a SHA1 of that
given metadata, The blobs have the SHA1 of the file, trees point to that blobs

an example would be one tree node point to two blobs and  to other tree that points to a blob

### Commit

Commit is the object that will group everything. He is the one that will give sense to the change we are creating.

a commit points to a tree, to a sibling, to the author, to the message and to the timestamp and the sha1 generated
by that commit is the hash of all this information.

Let's say we have a blob, and we modify something inside of it. This will cause its SHA1 to change, then, this blob in
turn has a tree pointing to it, meaning that if we modify the blob, we also modify the tree SHA1.

Finally, a commit points to a tree, that in turn, may point to other trees. Which means that a change on a file reflects
on the tree that by consequence will reflect to our commit. That's why git is secure. When we have a commit we are ensuring
that no one altered that commit. By looking to the history of commits we create a timeline for each commit.

It is impossible for someone to act maliciously trying to modify the code of a given commit without this being very clear
in the commits history.

Putting every concept together we can think of

Commit: Has a SHA1, a size, a tree that it is point to, an author, and a committer
Tree: That same tree the commit is point to also has a SHA1, and has a size, and points to three other blobs
Blobs: Each of these blobs in turn, have a SHA1, and their respective content

## So why is git a safe distributed system? 

Imagine we have our code/repository hosted on a server inside the cloud. Like github. 

The code that lives there represent the final state of our code. Suppose that our repository has thirty/forty people
working on it. Now suppose all its maintainers also has a version of this code. By the fact that each commit is practically
impossible to be altered. Either its most recent version that is on the machine, and all these 40 versions that are distributed
across the other machines. Also are reliable versions.

Meaning that if a problem on the cloud/github happen, assume that all the servers exploded an the code doesn't exist anymore,
it also would have to happen something with these forty people. Because their available versions also are very reliable
because of the structure maintained by git. 

## SSH keys and tokens

### Git password authentication

In case we want to push something to a repository, we have to be authenticated, to show that "i am realy me" when pushing
to a local repository, for example.

Some years ago, github only asked for the username and the password, however, in more recent years, github shutdown this
kind of authentication of only login/password, and it created new safer processes to us, for the authentication

#### SSH

SSH, in simpler terms, is a way to create an encrypted and save way, for two machines talk to communicate, e.g. There
is the github server, and we want to communicate with it through our machine. Therefore, we have to create a local SSH
and add it to our github account making sure that the machine is secure and establish the connection after a key. 

SSH keys always have two keys, one public, and a private one. The public key is the one added to our github account, and
as soon as we do this, github will know our machine, and whichever repository we have in our machine by this SSH process
and we wish to send code to it, github will already know who is the one talking to it, and allow it.

So in basic terms how we make this communication. We generate the ssh key, which will give to us both a public and a secret
key. Add the public key to github "SSH and GPG keys" section in our settings. And for the secret key, we will start the
ssh-agent via terminal, and execute the command to add our given secret ssh to this agent, and creating our own password
for this given key. And now github knows that this given secret ssh key, is refering to that public one. Github, behind
the scenes, sends a "challenge" to our machine, that only our secret ssh key is able to solve.

## Initiating the first repository

We will start working with git and forget github for now.

### Git init

By executing a git init, git informs us that an empty git repository was initialized.

Alongside with this command, git creates a hidden `.git` folder. This a folder where git creates the versions of the
objects that we are handling.

### Git Commit

After the commit command, on the terminal, we can see: 

. The first 8 digits of that commit SHA1
. The branch in which this commit was made.
. Number of lines and files insertion.  
. Create mode. This indicates that the file is new to git, in case we were just editing a file, it would only show the
lines modified/inserted


#### First time we are using git

In the first time we are using git, to be able to create commits, pushes, and more. We have to define our credentials,
since when a commit is created, it is created with an author. These commands are

`git config --global user.email "caioceretta@gmail.com"
git config --global user.name CaioCeretta`







