import React from 'react'
import ReactDOM from 'react-dom'
import KendoGrid from 'kendo-ui-react-jquery-grid'

// Don't forget CSS, webpack used to include CSS
import 'kendo/css/web/kendo.common.min.css'
import 'kendo/css/web/kendo.default.min.css'
import 'kendo/css/web/kendo.materialblack.css'

var App = React.createClass({
  render: function () {
    return (
      <KendoGrid options={{
        dataSource: {
          type: 'odata',
          transport: {
            read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'
          },
          pageSize: 20
        },
        height: 550,
        groupable: true,
        sortable: true,
        resizable: true,
        reorderable: true,
        pageable: true,
        columnMenu: true,
        columns: [{
          field: 'CompanyName',
          title: 'Company Name',
          width: 420
        },
          {
            title: 'Contact Info',
            columns: [{
              field: 'ContactTitle',
              title: 'Contact Title',
              width: 200
            }, {
              field: 'ContactName',
              title: 'Contact Name',
              width: 200
            }, {
              title: 'Location',
              columns: [{
                field: 'Country',
                width: 200
              }, {
                field: 'City',
                width: 200
              }]
            }, {
              field: 'Phone',
              title: 'Phone'
            }]
          }]
      }} />
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
