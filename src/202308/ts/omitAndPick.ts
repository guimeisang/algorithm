// Omit 基于已经声明的类型进行属性剔除获取新类型，剔除声明项
// Pick 从Key value里面挑选出声明项
// Exclude<T, U>，T中取T、U交集的补集

type User = {
  id: string;
  name: string;
  email: string;
}

type UserWithoutEmail = Omit<User, "email">

type UserWithoutEmail = Pick<User, "id" | "name">

type T0 = Exclude<"a" | "b" | "c", "a">
type T1 = Exclude<"a" | "b" | "c", "a" | "b">
type T2 = Exclude<strign | number | (())>

type PickTest<T, K extends keyof T> = {
  [P in K]: T[P]
};

type ExcludeTest<T, U> = T extends U ? never : T

type OmitTest<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

type UserWithoutEmailTest = OmitTest<User, "email">

type UserWithoutEmailTest = PickTest<User, "id" | "name">

type T0Test = ExcludeTest<"a" | "b" | "c", "a">