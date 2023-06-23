# **TEXT ENCRYPTOR**

**Welcome to the basic text encryption and decryption project!**

![preview]

## Project

![badge-status]

![badge-GitHub-stars]

![badge-GitHub-forks]

![badge-GitHub-license]

![badge-GitHub-issues]

## Developer

![StephenOcka]

[LinkedIn]

contact@stephenocka.com

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

[StephenOcka]: resources/img/SO/logo_SO-mini.webp
[LinkedIn]: https://www.linkedin.com/in/estebanpadillag
[crypto-js]: https://github.com/brix/crypto-js
[badge-status]: https://img.shields.io/badge/STATUS-CONCLUDED-green
[badge-GitHub-stars]: https://img.shields.io/github/stars/StephenOcka/TextEncryptor?style=social
[badge-GitHub-issues]: https://img.shields.io/github/issues/StephenOcka/TextEncryptor?color=blue
[badge-GitHub-forks]: https://img.shields.io/github/forks/StephenOcka/TextEncryptor?color=blue
[badge-GitHub-license]: https://img.shields.io/github/license/StephenOcka/TextEncryptor?color=blue
[preview]: resources/img/screenshot/screenshot-preview.webp
[onDecrypt-1]: resources/img/screenshot/screenshot-decrypt-01.webp
[onDecrypt-2]: resources/img/screenshot/screenshot-decrypt-02.webp
[onDecrypt-3]: resources/img/screenshot/screenshot-decrypt-03.webp
[onEncrypt-1]: resources/img/screenshot/screenshot-encrypt-01.webp
[onEncrypt-2]: resources/img/screenshot/screenshot-encrypt-02.webp
[onEncrypt-3]: resources/img/screenshot/screenshot-encrypt-03.webp
[onError]: resources/img/screenshot/screenshot-error-01.webp
[onWarning-1]: resources/img/screenshot/screenshot-warning-01.webp
[onWarning-2]: resources/img/screenshot/screenshot-warning-02.webp
