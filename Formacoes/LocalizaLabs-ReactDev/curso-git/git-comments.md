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

