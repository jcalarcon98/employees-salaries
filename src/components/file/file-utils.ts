import fs from 'fs';
import path from 'path';
import FileMessage from './file-messages';
import { FileMessageType } from './types/file-error';

export const existFile = (filePath: string) : boolean => fs.existsSync(filePath);

export const getDefaultFileUrl = () => {
  const defaultPath : string = path.join(process.cwd(), 'data/dataset.txt');
  return defaultPath;
};

export const isValidExtension = (filePath: string) : boolean => {
  const acceptedExtensions : [string] = ['.txt'];
  const fileExtension : string = path.extname(filePath);
  return acceptedExtensions.includes(fileExtension);
};

export const isFileValid = (filePath: string) : FileMessageType => {
  const fileUrl = filePath !== '' ? filePath : getDefaultFileUrl();

  if (!existFile(fileUrl)) {
    return {
      isValid: false,
      message: FileMessage.WRONG_URL,
    };
  }

  if (!isValidExtension(fileUrl)) {
    return {
      isValid: false,
      message: FileMessage.WRONG_EXTENSION,
    };
  }

  return {
    isValid: true,
    message: FileMessage.CORRECTLY,
  };
};

export const getFileContent = (filePath : string): string => {
  const fileUrl = filePath !== '' ? filePath : getDefaultFileUrl();
  const fileContent : string = fs.readFileSync(fileUrl, { encoding: 'utf-8' });
  return fileContent;
};
