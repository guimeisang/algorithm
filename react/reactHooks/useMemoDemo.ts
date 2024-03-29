// useMemo 是deps变化之后重新执行函数创建值
const Chart = ({dataRange, margins}) => {
  const data = useMemo(() => getDataWithInRange(dataRange), [dataRange])

  const dimensions = useMemo(getDimensions, [margins])
  const xScale = useMemo(getXScale, [data])
  const yScale = useMemo(getYScale, [data])

  return (
    <svg className="Chart" />
  )
}