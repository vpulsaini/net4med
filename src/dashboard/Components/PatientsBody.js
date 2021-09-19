import React, { useState, useEffect } from 'react';
 
import BootstrapTable from 'react-bootstrap-table-next';
 
import 'bootstrap/dist/css/bootstrap.min.css';
 
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
 
import paginationFactory from 'react-bootstrap-table2-paginator';
 
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
 
import filterFactory from 'react-bootstrap-table2-filter';
 
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
 
import ToolkitProvider, { CSVExport,Search } from 'react-bootstrap-table2-toolkit';
import {Button} from 'react-bootstrap'
const url = 'mmc/match/getMessagesToMe?publicationId=-1&toId=testpwt2@pwt.com&pwd=1234567890';
const columns = [
  { dataField:  'Message.id', text: 'Id' },
  { dataField: 'Message.tempMsgId', text: 'role'},
  { dataField: 'Message.mrdNumber', text: 'email'},
  { dataField: 'Message.text', text: 'username'  },
  { dataField: 'Message.postedAt', text: 'more'}
];
const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;
 
const MyExportCSV = (props) => {
    const handleClick = () => {
        props.onExport();
    };
    return (
        <div>
            <Button className="mb-3" variant="primary" onClick={handleClick}>Export to CSV</Button>
        </div>
    );
};
const pagination =paginationFactory({
         page:1,
         sizePerPage:10,
         lastPageText:'>>',
         firstPageText:'<<',
         nextPageText:'>',
         prePageText:'<',
         showTotal:true,
         alwaysShowAllBtns:true,
            
         onPageChange:function(page,sizePerPage){
           console.log('page',page);
           console.log('sizePerPage',sizePerPage);
         },
         onSizePerPageChange:function(page,sizePerPage){
          console.log('page',page);
          console.log('sizePerPage',sizePerPage);
         },



});

export default function PatientsBody() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('something went wrong while requesting posts');
      })
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <h1>{error}</h1>;
 let asd=Object.values(posts)
 let bk=asd.flat(1);
 console.log(bk)
 if(bk.length===0){
   return(<><div class="mt-3 spinner-border" role="status">
   <h3 class="sr-only">Loading...</h3>
 </div>
 <h3>Loading...</h3>
 </>)
 }
  return (
    <div>
        <ToolkitProvider 
            bootstrap
            keyField='id'
            data={bk}
            columns={columns}
            exportCSV search
        >
            {
                props => (
                    <React.Fragment>
                       
        <SearchBar className="mt-1" { ...props.searchProps } />
        <hr />
                        <BootstrapTable responsive rowStyle={ {height:'10px'} }
                            // bootstrap4
                            // keyField=’id’
                            // columns={columns}
                            // data={userList}
                            pagination={pagination}
                            filter={filterFactory()}
                            {...props.baseProps}
                        />
                         <MyExportCSV {...props.csvProps} />
                    </React.Fragment>
                )
            }
        </ToolkitProvider>
        </div>
        )
}