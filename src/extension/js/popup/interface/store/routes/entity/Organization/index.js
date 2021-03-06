import React from 'react';
import EntityCore from '../EntityCore'
import EntityCoreSearch from '../EntityCoreSearch'

export default props => !props.collection === 'organizations' ? null :
<div>
<EntityCoreSearch
  collection={props.collection}
  entity={props.entity}
/>
<EntityCore
  collection={props.collection}
  entity={props.entity}
  foundryProfile='OrganizationProfileEntry'
  formExtend='OrganizationAdd'
/>
</div>