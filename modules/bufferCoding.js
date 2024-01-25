// Функция кодирования текста в буфер
export const textToBuffer = (text, encoding) => {
  const buffer = Buffer.from(text, encoding);
  return buffer;
};

// Функция декодирования буфера в текст
export const bufferToText = (buffer, encoding) => {
  const text = buffer.toString(encoding);
  return text;
};
