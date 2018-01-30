/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import HorizontalRule from 'atoms/HorizontalRule'
import FieldsTaxonomy from 'foundry/fields/FieldsTaxonomy'
import StyleFormDefault from 'static/style/StyleFormDefault'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Box {...props.wrapper} {...props.wrapperCustom} >
  <Heading level={[3]} f={[3]}>Taxonomy</Heading>
  <HorizontalRule bs={0} h={2} bi='blue' mx={0} w={[0.075]} />
  <FieldsTaxonomy {...StyleFormDefault} />
</Box>