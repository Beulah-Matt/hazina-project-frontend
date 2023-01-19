import React from 'react'

function Orders() {
  return (
    <div className='maindiv'>
    <table>
      <thead>
      <tr>
        <th>Images</th>
        <th>Product Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Status</th>
     </tr>
     </thead>
     <tbody>
     <tr>
      <td><img src='https://cdn.pixabay.com/photo/2015/04/09/19/53/sock-715022_960_720.jpg' alt='socks'/></td>
      <td>Socks</td>
      <td>Carter's 6-Pack Crew Socks Navy/White/Grey Age-4 Years & Above-3H798510</td>
      <td>Kshs 1200</td>
      <td>100</td>
      <td>
      <select name='status' id='status' className='category'>
          <option value='Recieved'>Recieved</option>
          <option value='processing'>Processing</option>
          <option value='complete'>Complete</option>
        </select>
      </td>
     </tr>
     </tbody>
</table>
  </div>
  )
}

export default Orders