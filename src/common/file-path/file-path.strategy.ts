interface FilePathStrategy {
  isInputRequired() : boolean;

  getInputMessage() : string;

  getFile(filePath: string) : string;
}

export default FilePathStrategy;
