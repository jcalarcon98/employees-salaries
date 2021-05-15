import fs from 'fs';
import path from 'path';
import process from 'process';

const userInterfacePath = path.join(process.cwd(), 'public/UI.txt');

class UserInterface {
  private static header : string = fs.readFileSync(userInterfacePath, { encoding: 'utf-8' });

  static displayHeader() {
    console.log(UserInterface.header);
  }
}

export default UserInterface;
