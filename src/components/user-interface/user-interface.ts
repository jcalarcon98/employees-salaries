import fs from 'fs';
import path from 'path';
import process from 'process';
import Colors from '../../utils/color';

const userInterfacePath = path.join(process.cwd(), 'public/UI.txt');
const fileOptionsPath = path.join(process.cwd(), 'public/fileOptions.txt');

class UserInterface {
  private static header : string = fs.readFileSync(userInterfacePath, { encoding: 'utf-8' });

  private static fileOptions : string = fs.readFileSync(fileOptionsPath, { encoding: 'utf-8' });

  static displayHeader() : void {
    this.changeFontColor(Colors.YELLOW);
    console.log(UserInterface.header, Colors.WHITE);
  }

  static displayFileOptions() : void {
    this.changeFontColor(Colors.GREEN);
    console.log(UserInterface.fileOptions, Colors.WHITE);
  }

  static changeFontColor = (color: string) : void => {
    console.log(color);
  };
}

export default UserInterface;
