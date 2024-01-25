import { textToBuffer, bufferToText } from './modules/bufferCoding.js';

// Исходный текст
const text = 'Привет, мир!';

const app = async () => {
  try {
    const utf8Buffer = textToBuffer(text, 'utf-8');
    console.log('\nutf8Buffer: ', utf8Buffer);

    const decodedTextBase64 = bufferToText(utf8Buffer, 'base64');
    console.log('\ndecodedTextBase64: ', decodedTextBase64);

    const decodedTextUtf8 = bufferToText(utf8Buffer, 'utf-8');
    console.log('\ndecodedTextUtf8: ', decodedTextUtf8);

    console.log('\nDone');
  } catch (error) {
    console.error(error);
  }
};

app();
