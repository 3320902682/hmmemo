import Category from "./CateEnum";

class ItemData {
  id!: number;
  categoryId!: number;
  title!: string;
  content!: string;
  createTime!: string;

  constructor(
    id: number = -1,
    categoryId: Category = -1,
    title: string = "",
    content: string = ""
  ) {
    this.id = id;
    this.categoryId = categoryId;
    this.title = title;
    this.content = content;
    this.createTime = this.toSelfDataStr(Date.now());
  }

  toSelfDataStr(timeSpan: number): string {
    let date: Date = new Date(timeSpan);
    let str: string =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate() +
      " " +
      date.getHours() +
      ":" +
      (date.getMinutes() < 10 ? "0" : "") +
      date.getMinutes();
    return str;
  }
}

export default ItemData;
