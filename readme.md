# @amphibian/promise-timeout

promise timeouts

```
npm install @amphibian/promise-timeout
```

## Usage

```javascript
import timeout from '@amphibian/promise-timeout';

async function getUsers() {
	const response = await timeout(fetch('https://reqres.in/api/users'));
	const user = await response.json();
	return user;
}
```

### With options

```javascript
const request = fetch('https://reqres.in/api/users')
	.then((response) => response.json());
timeout(request, {timeout: 2000});
```

## `timeout(function, options)`

### `function` _(`Function`)_

The function to timeout. Should return a `Promise` or be `async`.

### `options` _(`Object`)_

#### `options.timeout` _(`Number`)_

**Default**: `500`
Number of milliseconds to wait before throwing an error.
