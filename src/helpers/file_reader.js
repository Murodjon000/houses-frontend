import CryptoJS from 'crypto-js';

/*eslint-disable*/

// Note that for larger files, you may want to hash them incrementally.
// Taken from https://stackoverflow.com/questions/768268/
const md5FromFile = (file) => {
  // FileReader is event driven, does not return promise
  // Wrap with promise api so we can call w/ async await
  // https://stackoverflow.com/questions/34495796
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (fileEvent) => {
      let binary = CryptoJS.lib.WordArray.create(fileEvent.target.result);
      const md5 = CryptoJS.MD5(binary);
      resolve(md5);
    };
    reader.onerror = () => {
      reject('oops, something went wrong with the file reader.');
    };
    // For some reason, readAsBinaryString(file) does not work correctly,
    // so we will handle it as a word array
    reader.readAsArrayBuffer(file);
  });
};

export const fileChecksum = async (file) => {
  const md5 = await md5FromFile(file);
  const checksum = md5.toString(CryptoJS.enc.Base64);
  return checksum;
};
