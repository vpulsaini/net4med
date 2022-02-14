import React, { useState, useEffect } from 'react';
 
import BootstrapTable from 'react-bootstrap-table-next';
 
import 'bootstrap/dist/css/bootstrap.min.css';
 
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
 
import paginationFactory from 'react-bootstrap-table2-paginator';
 
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
 
import filterFactory from 'react-bootstrap-table2-filter';
 
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
 
import ToolkitProvider, { CSVExport,Search } from 'react-bootstrap-table2-toolkit';
import {Button, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom';
const tokenx = localStorage.getItem('userName');
const url = `https://net4medix.com/mmc/match/getMessagesToMe?publicationId=-1&toId=${tokenx}&pwd=1234567890&count=-1&appVersion=0.0.31&providerName=Net4Medix&lite=true`;
function imageFormatter(cell, row){
  return "Hello";
}

const columns = [
//   { dataField : 'Message.id', text: 'id',
//   formatter: (cell, row) => <Link style={{textDecoration:"none"}} to={{pathname:'/allconversationaction', hash:cell }}> {cell}</Link>
  

// },

  {dataField:'Message.orderProgressLevel',text:'status',  style: {'width':'60px'},
 formatter: (cell, row) =><Image src={`patient_${cell}.png`}></Image>}
,
  { dataField: 'Message.text', text: 'title',
  formatter: (cell, row) => <Link  style={{textDecoration:"none"}} to={{pathname:'/allconversationaction',hash:row.Message.lastPublicationId, state:{uname:row.Message.From.userName,passw:row.Message.From.mobileNumber,pubId:row.Message.lastPublicationId,pName:row.Message.Provider,noOfImages:'5'}}} > {cell}</Link>
},
  
  { dataField: 'Message.From.dateRegistered', text: 'date'  }

  
];
const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;
 
const MyExportCSV = (props) => {
  const handleClick = () => {
      props.onExport();
  };
  return (
      <div>
          <Button variant="primary" onClick={handleClick}>Export to CSV</Button>
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

export default function ConversationBody() {
  const [bbc,setbbc] =useState({});
  const [posts, setPosts] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const localUser = JSON.parse(localStorage.getItem('testObject')) || {};
let [userData, setUserData] = useState(localUser);

  let pkahai=localStorage.getItem('trigger');
  useEffect(() => {
    
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('something went wrong while requesting posts');
      })
      .then((postsv) =>{setPosts(postsv);
        console.log(postsv);
                      setbbc(postsv);
        localStorage.setItem('trigger','yes');
        
        localStorage.setItem('testObject',JSON.stringify(postsv));
        setUserData(JSON.parse(localStorage.getItem('testObject')));
        // Retrieve the object from storage
        
        
        
      })
      .catch((error) => setError(error.message));
  },[]);
  let pf=posts;
   

  if (error) return <h1>{error}</h1>;
  
   
console.log(typeof(userData));
 let asd=Object.values(userData);
 let bk=(asd.flat(2));
console.log(bk.length);
 if(bk.length<2){
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
                      <ul>
                      <li  style={{display:"inline-block"}}>
                        <MyExportCSV {...props.csvProps} /></li>
       <li style={{display:"inline-block",float:"right"}}className="ml-1 me-auto"> <SearchBar  { ...props.searchProps } /></li>
       </ul>
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
                        
                    </React.Fragment>
                )
            }
        </ToolkitProvider>
        </div>
        )
}