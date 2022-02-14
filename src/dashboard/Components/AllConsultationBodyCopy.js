import React, { useState, useEffect } from 'react';
 
import { MDBDataTable } from 'mdbreact';
const url = 'https://cors-anywhere.herokuapp.com/https://net4medix.com/mmc/match/getMessagesToMe?publicationId=-1&toId=testpwt2@pwt.com&pwd=1234567890';
const columns = [

  { dataField: 'Message.From.emailAddress', text: 'Name'},
  { dataField: 'Message.Provider', text: 'Price'},
  { dataField: 'Message.From.dateRegistered', text: 'Created'  },
  { dataField: 'Message.mrdNumber', text: ''}
];




export default function AllConsultationBodyCopy() {
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
        <MDBDataTable
            striped
            keyField='id'
            data={bk}
            columns={columns}
            
        >
           
        </MDBDataTable>
        </div>
        )
}