# Pathology - remedial XPath engine for Internet Explorer

I'm writing [Terminus][1], a [Capybara][2] driver for real browsers. Capybara
uses XPath to select elements. Most browsers support the `document.evaluate()`
method for querying the DOM with XPath. Some browsers (Internet Explorer,
Android) do not.

So here we are.

Pathology provides an ad-hoc, informally specified, bug-ridden, slow
implementation of half of `document.evaluate()`. It works well enough to run the
entire Capybara test suite on my Android phone. It will likely remain incomplete
because frankly life is too short.

[1]: http://terminus.jcoglan.com/
[2]: http://github.com/jnicklas/capybara


## Building the library

The XPath parser is based on [Canopy][3] and the library is built using
[Jake][4]. These commands should get you a source and minified version plus a
source map in the `build/` directory.

    git clone git://github.com/jcoglan/pathology.git
    cd pathology/
    npm install
    ./node_modules/.bin/canopy source/pathology/xpath.peg
    gem install jake
    jake

[3]: http://canopy.jcoglan.com/
[4]: http://github.com/jcoglan/jake


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

