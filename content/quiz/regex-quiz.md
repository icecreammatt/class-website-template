# Quiz

## Regular Expressions

1. What URLs will this match?

	`https*://[0-9a-z.]*/*[a-zA-Z0-9/.]*`

	```
	http://domain.com
	https://domain.com/
	http://domain.com/?ref=http://google.com
	http://www.domain.com/imag3s/test.jpg
	http://www.domain.com/images/IMAGE.png
	http://www.domain.net/images/test.tif
	http://domain.org/?image=test.jpeg
	http://domain.org/?user=name&image=test.jpeg
	ftp://domain.com
	```

1. Which emails will validate?

	`[a-zA-Z.0-9]+@[a-zA-Z.0-9]+.(com|net|org|info)`

	```
	mail@example.com
	username.mail@example.Net
	first.last@gmail.com
	x0x0first.lastx0x0@mail.domain.Org
	randomname23@domain.biz
	sketchywatches@fr33watches4u.info
	0f@dfa@s0mething.com
	3nh4nc3@Vi74m1n5.info
	youkn0wwhoels3h45email@yahoo.com
	```

1. Write a regular expression which will filter just the images from the first question.

	`https*://[a-zA-Z0-9./?=]+(.jpg|png|tif|jpeg)`