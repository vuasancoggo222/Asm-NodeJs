import { Col, Row, Slider } from 'antd'
import React from 'react'
type Props = {}

const ContentLayout = (props: Props) => {
  return (
   <div>
        <Row gutter={[24, 32]}>
  <Col span={6} />
  <Col span={6} />
  <Col span={6} />
  <Col span={6} />

  <Col span={6} />
  <Col span={6} />
  <Col span={6} />
  <Col span={6} />
</Row>
<Row gutter={[24, 32]}>
  <Col span={6} />
  <Col span={6} />
  <Col span={6} />
  <Col span={6} />
</Row>
   </div>
  )
}

export default ContentLayout