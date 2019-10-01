const outputDiv = document.getElementById('Box2')
const org1_depts = [
    {
      name: 'accounting',
      children: [
        { name: 'accounting payable', children: [] },
        { name: 'accounting receivable', children: [] },
      ],
    },
    {
      name: 'finance',
      children: [],
    },
  ]
  
  const org2_depts = [
    {
      name: 'accounting',
      children: [
        { name: 'accounting payable', children: [] },
        {
          name: 'accounting receivable',
          children: [{ name: 'cash', children: [] }, { name: 'check', children: [] }],
        },
      ],
    },
    {
      name: 'finance',
      children: [{ name: 'investment', children: [] }],
    },
  ]
  
  
  function PrintDepts(depts, parent){
        
    var listing = document.createElement('ul')
      for(let i = 0; i < depts.length; i++){
          let currentItem = depts[i]
          var listItem = document.createElement('li')
          listItem.innerHTML = currentItem.name
          listing.appendChild(listItem)   
        if(currentItem.children.length){
            PrintDepts(currentItem.children, listItem)
        }
      }
    
        if(parent){
           parent.appendChild(listing)
      }
        else{
          outputDiv.appendChild(listing)
      }
      
    
  }

  var header = document.createElement('h1')
  header.innerHTML = 'Organization 1';
  outputDiv.appendChild(header)
  PrintDepts(org1_depts)
  var header = document.createElement('h1')
  header.innerHTML = 'Organization 2';
  outputDiv.appendChild(header)
  PrintDepts(org2_depts)



