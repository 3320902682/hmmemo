class DataHelper {
  dataKey: string;
  primaryKey: string;

  constructor(dataKey: string, primaryKey: string) {
    this.dataKey = dataKey;
    this.primaryKey = primaryKey;
  }

  /**
   * 读取数据
   */
  readData(): any {
    let strData: string | null = localStorage.getItem(this.dataKey);
    if (strData !== null) {
      return JSON.parse(strData);
    }
    return []
  }

  /**
   * 保存数据
   * @param arrData 
   */
  saveData(arrData: Object[]): void {
    localStorage.setItem(this.dataKey, JSON.stringify(arrData));
  }


  /**
   * 
   * @param conStr 添加一条数据
   */
  addData(obj: any): number {
    let arr: any = this.readData();
    let newId = arr.length > 0 ?
      arr[arr.length - 1][this.primaryKey] + 1 : 1;
    obj[this.primaryKey] = newId;
    arr.push(obj);
    this.saveData(arr);
    return newId;
  }

  /**
   * 
   * @param id 通过 id 删除数据
   */
  removeDataById(id: string | number): boolean {
    let arr: any = this.readData();

    let index = arr.findIndex((ele: any) => {
      return ele[this.primaryKey].toString() === id;
    });
    if (index !== -1) {
      arr.splice(index, 1);
      this.saveData(arr);
      return true
    }

    return false;
  }
}

export default DataHelper;