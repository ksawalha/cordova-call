# cordova-call

## Installation

To install the plugin, use the following command:

```sh
cordova plugin add call-number
```

## Usage

To use the plugin, you need to call the `callNumber` function with the phone number you want to dial. You can also check if call support is available using the `isCallSupported` function.

### Example

```javascript
document.addEventListener('deviceready', function () {
    var success = function () {
        console.log("Success");
    };

    var error = function (e) {
        console.log("Error: " + e);
    };

    // Call a number
    window.CallNumber.callNumber(success, error, "1234567890", true);

    // Check if call support is available
    window.CallNumber.isCallSupported(function (isSupported) {
        console.log("Call support: " + isSupported);
    }, error);
}, false);
```

## Methods

### callNumber

```javascript
window.CallNumber.callNumber(successCallback, errorCallback, number, bypassAppChooser);
```

- `successCallback`: The callback that is called when the call is successful.
- `errorCallback`: The callback that is called when there is an error.
- `number`: The phone number to call.
- `bypassAppChooser`: A boolean value indicating whether to bypass the app chooser.

### isCallSupported

```javascript
window.CallNumber.isCallSupported(successCallback, errorCallback);
```

- `successCallback`: The callback that is called with a boolean value indicating whether call support is available.
- `errorCallback`: The callback that is called when there is an error.

## License

This project is licensed under the Apache 2.0 License.
