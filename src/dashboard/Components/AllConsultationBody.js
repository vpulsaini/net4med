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
import { Link } from 'react-router-dom';
const tokenx = localStorage.getItem('userName');
const url = `https://cors-anywhere.herokuapp.com/https://net4medix.com/mmc/match/getMessagesToMe?publicationId=-1&toId=${tokenx}&pwd=1234567890&count=-1&appVersion=0.0.31&providerName=Net4Medix&lite=true`;
const columns = [

  { dataField: 'Message.From.emailAddress', text: 'Name'},
  { dataField: 'Message.Provider', text: 'Price'},
  { dataField: 'Message.From.dateRegistered', text: 'Created'  },
  { dataField: 'Message.mrdNumber', text: ''}
];
const { SearchBar } = Search;

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

export default function AllConsultationBody() {
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
 let bk=(asd.flat(1)).reverse();
 console.log(bk)
 if(bk.length===0){
   return(<><div class="mt-3 spinner-border" role="status">
   <h3 class="sr-only">Loading...</h3>
 </div>
 <h3>Loading...</h3>
 </>)
 }
  return (
    <div >
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
                      <h3 className="ml-2">All Consultation Plans</h3>
                      <ul>
                    
       <li > <SearchBar className="mt-1" style={{backgroundColor:"#ececec",marginLeft:"-25px",width:"300px"}}  { ...props.searchProps } /></li>
       </ul>
                        <BootstrapTable responsive rowStyle={ {height:'5px'} }
                            // bootstrap4
                            // keyField=’id’
                            // columns={columns}
                            // data={userList}
                            pagination={pagination}
                            filter={filterFactory()}
                            {...props.baseProps}
                        />
                        
                    </React.Fragment>
                )
            }
        </ToolkitProvider>
        </div>
        )
}