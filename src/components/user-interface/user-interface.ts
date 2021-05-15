import fs from 'fs';
import path from 'path';
import process from 'process';
import Colors from '../../utils/color';
import changeFontColor from '../../utils/colors-utils';

const userInterfacePath = path.join(process.cwd(), 'public/UI.txt');
const fileOptionsPath = path.join(process.cwd(), 'public/fileOptions.txt');

class UserInterface {
  private static header : string = fs.readFileSync(userInterfacePath, { encoding: 'utf-8' });

  private static fileOptions : string = fs.readFileSync(fileOptionsPath, { encoding: 'utf-8' });

  static displayHeader() : void {
    changeFontColor(Colors.YELLOW);
    console.log(UserInterface.header, Colors.WHITE);
  }

  static displayFileOptions() : void {
    changeFontColor(Colors.GREEN);
    console.log(UserInterface.fileOptions, Colors.WHITE);
  }
}

export default UserInterface;
