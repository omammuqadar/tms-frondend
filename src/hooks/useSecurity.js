import CryptoJS from 'crypto-js';

export const encrypt = (value) => { 
  
    CryptoJS.AES.encrypt(value, '123').toString();
  
}

export const decrypt = (value) => { 

  return CryptoJS.AES.decrypt(value, '123').toString(CryptoJS.enc.Utf8);

}
