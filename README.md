# **TEXT ENCRYPTOR**

**Welcome to the basic text encryption and decryption project!**

![preview]

## Project

![badge-status]

![badge-GitHub-stars]

![badge-GitHub-forks]

![badge-GitHub-license]

![badge-GitHub-issues]

## Mode of operation

### Encrypt

1. Enter the text you want to encrypt.
   ![onEncrypt-1]

2. Enter a password to encrypt the text.
   (It is important that you save the password, as without the password, the text cannot be decrypted)
   ![onEncrypt-2]

3. Once the text and password have been entered, a message should appear confirming that the text is encrypted.
   ![onEncrypt-3]

### Decrypt

1. Enter the text you want to decrypt.
   (It is important thath it is an encrypted text for this page)
   ![onDecrypt-1]

2. Enter the password with which the text was encrypted. (If it is another password, it will give an error message)
   ![onDecrypt-2]

3. Once the encrypted text and the password are entered, a message will be displayed confirming the decryption.
   ![onDecrypt-3]

### Error

- Message displayed when an incorrect password or unfit text is entered (either the text is not encrypted or it is encrypted by a method other than the encryption method on this page)
  ![onError]

### Warning

- Message displayed when there is no text to encrypt or decrypt.
  ![onWarning-1]

- Message displayed when the password is not entered at the time of encrypting or decrypting.
  ![onWarning-2]

## Libraries

The **[crypto-js]** library is used to encode and decrypt the message.
The **[SweetAlert2]** library is used to display alert messages.
The development dependency **[esbuild]** is used to package the project and build the static files for production.
The development dependency **[@chialab/esbuild-plugin-html]** used as plugin to **[esbuild]**.
Then development dependency **[html-minifier]** is used to minify HTML for production.
The **[jsdom]** development dependency is used to manipulate the DOM of the HTML using node before minifying it.

## Developer

![StephenOcka]

contact@stephenocka.com

[LinkedIn]

[StephenOcka]: src/assets/img/author.mini.webp
[LinkedIn]: https://www.linkedin.com/in/estebanpadillag
[crypto-js]: https://github.com/brix/crypto-js
[SweetAlert2]: https://sweetalert2.github.io/v10.html
[esbuild]: https://esbuild.github.io/
[@chialab/esbuild-plugin-html]: https://www.npmjs.com/package/@chialab/esbuild-plugin-html
[html-minifier]: https://www.npmjs.com/package/html-minifier
[jsdom]: https://www.npmjs.com/package/jsdom
[badge-status]: https://img.shields.io/badge/STATUS-CONCLUDED-green
[badge-GitHub-stars]: https://img.shields.io/github/stars/StephenOcka/TextEncryptor?style=social
[badge-GitHub-issues]: https://img.shields.io/github/issues/StephenOcka/TextEncryptor?color=blue
[badge-GitHub-forks]: https://img.shields.io/github/forks/StephenOcka/TextEncryptor?color=blue
[badge-GitHub-license]: https://img.shields.io/github/license/StephenOcka/TextEncryptor?color=blue
[preview]: src/assets/img/readme/preview.webp
[onDecrypt-1]: src/assets/img/readme/decrypt-01.webp
[onDecrypt-2]: src/assets/img/readme/decrypt-02.webp
[onDecrypt-3]: src/assets/img/readme/decrypt-03.webp
[onEncrypt-1]: src/assets/img/readme/encrypt-01.webp
[onEncrypt-2]: src/assets/img/readme/encrypt-02.webp
[onEncrypt-3]: src/assets/img/readme/encrypt-03.webp
[onError]: src/assets/img/readme/error-01.webp
[onWarning-1]: src/assets/img/readme/warning-01.webp
[onWarning-2]: src/assets/img/readme/warning-02.webp
