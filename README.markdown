# Pathology - remedial XPath engine for Internet Explorer

I'm writing [Terminus][1], a [Capybara][2] driver in client-side JavaScript.
Capybara uses XPath to select elements. Most browsers support the
`document.evaluate()` method for querying the DOM with XPath. Internet Explorer,
predictably, does not. I looked all over. Nothing can parse the almost trivial
queries that Capybara spits out.

So here we are.

The XPath parser is based on [Canopy][3], which I basically wrote solely to
support this project. The interpreter is slow and incomplete and will likely
remain so. The current aim is to implement just enough to run typical
[Cucumber][4] tests in the browser.

[1]: http://github.com/jcoglan/terminus
[2]: http://github.com/jnicklas/capybara
[3]: http://canopy.jcoglan.com/
[4]: http://cukes.info/


## Building the library

    git clone git://github.com/jcoglan/pathology.git
    cd pathology/
    npm install
    ./node_modules/.bin/canopy source/pathology/xpath.peg
    gem install jake
    jake


## License

Copyright (c) 2010-2012 James Coglan

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

