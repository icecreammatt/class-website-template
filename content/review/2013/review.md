# Midterm Review
		    <..>
		 <== ^^==>
    		 ()
		     /\
		    =  =  
### Sample Questions

* Write the commands in order to copy all the files and folders out of this directory `/home/faculty/mcarrier/pickup/cs210/lab5/` into a new directory named `lab05` which is inside your `cs210` folder. Assume the `lab05` folder has not been created yet.

* How would you extract the contents of the following file `lab5.tgz`

* What is the difference between relative and absolute paths?

* How do you list all files including hidden ones in a given directory?

* What is the compiler flag required to debug a program in gdb?

* What is the difference between `#import <name>` vs `#import "name.h"`?

* What are o files and what are they used for?

* Explain what the advantages of using makefiles are besides compiling multiple files in a single command

* What kind of standard output will this `2>` redirect?

* What is the difference between these redirection operators `>` and `>>`?

* What is the output of this command with the sample input:  
`cat sample.txt | awk '{ print $3 }' | sort | uniq` 

Sample Input:  

```
 8795  git status
 8921  git checkout -b webaccess
 8991  git add -u .
 9004  git checkout master
 9005  git merge webaccess
 9081  git checkout Makefile
 9273  git checkout -b menuSelection
```

* What is the output of this command given the sample input:

`cat sample.txt | awk '{ $1=""; print $0 }'` 

* What is the output of this command?

`who | awk '{ print "Hello " $1 }' | sort | uniq`

<br/>

#### Using pipes construct a single line command which downloads web pages from everyone who is listed when using `last` on cwolf. _(Hint: xargs, wget, awk)_

### Git

* How do you initialize a git repository?

* How do you add files to a git repository?

* How do you undo changes on a specific file since the last commit?

* What is the `.gitignore` file used for?

* How do you display what has changed since the last commit?

* How do you reset all changes since the last commit?

* How do you view the history of all your commits?

* What are branches used for?

## Review Questions

* Two fish are in a tank. One of the fish says, "How do we drive this thing?!?"

* What is Git?

* How do you change git branches, if you would ever need to?

* What is going on with the whole pull request thing?

* Markdown? What is it/what is it for?

* Why is the sky bluee?

* How much wood would a woodchuck chuck if a woodchuck could chuck wood?
_lol i dunno_

* In case of zombie apocalypse, how would you design a facial recognition program that identifies if individuals are decaying and likely infected.

* When programming your zombie facial recognition program (OperationUnicornExsanguination.cpp), what command would you use to upload it for collaberation on github?

* What does the man command do?

* What is green and red and moves 50 miles an hour?
~`A frog in a blender~

* How do you move a file or directory to a destination directory?

* How do you see the current directory you are in?

* What is the cat command for?

* What are pipes used for?

* How would you copy the file "I_like_hamburgers.txt" to a new file named "I_don't like_hamburgers.txt"

* How would you compile a file in a way that you can debug it using the gdb compiler afterwards?

* What are 5 different ways you can redirect the output of a program into a file, and what is the difference between them?

* If you where typing a command and are unsure of what flag to use, what commant would you use to assist you in making your desition?

* How would you compile a file named "this_file_isn't_compiled.cpp" and named the output file "this_file_IS_compiled_:).out"?

* What command shows you all the files in a directory, including the hidden/invisible ones?

* What does the pwd command do and give an example.

* What command do you use to remove a directory?

* What compiling command do you use too edit your program in gdb?
  
  - Bonus: What does gdb stand for?

- What is the argument passed to cd to go to the previous directory?

* What are pipes?

* What does the flag -g do in : 
 `g++ -g main.cpp -o main.x`

* What is the basic function of grep?

* What are pipes?

* What is a makefile?

* What is the importance of the makefile?

* How do you recursively delete files in Terminal? - abrownli

* How do I merge your updated master with my fork? 

* What are the significant advantages of using Git?

* How do you copy a file from a different directory into your pwd?

* What command allows you to view your current directory?

* How do you start working in git? Allow git to be used with a file? Save in git?
  
* How do you add a comment to the top of a git file in the command line?

