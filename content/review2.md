# Review

* Misc
* Shell Scripting
* Networking Basics
* System Administration
* Regular Expressions

## Misc
* What is the difference between . and .. when running ls -a?
* What does the `strings` program do?
* What are environmental variables?
* What does export do?
* How do you create a soft link that links a file from ~/scripts/script.sh to ~/bin?

## Shell Scripting
* What does the echo -e flag allow you to do?
* What does this command do? echo fileName.cpp | sed s'/.cpp/.o/g'
* What is the path variable used for?
* How can you print the dependencies for all the cpp files in a  given directory in a bash script?
* How can you make your own programs run anywhere in the command line by just typing the name like `newproject`
* What is the main use case for using awk?

## Networking
* What does ping do?
* What is SSL
* Why is it important to use HTTPS instead of HTTP
* What is the difference between TCP and UDP sockets?
* What is the difference between an IP address and a MAC address?
* What does a DNS Server do?
* What is the hostfile used for?

## System Administration
* What is id_rsa and id_rsa.pub used for?
* What is the purpose of the authorized_keys file?
* What does sudo mean?
* Why do we use sudo?
* What command is used to make a file executable to all users?
* What command is used to make a file read only to all users?
* What is the command to make a file read, write and execut to the owner and not accessible to other users?
## Regular Expressions

1. Underline the portion of the urls this regular expression will match 

	`https*://[0-9a-z.]*/*[a-zA-Z0-9/.]*`


        http://domain.com
        https://domain.com/
        http://domain.com/?ref=http://google.com
        http://www.domain.com/imag3s/test.jpg
        http://www.domain.com/images/IMAGE.png
        http://www.domain.net/images/test.tif
        http://domain.org/?image=test.jpeg
        http://domain.org/?user=name&image=test.jpeg
        ftp://domain.com


2. Underline the portion of the emails this regular expression will match 

	`[a-zA-Z.0-9]+@[a-zA-Z.0-9]+.(com|net|org|info)`


        mail@example.com
        username.mail@example.Net
        first.last@gmail.com
        x0x0first.lastx0x0@mail.domain.Org
        randomname23@domain.biz
        sketchywatches@fr33watches4u.info
        0f@dfa@s0mething.com
        3nh4nc3@Vi74m1n5.info
        youkn0wwhoels3h45email@yahoo.com

1. Write a regular expression which will filter the lines that just contain images.
