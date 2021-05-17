import fs from 'fs';
import path from 'path';
import FileMessage from './file-messages';
import { FileMessageType } from './types/file-error';

export const getDefaultFileUrl = () => {
  const defaultPath : string = path.join(process.cwd(), 'data/dataset.txt');
  return defaultPath;
};

export const isValidExtension = (filePath: string) : boolean => {
  const acceptedExtensions : [string] = ['.txt'];
  const fileExtension : string = path.extname(filePath);
  return acceptedExtensions.includes(fileExtension);
};

export const getFileContent = (filePath : string) : string[] => {
  const fileContent : string[] = fs.readFileSync(filePath, { encoding: 'utf-8' }).split('\n');
  const cleanFileContent : string[] = fileContent.filter((fileLine) => fileLine.trim() !== '');
  return cleanFileContent;
};

export const hasFileContent = (fileContent: string[]) : boolean => fileContent.length > 0;

export const isFileValid = (filePath: string) : FileMessageType => {
  if (!fs.existsSync(filePath)) {
    return {
      isValid: false,
      content: FileMessage.WRONG_PATH,
    };
  }

  if (!isValidExtension(filePath)) {
    return {
      isValid: false,
      content: FileMessage.WRONG_EXTENSION,
    };
  }

  const fileContent : string[] = getFileContent(filePath);

  if (!hasFileContent(fileContent)) {
    return {
      isValid: false,
      content: FileMessage.EMPTY_FILE,
    };
  }

  return {
    isValid: true,
    content: fileContent,
  };
};
