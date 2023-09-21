/**
设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
实现 MinStack 类:
MinStack() 初始化堆栈对象。
void push(int val) 将元素val推入堆栈。
void pop() 删除堆栈顶部的元素。
int top() 获取堆栈顶部的元素。
int getMin() 获取堆栈中的最小元素。
 * */ 

class MinStack {
  protected Stack:number[] = []
  protected MinStack:number[] = []

  push(val: number): void {
    this.Stack.push(val)
    this.MinStack.push(Math.min(val, this.getMin ?? Infinity))
  }
  pop(): void {
    this.Stack.pop()
    this.MinStack.pop()
  }
  top(): number {
    return this.Stack[this.Stack.length - 1]
  }
  getMin(): number {
    return this.MinStack[this.MinStack.length - 1]
  }
}