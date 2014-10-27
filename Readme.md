
When we have node_modules folder linked from somewhere else webpack create two seperate instance of SafeString and our app will not work
Because this check will fail inside of handlebars (new moduleA.SafeString('test')) instanceof moduleB.SafeString and handlebars will escape that

To reproduce

    $ npm install
    $ mv node_modules nm
    $ ln -s nm node_modules
    $ webpack