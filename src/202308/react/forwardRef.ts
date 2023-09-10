// React 可以用 ref 保存原生标签，通过 ref.current 调用这个对象的属性、方法。跨组件传递 ref 
// 需要用 forwardRef 方法，如果你要进一步自定义 ref，那就要用 useImperativeHandle 的 hook。

import { forwardRef, useImperativeHandle, useRef, useEffect } from "react"

interface RefProps {
  aaa: () => void
}

// 案例
const FancyButton = forwardRef((props, ref) => {
  <button ref={ref} className="FancyButton"></button>
})

const ref = React.createRef()
<FancyButton ref={ref}>Click me!</FancyButton>

interface SelectFileModalRef {
  handleShowModal: () => void
  handleCancel: () => void
}

const SelectFileModal = forwardRef<SelectFileModalRef, Props>(
  (props: Props, ref: Ref<SelectFileModalRef>) => {
    useImperativeHandle(ref, () => ({
      handleShowModal,
      handleCancel
    }))
  }
)

// 实际例子
const Guang: React.ForwardRefRenderFunction<HTMLInputElement> = (props, ref) => {
  const aaa = () => {}

  useImperativeHandle(ref, () => {
    return {
      aaa
    }
  })

  return <div>
    <input ref={ref}></input>
  </div>
}

const WrapedGuang = forwardRef(Guang);

function App() {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    console.log('ref', ref.current)
    ref.current?.aaa() // 调用的是子组件WrapedGuang 开放的方法
  }, [])

  return (
    <div>
      <WrapedGuang ref={ref}/>
    </div>
  )
}

// antd 源码：antd的组件都会用forwardRef 包裹一层，用来转发ref，或者是转发内部的html标签的引用，
// 或者是用useImperativeHandle自定义ref对象，来暴露一些方法

formRef.current?.resetFields()
formRef.current?.setFieldsValue()