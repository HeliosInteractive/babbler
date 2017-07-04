# Babbler

Minimal email domain spellchecker. Calculates Levenshtein distance to included list of domains for errors. Returns
the most relevant match.

## Install

`npm i -S babbler`

Plain Jane
```
<script src="./node_modules/babbler/dist/babbler.min.js"></script>
```

CommonJS
```
const Babbler = require('babbler');
```

AMD
```
define(['babbler'], function(Babbler){

});
```

ES6
```
import Babbler from './node_modules/babbler/src/index.js'
```

## Usage

### Check

Check if the email is spelled correctly. Returns the closest match.

Incorrect spelling

```
Babbler.Check('michael@gnail.com');
// {suggestion: 'michael@gmail.com', domain: 'gmail.com' distance: 1}
```

Correct spelling

```
Babbler.Check('michael@gmail.com');
// true
```

Invalid email address

```
Babbler.Check('michaelgmail.com');
// false
```

### Domains

Append, overwrite, or get the domains list babbler checks against.

Append

```
Babbler.Domains(['something.co']);
```

Overwrite

```
Babbler.Domains(['something.co'], true);
```

Get

```
Babbler.Domains();
```


