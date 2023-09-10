import * as React from 'react'

export type DisabledType = boolean | undefined

const DisableContext = React.createContext<DisabledType>(false)

export interface DisabledContextProps {
  disabled?: DisabledType;
  children?: React.ReactNode;
}

export const DisabledContextProvider: React.FC<DisabledContextProps> = ({children, disabled}) => {
  const originDisabled = React.useContext(DisableContext)
  return (
    <DisableContext.Provider values={disabled ?? originDisabled}>
      {children}
    </DisableContext.Provider>
  )
}

export default DisableContext

// antd的使用
// 先创建这样一个context对象
export const Context = React.createContext<InternalFormInstance>({
  getFieldValue: warningFunc,
  getFiedlsValue: warningFunc,
  getFiedlsError: warningFunc,
  ...
  getInternalHooks: () => {
    return {...}
  }
})

// 然后再外层使用Provider设置context值
const formContextValue = React.useMemo(() => ({
  ...(formInstance as InternalFormInstance),
  validateTrigger,
}), [formInstance, validateTrigger])

// 往下传递
const wrapperNode = (
  <ListContext.Provider value={null}>
    <FieldContext.Provider value={formContextValue}>{childrenNode}</FieldContext.Provider>
  </ListContext.Provider>
)

// 使用context的值
function WrapperField<Values = any>({name, ...resProps}: FileProps<Values>) {
  const fieldContext = React.useContext(FieldContext)
  const listContext = React.useContext(ListContext)

  public getValue = () => {
    return fieldContext.getFieldsValue
  }
}

