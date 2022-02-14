import React, { useState, useEffect } from 'react';
 
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
const products= [
  { id: 1, name: 'George', price: '10' },
  { id: 2, name: 'Jeffrey', price: '20' },
  { id: 3, name: 'Alice', price: '30' },
  { id: 4, name: 'Alice', price: '40' }
]
const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

const options = {
  custom: true,
  totalSize: products.length
};

<PaginationProvider
  pagination={ paginationFactory(options) }
>
  {
    ({
      paginationProps,
      paginationTableProps
    }) => (
      <div>
        <SizePerPageDropdownStandalone
          { ...paginationProps }
        />
        <BootstrapTable
          keyField="id"
          data={ products }
          columns={ columns }
          { ...paginationTableProps }
        />
      </div>
    )
  }
</PaginationProvider>