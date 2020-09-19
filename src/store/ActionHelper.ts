import Category from "@/model/CateEnum";
import ItemData from "@/model/ItemData";
import DataHelper from "./DataHelper";

class ActionHelper {
  //负责处理数据的类
  dateHelper: DataHelper = new DataHelper("memoData", "id");

  //笔记数据
  memoList: Array<ItemData>;

  constructor() {
    //读取本地数据，将笔记数据保存到 this.memoList 变量中
    this.memoList = this.readData();
  }

  //读取数据 转成 ItemData 数组
  readData(): Array<ItemData> {
    //读取本地的 Object 数组
    let objArr = this.dateHelper.readData();

    //将Object 数组转成 ItemData数组
    let itemArr = objArr.map((item: any) => {
      let itemData: ItemData = new ItemData();

      itemData.id = item.id;
      itemData.categoryId = item.categoryId;
      itemData.title = item.title;
      itemData.content = item.content;
      itemData.createTime = item.createTime;

      return itemData;
    });

    return itemArr;
  }

  //新增笔记
  add(item: ItemData): number {
    item.id = this.dateHelper.addData(item);
    this.memoList.push(item);
    this.dateHelper.saveData(this.memoList);
    return item.id;
  }

  //修改笔记
  edit(item: ItemData): void {
    let editItem: ItemData | undefined = this.memoList.find((ele: ItemData) => {
      return ele.id === item.id;
    });

    if (editItem) {
      editItem.categoryId = item.categoryId;
      editItem.title = item.title;
      editItem.content = item.content;
      this.dateHelper.saveData(this.memoList);
    }
  }

  //删除笔记
  remove(id: number): void {
    let index: number = this.memoList.findIndex((ele: ItemData) => {
      return ele.id === id;
    });

    if (index !== -1) {
      this.memoList.splice(index, 1);
      this.dateHelper.saveData(this.memoList);
    }
  }

  //获取类型枚举对应字符串
  getCategoryName(categoryId: Category): string {
    const nameArr: Array<string> = ["工作", "生活", "学习"];
    return nameArr[categoryId];
  }
}

export default ActionHelper;
