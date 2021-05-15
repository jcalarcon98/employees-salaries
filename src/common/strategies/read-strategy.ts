interface ReadDataStrategy {
  isInputRequired() : boolean;

  getInputMessage() : string;

  getFile(filePath: string) : string;
}

export default ReadDataStrategy;
